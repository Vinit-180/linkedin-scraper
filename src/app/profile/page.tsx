"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import jwtDecode from "jsonwebtoken";
import { useEffect, useState } from "react";
export default function ProfilePage() {
  // TODO: Replace with actual user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024",
    role: "User",
  };
  const [decodedToken, setDecodedToken] = useState<any>(null);

  useEffect(()=>{
    const data=localStorage.getItem("token");
    console.log(data);
    if(data!==undefined && data){
      const decoded=jwtDecode.decode(data);
      setDecodedToken(decoded);
    }
  },[]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Full Name</dt>
                  <dd className="mt-1 text-sm">{decodedToken?.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="mt-1 text-sm">{decodedToken?.email}</dd>
                </div>
                {/* <div>
                  <dt className="text-sm font-medium text-muted-foreground">Member Since</dt>
                  <dd className="mt-1 text-sm">{user.joinDate}</dd>
                </div> */}
                {/* <div>
                  <dt className="text-sm font-medium text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-sm">{user.role}</dd>
                </div> */}
              </dl>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}