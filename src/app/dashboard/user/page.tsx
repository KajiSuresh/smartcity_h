'use client';
import { Button } from '@/components/ui/button';

import { Plus, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';


const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
  // Adding more users to demonstrate scrolling
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Tom Brown',
    email: 'tom@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emily@example.com',
    role: 'User',
    status: 'Inactive',
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      id: users.length + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      status: 'Active',
    };
    
    setUsers([...users, newUser]);
    setIsOpen(false);
    toast.success('User added successfully');
  };

  return (
    <div className="flex min-h-screen bg-gray-50/90">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8 pt-24">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Users</h1>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add New User</SheetTitle>
                </SheetHeader>
                <form onSubmit={handleAddUser} className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Add User
                  </Button>
                </form>
              </SheetContent>
            </Sheet>
          </div>

          <div className="rounded-lg border bg-white shadow-sm">
            <ScrollArea className="h-[600px] rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            user.status === 'Active'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-gray-50 text-gray-700'
                          }`}
                        >
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </main>
      </div>
    </div>
  );
}