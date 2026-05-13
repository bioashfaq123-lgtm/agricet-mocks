"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import {
  Users, IndianRupee, CheckCircle, XCircle, Search,
  RefreshCw, TrendingUp, BookOpen, ShieldCheck, Download,
  ToggleLeft, ToggleRight, ChevronUp, ChevronDown,
  UserPlus, CreditCard, Activity, BarChart2, Clock,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";

interface AdminUser {
  uid: string;
  name: string;
  email: string;
  isPaid: boolean;
  paymentId?: string;
  orderId?: string;
  paidAt?: string;
  createdAt: Timestamp | null;
  progress: Record<string, { attempted?: number; correct?: number; testCount?: number }>;
}

type SortKey = "name" | "email" | "createdAt" | "isPaid" | "paidAt" | "tests" | "accuracy";
type SortDir  = "asc" | "desc";
type Tab      = "overview" | "signups" | "payments";

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

  useEffect(() => {
    if (!loading && (!user || user.email !== ADMIN_EMAIL)) router.replace("/dashboard");
  }, [user, loading, router]);

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
  const revenue         = paidUsers * 100;
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
      if (key in map) map[key] += 100;
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

  if (loading || !user) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
    </div>
  );
  if (user.email !== ADMIN_EMAIL) return null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="bg-primary-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-yellow-400" />
          <div>
            <h1 className="font-black text-lg leading-none">Admin Dashboard</h1>
            <p className="text-primary-300 text-xs mt-0.5">AGRICET MOCKS — Real-time Overview</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary-300 text-xs hidden sm:flex items-center gap-1">
            <Clock className="w-3 h-3" /> {lastRefresh.toLocaleTimeString("en-IN")}
          </span>
          <button onClick={fetchUsers} disabled={fetching}
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
                          {ev.type === "payment" ? "💳 Paid ₹100" : "🆕 Signed up"}
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
                        <th className="text-left px-5 py-3.5 text-gray-500 font-semibold">Action</th>
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
                              <button onClick={() => togglePaid(u)} disabled={toggling === u.uid}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 ${
                                  u.isPaid ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-green-50 text-green-700 hover:bg-green-100"
                                }`}>
                                {toggling === u.uid ? <RefreshCw className="w-3 h-3 animate-spin" /> :
                                  u.isPaid ? <><ToggleRight className="w-3 h-3" />Revoke</> : <><ToggleLeft className="w-3 h-3" />Grant</>}
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
                            <span className="font-bold text-emerald-700">₹100</span>
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

      </div>
    </div>
  );
}
