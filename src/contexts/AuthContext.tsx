"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface UserData {
  uid: string;
  email: string;
  name: string;
  isPaid: boolean;
  sessionToken?: string;
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]         = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading]   = useState(true);

  const fetchUserData = async (uid: string) => {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) setUserData(snap.data() as UserData);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) await fetchUserData(u.uid);
      else setUserData(null);
      setLoading(false);
    });
    return unsub;
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    const newUser: UserData = {
      uid: cred.user.uid, email, name, isPaid: false,
      progress: {}, createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "users", cred.user.uid), newUser);
    setUserData(newUser);
  };

  const login = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    // Single session enforcement: store session token in Firestore
    const token = Date.now().toString();
    await updateDoc(doc(db, "users", cred.user.uid), { sessionToken: token });
    if (typeof window !== "undefined") {
      localStorage.setItem("agricet_session", token);
    }
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
