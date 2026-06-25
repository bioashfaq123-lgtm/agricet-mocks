"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { isWithinLiveWindow } from "@/lib/liveTest";
import toast from "react-hot-toast";

interface UserData {
  uid: string;
  email: string;
  name: string;
  isPaid: boolean;
  isBookPaid?: boolean;
  bookPaymentId?: string;
  bookPaidAt?: string;
  sessionToken?: string;
  gtliveAttempted?: boolean;
  gtliveAttemptedEdition?: string;
  createdAt?: unknown;
  progress?: Record<string, { attempted: number; correct: number; lastScore: number; bestScore: number; testCount: number; lastAttempted?: Date }>;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const useAuth = () => useContext(AuthContext);

// Admin email — allowed to stay logged in on multiple devices simultaneously
const ADMIN_EMAIL = "bioashfaq123@gmail.com";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]         = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading]   = useState(true);
  const sessionUnsubRef         = useRef<(() => void) | null>(null);

  const fetchUserData = async (uid: string) => {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) setUserData(snap.data() as UserData);
  };

  // Start real-time session watch — logs out this device if another device logs in
  // Admin email is exempt and can stay logged in on multiple devices
  const startSessionWatch = (uid: string, email: string) => {
    if (sessionUnsubRef.current) sessionUnsubRef.current();
    const unsub = onSnapshot(doc(db, "users", uid), (snap) => {
      if (!snap.exists()) return;
      const data = snap.data() as UserData;
      setUserData(data);
      // Skip single-session enforcement for admin account
      if (email === ADMIN_EMAIL) return;
      // Don't sign students out during the FREE live mock test window — a login
      // on a second device/tab must never kick a student out mid-exam.
      if (isWithinLiveWindow()) return;
      const localToken = typeof window !== "undefined" ? localStorage.getItem("agricet_session") : null;
      if (localToken && data.sessionToken && data.sessionToken !== localToken) {
        // Another device logged in — force sign out this device
        toast.error("You have been signed out because your account was accessed on another device.", { duration: 5000 });
        signOut(auth);
        localStorage.removeItem("agricet_session");
        setUserData(null);
      }
    });
    sessionUnsubRef.current = unsub;
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        await fetchUserData(u.uid);
        startSessionWatch(u.uid, u.email || "");
      } else {
        if (sessionUnsubRef.current) { sessionUnsubRef.current(); sessionUnsubRef.current = null; }
        setUserData(null);
      }
      setLoading(false);
    });
    return () => { unsub(); if (sessionUnsubRef.current) sessionUnsubRef.current(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const signup = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    const token = Date.now().toString();
    const newUser: UserData = {
      uid: cred.user.uid, email, name, isPaid: false,
      progress: {}, createdAt: serverTimestamp(), sessionToken: token,
    };
    await setDoc(doc(db, "users", cred.user.uid), newUser);
    if (typeof window !== "undefined") localStorage.setItem("agricet_session", token);
    setUserData(newUser);
  };

  const login = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    if (email !== ADMIN_EMAIL) {
      // For regular users: update sessionToken so other devices get signed out
      const token = Date.now().toString();
      await updateDoc(doc(db, "users", cred.user.uid), { sessionToken: token });
      if (typeof window !== "undefined") localStorage.setItem("agricet_session", token);
    }
    // Admin: skip sessionToken update — all devices stay logged in freely
    await fetchUserData(cred.user.uid);
  };

  const logout = async () => {
    await signOut(auth);
    if (typeof window !== "undefined") localStorage.removeItem("agricet_session");
    setUserData(null);
  };

  const refreshUserData = async () => {
    if (user) await fetchUserData(user.uid);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, login, signup, logout, refreshUserData, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}
