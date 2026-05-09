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
} from "lucide-react";

// ── Set your email here (or in .env.local as NEXT_PUBLIC_ADMIN_EMAIL) ──
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";

interface AdminUser {
  uid: string;
  name: string;
  email: string;
  isPaid: boolean;
  createdAt: Timestamp | null;
  progress: Record<string, { attempted?: number; correct?: number; testCount?: number }>;
}

type SortKey = "name" | "email" | "createdAt" | "isPaid" | "tests" | "accuracy";
type SortDir = "asc" | "desc";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [users, setUsers]         = useState<AdminUser[]>([]);
  const [fetching, setFetching]   = useState(true);
  const [search, setSearch]       = useState("");
  const [filter, setFilter]       = useState<"all" | "paid" | "free">("all");
  const [sortKey, setSortKey]     = useState<SortKey>("createdAt");
  const [sortDir, setSortDir]     = useState<SortDir>("desc");
  const [toggling, setToggling]   = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  // ── Guard: only admin ──
  useEffect(() => {
    if (!loading && (!user || user.email !== ADMIN_EMAIL)) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  // ── Fetch users ──
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

  useEffect(() => { if (user && user.email === ADMIN_EMAIL) fetchUsers(); }, [user]);

  // ── Toggle paid ──
  const togglePaid = async (u: AdminUser) => {
    setToggling(u.uid);
    try {
      await updateDoc(doc(db, "users", u.uid), { isPaid: !u.isPaid });
      setUsers(prev => prev.map(x => x.uid === u.uid ? { ...x, isPaid: !u.isPaid } : x));
    } finally {
      setToggling(null);
    }
  };

  // ── Helpers ──
  const getTests = (u: AdminUser) =>
    Object.values(u.progress).reduce((a, v) => a + (v.testCount ?? 0), 0);

  const getAccuracy = (u: AdminUser) => {
    const att = Object.values(u.progress).reduce((a, v) => a + (v.attempted ?? 0), 0);
    const cor = Object.values(u.progress).reduce((a, v) => a + (v.correct  ?? 0), 0);
    return att > 0 ? Math.round((cor / att) * 100) : null;
  };

  const formatDate = (ts: Timestamp | null) => {
    if (!ts) return "—";
    const d = ts.toDate ? ts.toDate() : new Date(ts as unknown as number);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  // ── Sort ──
  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const SortIcon = ({ k }: { k: SortKey }) =>
    sortKey !== k ? null :
    sortDir === "asc" ? <ChevronUp className="w-3 h-3 inline ml-0.5" /> : <ChevronDown className="w-3 h-3 inline ml-0.5" />;

  // ── Filter + search + sort ──
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
      if (sortKey === "name")      { va = a.name;    vb = b.name; }
      if (sortKey === "email")     { va = a.email;   vb = b.email; }
      if (sortKey === "isPaid")    { va = a.isPaid ? 1 : 0; vb = b.isPaid ? 1 : 0; }
      if (sortKey === "tests")     { va = getTests(a); vb = getTests(b); }
      if (sortKey === "accuracy")  { va = getAccuracy(a) ?? -1; vb = getAccuracy(b) ?? -1; }
      if (sortKey === "createdAt") {
        va = a.createdAt ? (a.createdAt.toDate ? a.createdAt.toDate().getTime() : 0) : 0;
        vb = b.createdAt ? (b.createdAt.toDate ? b.createdAt.toDate().getTime() : 0) : 0;
      }
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ?  1 : -1;
      return 0;
    });
    return list;
  }, [users, filter, search, sortKey, sortDir]);

  // ── Stats ──
  const totalUsers  = users.length;
  const paidUsers   = users.filter(u => u.isPaid).length;
  const freeUsers   = totalUsers - paidUsers;
  const revenue     = paidUsers * 250;
  const avgTests    = totalUsers > 0
    ? (users.reduce((a, u) => a + getTests(u), 0) / totalUsers).toFixed(1)
    : "0";

  // ── CSV export ──
  const exportCSV = () => {
    const rows = [
      ["Name", "Email", "Paid", "Joined", "Tests Taken", "Accuracy"],
      ...displayed.map(u => [
        u.name, u.email,
        u.isPaid ? "Yes" : "No",
        formatDate(u.createdAt),
        getTests(u),
        getAccuracy(u) !== null ? `${getAccuracy(u)}%` : "N/A",
      ]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `agricet-users-${new Date().toISOString().slice(0,10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (user.email !== ADMIN_EMAIL) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-gold-400" />
          <div>
            <h1 className="font-black text-lg leading-none">Admin Dashboard</h1>
            <p className="text-primary-300 text-xs mt-0.5">AGRICET MOCKS — User Management</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary-300 text-xs hidden sm:block">
            Last refreshed: {lastRefresh.toLocaleTimeString("en-IN")}
          </span>
          <button onClick={fetchUsers} disabled={fetching}
            className="flex items-center gap-2 bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${fetching ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button onClick={exportCSV}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total Users",   value: totalUsers,        icon: Users,       color: "bg-blue-50 text-blue-700",    border: "border-blue-200" },
            { label: "Paid Users",    value: paidUsers,         icon: CheckCircle, color: "bg-green-50 text-green-700",  border: "border-green-200" },
            { label: "Free Users",    value: freeUsers,         icon: XCircle,     color: "bg-orange-50 text-orange-700",border: "border-orange-200" },
            { label: "Revenue (₹)",   value: `₹${revenue.toLocaleString("en-IN")}`, icon: IndianRupee, color: "bg-emerald-50 text-emerald-700", border: "border-emerald-200" },
            { label: "Avg Tests/User",value: avgTests,          icon: BookOpen,    color: "bg-purple-50 text-purple-700",border: "border-purple-200" },
          ].map((s) => (
            <div key={s.label} className={`bg-white rounded-2xl p-5 border ${s.border} flex flex-col gap-2`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color.replace("text-", "bg-").split(" ")[0]}20`}>
                <s.icon className={`w-5 h-5 ${s.color.split(" ")[1]}`} />
              </div>
              <div className={`text-2xl font-black ${s.color.split(" ")[1]}`}>{s.value}</div>
              <div className="text-xs text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Search + filter bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text" placeholder="Search by name or email…"
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "paid", "free"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-colors ${
                  filter === f
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {f} {f === "all" ? `(${totalUsers})` : f === "paid" ? `(${paidUsers})` : `(${freeUsers})`}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {fetching ? (
            <div className="flex items-center justify-center py-20 gap-3 text-gray-400">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Loading users…</span>
            </div>
          ) : displayed.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Users className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>No users found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-5 py-3.5 text-gray-500 font-semibold w-10">#</th>
                    {([
                      { k: "name",      label: "Name" },
                      { k: "email",     label: "Email" },
                      { k: "createdAt", label: "Joined" },
                      { k: "isPaid",    label: "Status" },
                      { k: "tests",     label: "Tests" },
                      { k: "accuracy",  label: "Accuracy" },
                    ] as { k: SortKey; label: string }[]).map(col => (
                      <th key={col.k}
                        className="text-left px-5 py-3.5 text-gray-500 font-semibold cursor-pointer hover:text-gray-800 select-none whitespace-nowrap"
                        onClick={() => handleSort(col.k)}>
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
                        <td className="px-5 py-4 text-gray-400 font-mono text-xs">{i + 1}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                              {u.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-semibold text-gray-900">{u.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-500">{u.email}</td>
                        <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{formatDate(u.createdAt)}</td>
                        <td className="px-5 py-4">
                          {u.isPaid ? (
                            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                              <CheckCircle className="w-3.5 h-3.5" /> Paid
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-full">
                              <XCircle className="w-3.5 h-3.5" /> Free
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          {tests > 0 ? (
                            <span className="flex items-center gap-1 text-gray-700 font-medium">
                              <TrendingUp className="w-3.5 h-3.5 text-primary-500" /> {tests}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          {accuracy !== null ? (
                            <span className={`font-bold ${accuracy >= 70 ? "text-green-600" : accuracy >= 40 ? "text-amber-500" : "text-red-500"}`}>
                              {accuracy}%
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <button
                            onClick={() => togglePaid(u)}
                            disabled={toggling === u.uid}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 ${
                              u.isPaid
                                ? "bg-red-50 text-red-600 hover:bg-red-100"
                                : "bg-green-50 text-green-700 hover:bg-green-100"
                            }`}>
                            {toggling === u.uid ? (
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            ) : u.isPaid ? (
                              <><ToggleRight className="w-3.5 h-3.5" /> Revoke</>
                            ) : (
                              <><ToggleLeft className="w-3.5 h-3.5" /> Mark Paid</>
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer count */}
          {!fetching && displayed.length > 0 && (
            <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
              <span>Showing {displayed.length} of {totalUsers} users</span>
              <span>{paidUsers} paid · {freeUsers} free · ₹{revenue.toLocaleString("en-IN")} collected</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
