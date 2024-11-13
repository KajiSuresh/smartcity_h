'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronLeft,
  Bell,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Users',
    icon: Users,
    href: '/dashboard/user',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    title: 'Notifications',
    icon: Bell,
    href: '/notifications',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'h-screen relative border-r px-3 pb-10 pt-24 transition-all duration-300',
        expanded ? 'w-64' : 'w-20'
      )}
    >
      <Button
        onClick={() => setExpanded((curr) => !curr)}
        variant="ghost"
        className="absolute -right-3 top-20 rounded-full p-2"
      >
        <ChevronLeft
          className={cn(
            'h-6 w-6 transition-all',
            !expanded && 'rotate-180'
          )}
        />
      </Button>
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-x-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
              pathname === item.href &&
                'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:text-white'
            )}
          >
            <item.icon className="h-6 w-6" />
            {expanded && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}