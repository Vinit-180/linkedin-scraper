
"use client";

import Modal from "@/components/Modal/page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
    profilePicUrl: string;
    profileURN: string;
}

const Dashboard = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [error,setError]=useState('');
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        const token=localStorage.getItem("token");
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}username`,{headers:{
            Authorization:token
        }}).then((data) => {
            console.log(data);
            setUsers(data.data?.data);
        }).catch((err) => {
            console.log(err,"-",err.response?.data);
            setError(err.response?.data?.message);
        })
    }

    return (<>
    <div className="max-w-7xl mx-auto text-center">
        <div className="my-4 mx-4 flex justify-between items-center">
            <div className="text-lg font-semibold">
                Welcome to the Dashboard
            </div>
            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-500/40 font-bold"
                onClick={toggleModal}
            >
                Add New Profile
            </button>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 my-4 mx-4 bg-white px-4 py-4 rounded-lg h-screen"> */}
            {users.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 my-4 mx-4 bg-white px-4 py-4 rounded-lg h-screen">
                    {users?.map((e) => {
                        return <div className="w-100 mx-auto" key={e.profileURN}>
                            <div className="flex flex-col gap-2 my-2">
                                <img src={e.profilePicUrl} alt="" className="w-100 h-100 sm:w-40 sm:h-40 rounded-lg" />
                                <a target="_blank" className="text-sm hover:text-blue-500 text-black" href={e.profileURN}> Click to View Profile</a>
                            </div>

                            <button  className="bg-secondary-foreground text-secondary shadow-sm hover:bg-secondary-foreground/80 px-4 py-2 rounded-lg"
                            //className="bg-gray-700 hover:bg-gray-500 text-white hover:text-black  text-md px-2 py-1 rounded-lg w-100"
                            // onClick={() => handleNavigate(e.profileURN)}
                            >
                                <Link href={`/posts?username=${e.profileURN}`}>
                                    View Data
                                </Link>
                            </button>
                        </div>
                    })}
                </div>
                : error=='' && (<><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i}>   <Card className="overflow-hidden">
            <div className="h-32 bg-muted animate-pulse" />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-4 w-4 bg-muted animate-pulse rounded-full" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="h-7 w-16 bg-muted animate-pulse rounded" />
              <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            </CardContent>
          </Card>
            </div>
          ))}
        </div>
                </>)}
        {/* </div> */}
        {error && <span className="text-6xl text-red-500">
            {error}</span>}
        {isOpen && <Modal toggleModal={toggleModal} setError={setError} />}
    </div>
    </>)
}

export default Dashboard;