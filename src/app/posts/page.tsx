"use client"
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    content: string;
    _id: string;
    fetchedAt: Date,
    url: string;
}

const Posts = () => {
    const [profileURN, setprofileURN] = useState<string | null>('');
    const [commentedPosts, setCommentedPosts] = useState<Post[]>([]);
    useEffect(() => {
        // const username = window.location.pathname.split('/')
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username')
        console.log(params.get('username'))
        setprofileURN(username);

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}posts?profileURN=${username}`).then((data) => {
            console.log(data);
            setCommentedPosts(data.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return <>
        <div>
            <h1 className="text-center text-2xl my-2 font-semibold">
            Welcome to the Home of Amazing Insights from 
            <a href={`${profileURN}`} className="mx-1" target="_blank">{profileURN}</a>
            </h1>

            <div id="results" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">

            {commentedPosts?.map((e,index)=>{
                return <>
                 <div key={index} className="card border p-4 rounded ">
                    <div className="mt-2">
                        <p className="font-bold">Post Preview:</p>
                        <p className="max-h-52 text-clip overflow-y-scroll scrollbar-none  my-2">{e?.content}</p>
                        <div>
                            {/* <p>Comments: {e?.commentsCount}</p> */}
                            <p>Fetched Date: {new Date(e?.fetchedAt).toLocaleDateString()} - {new Date(e?.fetchedAt).toLocaleTimeString()}</p>
                        </div>
                    </div>
                    <a href={e?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        View Post
                    </a>
                </div>
                </>
            })}
            </div>
        </div>
    </>
}

export default Posts;