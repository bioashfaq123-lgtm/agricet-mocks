"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf, LogOut, User, BarChart2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, userData, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-black text-gray-900 text-lg leading-none block">AGRICET</span>
            <span className="text-primary-600 font-bold text-xs leading-none block">MOCKS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#subjects"      className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">Subjects</Link>
          <Link href="/previous-years" className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">Previous Papers</Link>
          <Link href="/#pricing"       className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">Pricing</Link>
          <Link href="/demo"           className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">Free Demo</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard" className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:text-primary-600">
                <BarChart2 className="w-4 h-4" /> Dashboard
              </Link>
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm">
                {(userData?.name?.[0] ?? user.email?.[0] ?? "U").toUpperCase()}
              </div>
              <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login"  className="text-gray-700 font-medium text-sm hover:text-primary-600 transition-colors">Login</Link>
              <Link href="/signup" className="btn-primary py-2 px-4 text-sm">Get Started</Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/#subjects"      className="block text-gray-700 font-medium py-2" onClick={() => setOpen(false)}>Subjects</Link>
          <Link href="/previous-years" className="block text-gray-700 font-medium py-2" onClick={() => setOpen(false)}>Previous Papers</Link>
          <Link href="/demo"           className="block text-gray-700 font-medium py-2" onClick={() => setOpen(false)}>Free Demo</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="block text-gray-700 font-medium py-2" onClick={() => setOpen(false)}>Dashboard</Link>
              <button onClick={() => { logout(); setOpen(false); }} className="block text-red-500 font-medium py-2">Logout</button>
            </>
          ) : (
            <div className="flex gap-3 pt-2">
              <Link href="/login"  className="btn-secondary flex-1 text-center text-sm py-2" onClick={() => setOpen(false)}>Login</Link>
              <Link href="/signup" className="btn-primary flex-1 text-center text-sm py-2"   onClick={() => setOpen(false)}>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
