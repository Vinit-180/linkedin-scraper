
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface User {
    profilePicUrl: string;
    profileURN: string;
}

const Dashboard = () => {
    // const router = useRouter();

    
    const [users, setUsers] = useState<User[]>([]);

    // const handleNavigate = (id: string) => {
    //     if (router.isReady) {
    //         router.push("/posts")
    //         // router.push({ pathname: "/posts", query: { id } });
    //     }
    // }
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}username`).then((data) => {
            console.log(data);
            setUsers(data.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (<>
        <h1>Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 my-4 mx-4 bg-white px-4 py-4 rounded-lg h-screen">
            {users.length > 0 ?
                <>
                    {users?.map((e) => {
                        return <div className="w-100">
                            <div className="flex flex-col gap-2 my-2">
                                <img src={e.profilePicUrl} alt="" className="w-40 h-40 rounded-lg" />
                                <a target="_blank" className="text-sm hover:text-blue-500 text-black" href={e.profileURN}> Click to View Profile</a>
                            </div>

                            <button className="bg-gray-700 hover:bg-gray-500 text-white hover:text-black  text-md px-2 py-1 rounded-lg w-100"
                                // onClick={() => handleNavigate(e.profileURN)}
                            >
                                 <Link href={`/posts?username=${e.profileURN}`}>
                                 Click to see data
          </Link>
                            </button>
                        </div>
                    })}
                </>
                :
                <>
                    <h1>There are no users present at this time.</h1>
                </>}
        </div>
    </>)
}

export default Dashboard;