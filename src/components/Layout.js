// File: src/components/Layout.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, CreditCard, Settings } from 'lucide-react';
export default function Layout({ children }) {
  const path = usePathname();
  const tabs = [
    { href: '/dashboard', icon: <Home />, label: 'Dashboard' },
    { href: '/calculator', icon: <Calculator />, label: 'Calc' },
    { href: '/loans', icon: <CreditCard />, label: 'Loans' },
    { href: '/settings', icon: <Settings />, label: 'Settings' },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 p-4">{children}</main>
      <nav className="flex justify-around bg-white dark:bg-gray-800 p-2">
        {tabs.map(t => (
          <Link key={t.href} href={t.href} className={path===t.href?'text-blue-500':'text-gray-500'}>
            {t.icon}
            <div className="text-xs">{t.label}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
}