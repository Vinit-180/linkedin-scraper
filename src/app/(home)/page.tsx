"use client"
import { useState } from "react";
export default function Home() {
  interface Comment {
    highlightedComments: string[];
    highlightedCommentsActivityCounts: { text: string }[];
    text: string;
    commentUrl: string;
    totalReactionCount: number;
    likeCount: number;
    commentsCount: number;
    repostsCount: number;
    postUrl: string;
    postedAt: string;
    postedDate: string;
    commentedDate: string;
    urn: string;
    author: {
      firstName: string;
      lastName: string;
      headline: string;
      username: string;
      url: string;
    };
    company: object;
    article: object;
  }
  const [username, setUsername] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  const fetchComments = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await fetch(`https://linkedin-data-api.p.rapidapi.com/get-profile-comments?username=${username}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data); 
      console.log(data);
    } catch (error) {
      setError("Error fetching data. Please check your API key and username.");
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className="py-10 px-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-center">Fetch LinkedIn Profile Comments</h1>
        <form onSubmit={fetchComments} className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
          <label htmlFor="username">
            Username:
          </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border p-2 rounded-lg text-black"
            />
          </div>
          <div className="flex gap-2 items-center">
          <label htmlFor="apikey">
            API Key:
          </label>
            <input
              id="apikey"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
              className="border p-2 rounded-lg  text-black"
            />
          </div>
          <button type="submit" className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-500">
            Fetch Data
          </button>
        </form>

        {error && <p className="text-red-500">{error}</p>}

        <div id="results" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {comments.map((comment, index) => (
            <div key={index} className="card border p-4 rounded ">
              <div className="mt-2">
                <p className="font-bold">Post Preview:</p>
                <p>{comment?.text}</p>
                <div>
                  <p>Comments: {comment?.commentsCount}</p>
                  <p>Posted Date: {new Date(comment?.postedDate).toLocaleDateString()} - {new Date(comment?.postedDate).toLocaleTimeString()}</p>
                </div>
              </div>
              <a href={comment?.postUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Post
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}