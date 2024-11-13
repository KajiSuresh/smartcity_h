"use client"

import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, UserPlus, LogIn, Github, } from 'lucide-react';
import Image from 'next/image';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
                <div className="relative h-full w-full">
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                        <h2 className="text-2xl font-bold text-white text-center">
                            {isSignIn ? 'Welcome Back!' : 'Create Account'}
                        </h2>
                        <p className="text-white/80 text-center mt-2">
                            {isSignIn
                                ? 'Enter your credentials to access your account'
                                : 'Join us to explore amazing experiences'}
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="p-6">
                        <div className="space-y-4">
                            {!isSignIn && (
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <div className="relative">
                                        <UserPlus className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="pl-9"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-9"
                                    />
                                </div>
                            </div>

                            <Button
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                            >
                                {isSignIn ? (
                                    <><LogIn className="mr-2 h-4 w-4" /> Sign In</>
                                ) : (
                                    <><UserPlus className="mr-2 h-4 w-4" /> Create Account</>
                                )}
                            </Button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" className="w-full">
                                    <Image
                                        src="/google.svg"
                                        alt="Google"
                                        width={16}
                                        height={16}
                                        className="mr-2"
                                    />
                                    Google
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Button>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-sm">
                            <span className="text-gray-500">
                                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                            </span>
                            <button
                                onClick={() => setIsSignIn(!isSignIn)}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                {isSignIn ? 'Sign up' : 'Sign in'}
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}