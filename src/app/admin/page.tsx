"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import {
  Users, IndianRupee, CheckCircle, XCircle, Search,
  RefreshCw, TrendingUp, ShieldCheck, Download,
  ToggleLeft, ToggleRight, ChevronUp, ChevronDown,
  UserPlus, CreditCard, Activity, BarChart2, Clock,
  Radio, Mail, Trophy, ListChecks, ChevronRight,
} from "lucide-react";
import { GRAND_TEST_LIVE } from "@/data/grandTestLive";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";

// subject → short colour label (for Live Questions tab)
const SUBJECT_COLORS: Record<string, string> = {
  "agronomy":               "bg-green-100 text-green-700",
  "kharif-crops":           "bg-lime-100 text-lime-700",
  "rabi-crops":             "bg-yellow-100 text-yellow-700",
  "genetics":               "bg-purple-100 text-purple-700",
  "seed-technology":        "bg-teal-100 text-teal-700",
  "soil-science":           "bg-amber-100 text-amber-700",
  "soil-fertility":         "bg-orange-100 text-orange-700",
  "entomology":             "bg-pink-100 text-pink-700",
  "crop-pests":             "bg-rose-100 text-rose-700",
  "farm-machinery":         "bg-cyan-100 text-cyan-700",
  "plant-pathology":        "bg-red-100 text-red-700",
  "agricultural-economics": "bg-blue-100 text-blue-700",
  "surveying":              "bg-indigo-100 text-indigo-700",
  "forestry":               "bg-emerald-100 text-emerald-700",
  "horticulture":           "bg-fuchsia-100 text-fuchsia-700",
  "extension":              "bg-sky-100 text-sky-700",
  "agro-meteorology":       "bg-violet-100 text-violet-700",
  "english":                "bg-stone-100 text-stone-700",
};

function formatSubject(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

interface AdminUser {
  uid: string;
  name: string;
  email: string;
  isPaid: boolean;
  isBookPaid?: boolean;
  paymentId?: string;
  orderId?: string;
  paidAt?: string;
  bookPaidAt?: string;
  createdAt: Timestamp | null;
  progress: Record<string, { attempted?: number; correct?: number; testCount?: number }>;
}

type SortKey = "name" | "email" | "createdAt" | "isPaid" | "paidAt" | "tests" | "accuracy";
type SortDir  = "asc" | "desc";
type Tab      = "overview" | "signups" | "payments" | "live" | "questions";

interface LiveAttempt {
  id: string;
  uid: string;
  name: string;
  email: string;
  score: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  emailSent?: boolean;
  completedAt: Timestamp | null;
}

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [users, setUsers]       = useState<AdminUser[]>([]);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch]     = useState("");
  const [filter, setFilter]     = useState<"all" | "paid" | "free">("all");
  const [sortKey, setSortKey]   = useState<SortKey>("createdAt");
  const [sortDir, setSortDir]   = useState<SortDir>("desc");
  const [toggling, setToggling] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [tab, setTab]           = useState<Tab>("overview");
  const [liveAttempts, setLiveAttempts] = useState<LiveAttempt[]>([]);
  const [liveLoading,  setLiveLoading]  = useState(true);
  const [announceSending, setAnnounceSending] = useState(false);
  const [qSearch,      setQSearch]      = useState("");
  const [qSubject,     setQSubject]     = useState("all");
  const [qExpanded,    setQExpanded]    = useState<string | null>(null);

  // Fetch live mock test attempts via server-side API (Admin SDK bypasses Firestore security rules)
  const fetchLiveAttempts = React.useCallback(async () => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/live-attempts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) { setLiveLoading(false); return; }
      const json = await res.json();
      const list: LiveAttempt[] = (json.docs ?? []).map((d: {
        id: string; uid: string; name: string; email: string;
        score: number; correct: number; wrong: number; unattempted: number;
        total: number; emailSent: boolean; completedAt: number | null;
      }) => ({
        ...d,
        completedAt: d.completedAt ? Timestamp.fromMillis(d.completedAt) : null,
      }));
      setLiveAttempts(list);
      setLiveLoading(false);
    } catch { setLiveLoading(false); }
  }, [user]);

  // Delete ALL live-test attempts (reset the rank list before a new live test).
  const clearLiveAttempts = async () => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    if (!window.confirm(
      "Permanently delete ALL live-test attempt records (the rank list)?\n\n" +
      "Do this only to reset before a new live test. This cannot be undone."
    )) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/live-attempts", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) { setLiveAttempts([]); window.alert(`Cleared ${json.deleted ?? 0} attempt(s).`); }
      else window.alert("Could not clear attempts. Please try again.");
    } catch { window.alert("Could not clear attempts. Please try again."); }
  };

  // Email the FREE live-test announcement to every registered student (BCC, admin only).
  const sendAnnouncement = async () => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    if (!window.confirm(
      `Email the FREE live mock test announcement to students who haven't received it yet?\n\n` +
      `Students already emailed earlier are automatically skipped, so it's safe to click again. This sends a real email and cannot be undone.`
    )) return;
    setAnnounceSending(true);
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/send-announcement", { method: "POST", headers: { Authorization: `Bearer ${token}` } });
      const json = await res.json().catch(() => ({}));
      if (res.ok) window.alert(`Sent to ${json.newlyEmailed ?? 0} new student(s). ${json.alreadyNotified ?? 0} were already notified earlier.`);
      else window.alert("Could not send: " + (json.error || ("HTTP " + res.status)));
    } catch { window.alert("Could not send the announcement. Please try again."); }
    setAnnounceSending(false);
  };

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    fetchLiveAttempts();
    // Poll every 30 seconds for new submissions
    const interval = setInterval(fetchLiveAttempts, 30000);
    return () => clearInterval(interval);
  }, [user, fetchLiveAttempts]);

  useEffect(() => {
    // Wait until auth has fully loaded before deciding to redirect
    if (loading) return;
    if (!user || user.email !== ADMIN_EMAIL) router.replace("/dashboard");
  }, [user, loading, router]);

  // Show spinner while auth is still loading — never redirect prematurely
  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      <p className="text-gray-500 text-sm">Checking credentials…</p>
    </div>
  );

  const fetchUsers = async () => {
    setFetching(true);
    try {
      const snap = await getDocs(collection(db, "users"));
      const list: AdminUser[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          uid:       d.id,
          name:      data.name      ?? "—",
          email:     data.email     ?? "—",
          isPaid:    data.isPaid    ?? false,
          paymentId: data.paymentId ?? "",
          orderId:   data.orderId   ?? "",
          paidAt:    data.paidAt    ?? "",
          createdAt: data.createdAt ?? null,
          progress:  data.progress  ?? {},
        };
      });
      setUsers(list);
      setLastRefresh(new Date());
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => { if (user?.email === ADMIN_EMAIL) fetchUsers(); }, [user]);

  const togglePaid = async (u: AdminUser) => {
    setToggling(u.uid);
    try {
      const newPaid = !u.isPaid;
      await updateDoc(doc(db, "users", u.uid), {
        isPaid: newPaid,
        ...(newPaid && !u.paidAt ? { paidAt: new Date().toISOString(), paymentId: "manual-grant" } : {}),
      });
      setUsers(prev => prev.map(x => x.uid === u.uid ? { ...x, isPaid: newPaid } : x));
    } finally {
      setToggling(null);
    }
  };

  const toggleBookPaid = async (u: AdminUser) => {
    setToggling(u.uid + "_book");
    try {
      const newVal = !u.isBookPaid;
      await updateDoc(doc(db, "users", u.uid), {
        isBookPaid: newVal,
        ...(newVal && !u.bookPaidAt ? { bookPaidAt: new Date().toISOString(), bookPaymentId: "manual-grant" } : {}),
      });
      setUsers(prev => prev.map(x => x.uid === u.uid ? { ...x, isBookPaid: newVal } : x));
    } finally {
      setToggling(null);
    }
  };

  // ── Helpers ──────────────────────────────────────────────────────────────
  const getTests    = (u: AdminUser) => Object.values(u.progress).reduce((a, v) => a + (v.testCount ?? 0), 0);
  const getAccuracy = (u: AdminUser) => {
    const att = Object.values(u.progress).reduce((a, v) => a + (v.attempted ?? 0), 0);
    const cor = Object.values(u.progress).reduce((a, v) => a + (v.correct   ?? 0), 0);
    return att > 0 ? Math.round((cor / att) * 100) : null;
  };

  const tsToDate = (ts: Timestamp | null) =>
    !ts ? null : ts.toDate ? ts.toDate() : new Date(ts as unknown as number);

  const formatDate = (ts: Timestamp | null) => {
    const d = tsToDate(ts);
    if (!d) return "—";
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const formatDateTime = (iso: string | undefined) => {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) +
           " " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  };

  const timeAgo = (iso: string | undefined | null, ts?: Timestamp | null) => {
    const d = iso ? new Date(iso) : tsToDate(ts ?? null);
    if (!d) return "";
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1)   return "just now";
    if (mins < 60)  return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs  < 24)  return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  // ── Stats ─────────────────────────────────────────────────────────────────
  const totalUsers      = users.length;
  const paidUsers       = users.filter(u => u.isPaid).length;
  const freeUsers       = totalUsers - paidUsers;
  const revenue         = paidUsers * 199;
  const conversionRate  = totalUsers > 0 ? Math.round((paidUsers / totalUsers) * 100) : 0;

  // Signups per day (last 14 days)
  const signupChart = useMemo(() => {
    const map: Record<string, number> = {};
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      map[d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })] = 0;
    }
    users.forEach(u => {
      const d = tsToDate(u.createdAt);
      if (!d) return;
      const diff = (Date.now() - d.getTime()) / 86400000;
      if (diff > 14) return;
      const key = d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
      if (key in map) map[key]++;
    });
    return Object.entries(map).map(([date, signups]) => ({ date, signups }));
  }, [users]);

  // Revenue per day (last 14 days)
  const revenueChart = useMemo(() => {
    const map: Record<string, number> = {};
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      map[d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })] = 0;
    }
    users.filter(u => u.isPaid && u.paidAt).forEach(u => {
      const d = new Date(u.paidAt!);
      const diff = (Date.now() - d.getTime()) / 86400000;
      if (diff > 14) return;
      const key = d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
      if (key in map) map[key] += 199;
    });
    return Object.entries(map).map(([date, amount]) => ({ date, amount }));
  }, [users]);

  // Recent activity feed (last 10 events)
  const recentActivity = useMemo(() => {
    type Event = { type: "signup" | "payment"; user: AdminUser; date: Date };
    const events: Event[] = [];
    users.forEach(u => {
      const d = tsToDate(u.createdAt);
      if (d) events.push({ type: "signup", user: u, date: d });
      if (u.isPaid && u.paidAt) events.push({ type: "payment", user: u, date: new Date(u.paidAt) });
    });
    return events.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 12);
  }, [users]);

  // ── Sort + filter ─────────────────────────────────────────────────────────
  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  };
  const SortIcon = ({ k }: { k: SortKey }) =>
    sortKey !== k ? <span className="opacity-20 ml-0.5">↕</span> :
    sortDir === "asc" ? <ChevronUp className="w-3 h-3 inline ml-0.5" /> : <ChevronDown className="w-3 h-3 inline ml-0.5" />;

  const displayed = useMemo(() => {
    let list = [...users];
    if (filter === "paid") list = list.filter(u => u.isPaid);
    if (filter === "free") list = list.filter(u => !u.isPaid);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      let va: number | string = 0, vb: number | string = 0;
      if (sortKey === "name")      { va = a.name;  vb = b.name; }
      if (sortKey === "email")     { va = a.email; vb = b.email; }
      if (sortKey === "isPaid")    { va = a.isPaid ? 1 : 0; vb = b.isPaid ? 1 : 0; }
      if (sortKey === "tests")     { va = getTests(a); vb = getTests(b); }
      if (sortKey === "accuracy")  { va = getAccuracy(a) ?? -1; vb = getAccuracy(b) ?? -1; }
      if (sortKey === "createdAt") {
        va = tsToDate(a.createdAt)?.getTime() ?? 0;
        vb = tsToDate(b.createdAt)?.getTime() ?? 0;
      }
      if (sortKey === "paidAt") {
        va = a.paidAt ? new Date(a.paidAt).getTime() : 0;
        vb = b.paidAt ? new Date(b.paidAt).getTime() : 0;
      }
      return (va < vb ? -1 : va > vb ? 1 : 0) * (sortDir === "asc" ? 1 : -1);
    });
    return list;
  }, [users, filter, search, sortKey, sortDir]);

  const exportCSV = () => {
    const rows = [
      ["Name", "Email", "Status", "Joined", "Paid At", "Payment ID", "Tests", "Accuracy"],
      ...displayed.map(u => [
        u.name, u.email,
        u.isPaid ? "Paid" : "Free",
        formatDate(u.createdAt),
        u.paidAt ? formatDateTime(u.paidAt) : "—",
        u.paymentId || "—",
        getTests(u),
        getAccuracy(u) !== null ? `${getAccuracy(u)}%` : "N/A",
      ]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `agricet-users-${new Date().toISOString().slice(0,10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  if (!user) return null;
  if (user.email !== ADMIN_EMAIL) return null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="bg-primary-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-yellow-400" />
          <div>
            <h1 className="font-black text-lg leading-none">Admin Dashboard</h1>
            <p className="text-primary-300 text-xs mt-0.5">AEO & AGRICET Mocks — Real-time Overview</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary-300 text-xs hidden sm:flex items-center gap-1">
            <Clock className="w-3 h-3" /> {lastRefresh.toLocaleTimeString("en-IN")}
          </span>
          <button onClick={() => { fetchUsers(); fetchLiveAttempts(); }} disabled={fetching}
            className="flex items-center gap-1.5 bg-primary-700 hover:bg-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${fetching ? "animate-spin" : ""}`} /> Refresh
          </button>
          <button onClick={exportCSV}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" /> CSV
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* ── Stat Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {[
            { label: "Total Signups",  value: totalUsers,   icon: Users,       bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200" },
            { label: "Paid Users",     value: paidUsers,    icon: CheckCircle, bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200" },
            { label: "Free Users",     value: freeUsers,    icon: XCircle,     bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
            { label: "Revenue",        value: `₹${revenue.toLocaleString("en-IN")}`, icon: IndianRupee, bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
            { label: "Conversion",     value: `${conversionRate}%`, icon: TrendingUp, bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
          ].map(s => (
            <div key={s.label} className={`bg-white rounded-2xl p-5 border ${s.border}`}>
              <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.text}`} />
              </div>
              <div className={`text-2xl font-black ${s.text}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────── */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-6 w-fit">
          {([
            { id: "overview",  label: "Overview",  icon: BarChart2 },
            { id: "signups",   label: "All Users", icon: Users },
            { id: "payments",  label: "Payments",  icon: CreditCard },
            { id: "live",      label: "Live Test", icon: Radio },
            { id: "questions", label: "Live Questions", icon: ListChecks },
          ] as { id: Tab; label: string; icon: React.ElementType }[]).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === t.id ? "bg-primary-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}>
              <t.icon className="w-4 h-4" /> {t.label}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* OVERVIEW TAB                                                 */}
        {/* ════════════════════════════════════════════════════════════ */}
        {tab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Charts column */}
            <div className="lg:col-span-2 space-y-6">

              {/* Signups chart */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="font-bold text-gray-900">Daily Signups</h2>
                    <p className="text-xs text-gray-400">Last 14 days</p>
                  </div>
                  <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    <UserPlus className="w-3.5 h-3.5" /> {totalUsers} total
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={signupChart}>
                    <defs>
                      <linearGradient id="signupGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#166534" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#166534" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#9ca3af" }} width={25} />
                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                    <Area type="monotone" dataKey="signups" stroke="#166534" strokeWidth={2}
                      fill="url(#signupGrad)" name="Signups" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue chart */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="font-bold text-gray-900">Daily Revenue</h2>
                    <p className="text-xs text-gray-400">Last 14 days (₹)</p>
                  </div>
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                    <IndianRupee className="w-3.5 h-3.5" /> ₹{revenue.toLocaleString("en-IN")} total
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={revenueChart}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                    <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} width={40} />
                    <Tooltip
                      formatter={(v: number) => [`₹${v}`, "Revenue"]}
                      contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
                    <Bar dataKey="amount" fill="#16a34a" radius={[4,4,0,0]} name="Revenue (₹)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activity feed */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 h-fit">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="w-5 h-5 text-primary-600" />
                <h2 className="font-bold text-gray-900">Recent Activity</h2>
              </div>
              <div className="space-y-3">
                {recentActivity.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-8">No activity yet</p>
                ) : recentActivity.map((ev, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      ev.type === "payment" ? "bg-green-100" : "bg-blue-100"
                    }`}>
                      {ev.type === "payment"
                        ? <CreditCard className="w-4 h-4 text-green-600" />
                        : <UserPlus  className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{ev.user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{ev.user.email}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                          ev.type === "payment" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {ev.type === "payment" ? "💳 Paid ₹199" : "🆕 Signed up"}
                        </span>
                        <span className="text-xs text-gray-400">{timeAgo(ev.date.toISOString())}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════ */}
        {/* ALL USERS TAB                                                */}
        {/* ════════════════════════════════════════════════════════════ */}
        {tab === "signups" && (
          <>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search by name or email…"
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="flex gap-2">
                {(["all", "paid", "free"] as const).map(f => (
                  <button key={f} onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-colors ${
                      filter === f ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}>
                    {f} ({f === "all" ? totalUsers : f === "paid" ? paidUsers : freeUsers})
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {fetching ? (
                <div className="flex items-center justify-center py-20 gap-3 text-gray-400">
                  <RefreshCw className="w-5 h-5 animate-spin" /><span>Loading…</span>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-5 py-3.5 text-gray-400 font-semibold w-8">#</th>
                        {([
                          { k: "name",      label: "Name" },
                          { k: "email",     label: "Email" },
                          { k: "createdAt", label: "Joined" },
                          { k: "isPaid",    label: "Status" },
                          { k: "tests",     label: "Tests" },
                          { k: "accuracy",  label: "Accuracy" },
                        ] as { k: SortKey; label: string }[]).map(col => (
                          <th key={col.k} onClick={() => handleSort(col.k)}
                            className="text-left px-5 py-3.5 text-gray-500 font-semibold cursor-pointer hover:text-gray-800 select-none whitespace-nowrap">
                            {col.label} <SortIcon k={col.k} />
                          </th>
                        ))}
                        <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Mock Access</th>
                        <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Book Access</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {displayed.map((u, i) => {
                        const tests    = getTests(u);
                        const accuracy = getAccuracy(u);
                        return (
                          <tr key={u.uid} className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-4 text-gray-400 text-xs">{i + 1}</td>
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                                  {u.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="font-semibold text-gray-900 whitespace-nowrap">{u.name}</span>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-gray-500 text-xs">{u.email}</td>
                            <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
                              {formatDate(u.createdAt)}
                              <div className="text-gray-400">{timeAgo(null, u.createdAt)}</div>
                            </td>
                            <td className="px-5 py-4">
                              {u.isPaid ? (
                                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                  <CheckCircle className="w-3 h-3" /> Paid
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-full">
                                  <XCircle className="w-3 h-3" /> Free
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4 text-gray-700 font-medium">
                              {tests > 0 ? <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-primary-500" />{tests}</span> : <span className="text-gray-400">—</span>}
                            </td>
                            <td className="px-5 py-4">
                              {accuracy !== null ? (
                                <span className={`font-bold ${accuracy >= 70 ? "text-green-600" : accuracy >= 40 ? "text-amber-500" : "text-red-500"}`}>
                                  {accuracy}%
                                </span>
                              ) : <span className="text-gray-400">—</span>}
                            </td>
                            <td className="px-5 py-4">
                              <button onClick={() => togglePaid(u)} disabled={!!toggling}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 ${
                                  u.isPaid ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-green-50 text-green-700 hover:bg-green-100"
                                }`}>
                                {toggling === u.uid ? <RefreshCw className="w-3 h-3 animate-spin" /> :
                                  u.isPaid ? <><ToggleRight className="w-3 h-3" /> Revoke</> : <><ToggleLeft className="w-3 h-3" /> Grant</>}
                              </button>
                            </td>
                            <td className="px-5 py-4">
                              <button onClick={() => toggleBookPaid(u)} disabled={!!toggling}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 ${
                                  u.isBookPaid ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                                }`}>
                                {toggling === u.uid + "_book" ? <RefreshCw className="w-3 h-3 animate-spin" /> :
                                  u.isBookPaid ? <><ToggleRight className="w-3 h-3" /> Revoke Book</> : <><ToggleLeft className="w-3 h-3" /> Grant Book</>}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {!fetching && (
                <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
                  <span>Showing {displayed.length} of {totalUsers} users</span>
                  <span>{paidUsers} paid · {freeUsers} free · ₹{revenue.toLocaleString("en-IN")} collected</span>
                </div>
              )}
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════════════════ */}
        {/* PAYMENTS TAB                                                 */}
        {/* ════════════════════════════════════════════════════════════ */}
        {tab === "payments" && (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {fetching ? (
              <div className="flex items-center justify-center py-20 gap-3 text-gray-400">
                <RefreshCw className="w-5 h-5 animate-spin" /><span>Loading…</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-5 py-3.5 text-gray-400 font-semibold w-8">#</th>
                      {([
                        { k: "name",    label: "Student" },
                        { k: "email",   label: "Email" },
                        { k: "paidAt",  label: "Paid At" },
                        { k: "isPaid",  label: "Status" },
                      ] as { k: SortKey; label: string }[]).map(col => (
                        <th key={col.k} onClick={() => handleSort(col.k)}
                          className="text-left px-5 py-3.5 text-gray-500 font-semibold cursor-pointer hover:text-gray-800 select-none whitespace-nowrap">
                          {col.label} <SortIcon k={col.k} />
                        </th>
                      ))}
                      <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Payment ID</th>
                      <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Amount</th>
                      <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users
                      .filter(u => u.isPaid)
                      .sort((a, b) => {
                        const da = a.paidAt ? new Date(a.paidAt).getTime() : 0;
                        const db2 = b.paidAt ? new Date(b.paidAt).getTime() : 0;
                        return db2 - da;
                      })
                      .map((u, i) => (
                        <tr key={u.uid} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4 text-gray-400 text-xs">{i + 1}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                                {u.name.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-semibold text-gray-900">{u.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-gray-500 text-xs">{u.email}</td>
                          <td className="px-5 py-4 text-xs">
                            <div className="text-gray-800 font-medium">{formatDateTime(u.paidAt)}</div>
                            <div className="text-gray-400">{timeAgo(u.paidAt)}</div>
                          </td>
                          <td className="px-5 py-4">
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                              <CheckCircle className="w-3 h-3" /> Paid
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            {u.paymentId ? (
                              <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">
                                {u.paymentId.slice(0, 20)}…
                              </code>
                            ) : <span className="text-gray-400 text-xs">manual</span>}
                          </td>
                          <td className="px-5 py-4">
                            <span className="font-bold text-emerald-700">₹199</span>
                          </td>
                          <td className="px-5 py-4">
                            <button onClick={() => togglePaid(u)} disabled={toggling === u.uid}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50">
                              {toggling === u.uid ? <RefreshCw className="w-3 h-3 animate-spin" /> : <><ToggleRight className="w-3 h-3" />Revoke</>}
                            </button>
                          </td>
                        </tr>
                      ))}
                    {users.filter(u => u.isPaid).length === 0 && (
                      <tr><td colSpan={8} className="text-center py-20 text-gray-400">
                        <CreditCard className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p>No payments yet</p>
                      </td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
              <span>{paidUsers} payments recorded</span>
              <span className="font-bold text-emerald-700">Total: ₹{revenue.toLocaleString("en-IN")}</span>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════ */}
        {/* LIVE TEST TAB                                                */}
        {/* ════════════════════════════════════════════════════════════ */}
        {tab === "live" && (
          <div className="space-y-6">
            {/* Announce to all students */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-bold"><Mail className="w-4 h-4 text-primary-600" /> Notify students by email</div>
                <p className="text-xs text-gray-400 mt-1">Emails the FREE live-test announcement (date, link, login reminder) to registered students. Already-notified students are skipped, so it is safe to click again.</p>
              </div>
              <button
                onClick={sendAnnouncement}
                disabled={announceSending || users.length === 0}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" /> {announceSending ? "Sending…" : "Email all students now"}
              </button>
            </div>
            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  <Radio className="w-4 h-4 text-red-500 animate-pulse" /> Live Attempts
                </div>
                <div className="text-3xl font-black text-gray-900">{liveAttempts.length}</div>
                <p className="text-xs text-gray-400 mt-1">Students who finished the test</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  <Trophy className="w-4 h-4 text-amber-500" /> Avg Score
                </div>
                <div className="text-3xl font-black text-gray-900">
                  {liveAttempts.length
                    ? Math.round(liveAttempts.reduce((s, a) => s + a.score, 0) / liveAttempts.length)
                    : 0}%
                </div>
                <p className="text-xs text-gray-400 mt-1">Across all attempts</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Highest Score
                </div>
                <div className="text-3xl font-black text-gray-900">
                  {liveAttempts.length ? Math.max(...liveAttempts.map(a => a.score)) : 0}%
                </div>
                <p className="text-xs text-gray-400 mt-1">Top performer</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  <Mail className="w-4 h-4 text-blue-500" /> Result Emails Sent
                </div>
                <div className="text-3xl font-black text-gray-900">
                  {liveAttempts.filter(a => a.emailSent).length} / {liveAttempts.length}
                </div>
                <p className="text-xs text-gray-400 mt-1">Auto-sent after submission</p>
              </div>
            </div>

            {/* Attempts table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-red-500" /> Live Mock Test — Attempts (real-time)
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">Updates automatically</span>
                  {liveAttempts.length > 0 && (
                    <button
                      onClick={() => {
                        const ranked = [...liveAttempts].sort((a, b) =>
                          b.score - a.score || b.correct - a.correct || a.wrong - b.wrong
                        );
                        const rows = [
                          ["Rank", "Name", "Email", "Score (%)", "Correct", "Wrong", "Unattempted", "Total", "Completed At", "Result Email Sent"],
                          ...ranked.map((a, i) => [
                            String(i + 1), a.name, a.email,
                            String(a.score), String(a.correct), String(a.wrong), String(a.unattempted), String(a.total),
                            a.completedAt?.toDate ? a.completedAt.toDate().toLocaleString("en-IN") : "—",
                            a.emailSent ? "Yes" : "No",
                          ]),
                        ];
                        const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
                        const blob = new Blob([csv], { type: "text/csv" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url; a.download = `agricet-live-test-rank-list-${new Date().toISOString().slice(0,10)}.csv`;
                        a.click(); URL.revokeObjectURL(url);
                      }}
                      className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Export Rank List CSV
                    </button>
                  )}
                  {liveAttempts.length > 0 && (
                    <button
                      onClick={clearLiveAttempts}
                      className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <XCircle className="w-3.5 h-3.5" /> Clear attempts
                    </button>
                  )}
                </div>
              </div>
              {liveLoading ? (
                <div className="py-16 text-center text-gray-400 text-sm">Loading attempts…</div>
              ) : liveAttempts.length === 0 ? (
                <div className="py-16 text-center text-gray-400">
                  <Radio className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No one has attempted the live test yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wide">
                      <tr>
                        <th className="text-center px-5 py-3">Rank</th>
                        <th className="text-left px-5 py-3">Student</th>
                        <th className="text-left px-5 py-3">Email</th>
                        <th className="text-center px-5 py-3">Score</th>
                        <th className="text-center px-5 py-3">Correct</th>
                        <th className="text-center px-5 py-3">Wrong</th>
                        <th className="text-center px-5 py-3">Skipped</th>
                        <th className="text-center px-5 py-3">Result Email</th>
                        <th className="text-right px-5 py-3">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {liveAttempts.map(a => {
                        const rank = liveAttempts.filter(x => x.score > a.score || (x.score === a.score && x.correct > a.correct)).length + 1;
                        return (
                        <tr key={a.id} className="hover:bg-gray-50/60">
                          <td className="px-5 py-3 text-center font-black text-gray-700">{rank}</td>
                          <td className="px-5 py-3 font-semibold text-gray-900">{a.name}</td>
                          <td className="px-5 py-3 text-gray-500">{a.email}</td>
                          <td className="px-5 py-3 text-center">
                            <span className={`font-bold px-2.5 py-1 rounded-full text-xs ${
                              a.score >= 70 ? "bg-green-100 text-green-700"
                              : a.score >= 50 ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                            }`}>{a.score}%</span>
                          </td>
                          <td className="px-5 py-3 text-center text-green-700 font-semibold">{a.correct}</td>
                          <td className="px-5 py-3 text-center text-red-600 font-semibold">{a.wrong}</td>
                          <td className="px-5 py-3 text-center text-gray-400">{a.unattempted}</td>
                          <td className="px-5 py-3 text-center">
                            {a.emailSent
                              ? <span className="inline-flex items-center gap-1 text-green-700 text-xs font-semibold"><CheckCircle className="w-3.5 h-3.5" /> Sent</span>
                              : <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-semibold"><XCircle className="w-3.5 h-3.5" /> Pending</span>}
                          </td>
                          <td className="px-5 py-3 text-right text-gray-400 text-xs">
                            {a.completedAt ? timeAgo(a.completedAt.toDate().toISOString()) : "—"}
                          </td>
                        </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════ */}
        {/* LIVE QUESTIONS TAB                                           */}
        {/* ════════════════════════════════════════════════════════════ */}
        {tab === "questions" && (() => {
          const subjects = Array.from(new Set(GRAND_TEST_LIVE.map(q => q.subject)));
          const filtered = GRAND_TEST_LIVE.filter(q => {
            const matchesSubject = qSubject === "all" || q.subject === qSubject;
            const s = qSearch.trim().toLowerCase();
            const matchesSearch = !s ||
              q.question.toLowerCase().includes(s) ||
              q.options.some(o => o.toLowerCase().includes(s)) ||
              String(q.qNo).includes(s);
            return matchesSubject && matchesSearch;
          });

          return (
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <ListChecks className="w-5 h-5 text-primary-600" />
                  <h2 className="text-lg font-black text-gray-900">Live Mock Test — All Questions</h2>
                </div>
                <p className="text-sm text-gray-500">
                  {GRAND_TEST_LIVE.length} questions total · showing {filtered.length}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={qSearch}
                      onChange={(e) => setQSearch(e.target.value)}
                      placeholder="Search by question text, option, or question number…"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                  <select
                    value={qSubject}
                    onChange={(e) => setQSubject(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="all">All Subjects</option>
                    {subjects.map(s => (
                      <option key={s} value={s}>{formatSubject(s)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {filtered.map((q) => {
                  const isOpen = qExpanded === q.id;
                  return (
                    <div key={q.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => setQExpanded(isOpen ? null : q.id)}
                        className="w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="shrink-0 mt-0.5 text-xs font-black bg-primary-100 text-primary-700 rounded-full w-7 h-7 flex items-center justify-center">
                          {q.qNo}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${SUBJECT_COLORS[q.subject] ?? "bg-gray-100 text-gray-600"}`}>
                              {formatSubject(q.subject)}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-gray-900 leading-relaxed">{q.question}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 space-y-2">
                          {q.matchTable && (
                            <div className="overflow-x-auto mb-1 rounded-xl border border-gray-200">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-primary-50">
                                    {q.matchTable.headers.map((h, i) => (
                                      <th key={i} className="text-left font-bold text-primary-800 px-3 py-2 border-b border-gray-200">{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {q.matchTable.rows.map((row, ri) => (
                                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                      {row.map((cell, ci) => (
                                        <td key={ci} className="px-3 py-2 text-gray-700 border-b border-gray-100 last:border-b-0">{cell}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          {q.options.map((opt, i) => (
                            <div
                              key={i}
                              className={`text-sm rounded-lg px-3 py-2 border ${
                                i === q.correct
                                  ? "bg-green-50 border-green-200 text-green-800 font-semibold"
                                  : "bg-gray-50 border-gray-100 text-gray-600"
                              }`}
                            >
                              <span className="font-bold mr-1.5">{String.fromCharCode(65 + i)}.</span>
                              {opt}
                              {i === q.correct && <span className="ml-2 text-xs font-bold text-green-600">✓ Correct Answer</span>}
                            </div>
                          ))}
                          {q.explanation && (
                            <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5 mt-2">
                              <span className="text-xs font-bold text-blue-700">💡 Explanation: </span>
                              <span className="text-sm text-blue-900 leading-relaxed">{q.explanation}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {filtered.length === 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center text-gray-400 text-sm">
                    No questions match your search/filter.
                  </div>
                )}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
