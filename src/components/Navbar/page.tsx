"use client";
import { Bot, LayoutDashboardIcon, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import jwtDecode from "jsonwebtoken";

const Navbar=()=>{
      const [decodedToken, setDecodedToken] = useState<any>(null);

      useEffect(()=>{
        const data=localStorage.getItem("token");
        console.log(data);
        if(data!==undefined && data){
          const decoded=jwtDecode.decode(data);
          setDecodedToken(decoded);
        }
      },[]);

    return <>
      <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-violet-600"
          >
            <Bot className="h-6 w-6" />
            <span>AutomationHub</span>
          </Link>

          <div className="flex items-center space-x-4">
          {decodedToken ?  <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button 
                  variant="ghost" 
                  className="relative h-8 w-8 rounded-full"
                > */}
                {/* </Button> */}
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" className="rounded-lg cursor-pointer" />
                    {/* <AvatarFallback>{user.initials}</AvatarFallback> */}
                  </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{decodedToken?.name}</p>
                    <p className="text-xs text-muted-foreground">{decodedToken?.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={()=>{
                  localStorage.removeItem("token")
                  window.location.href="/"
                }}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            :  <Link href={"/login"} className="px-4 py-2 rounded-lg bg-primary text-white">
            Login
            </Link>}
          </div>
        </div>
      </div>
    </nav></>
}

export default Navbar;