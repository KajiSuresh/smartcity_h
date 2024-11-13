import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search, User } from 'lucide-react';


export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white/50 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 text-xl font-semibold">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
            Dashboard
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search..."
              className="w-full bg-white pl-9"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}