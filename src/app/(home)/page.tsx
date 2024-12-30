"use client"
import { useState } from "react";
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
export default function Home() {
  const [username, setUsername] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
    "highlightedComments": [
        "Hi Richa, \n\nAt Trawlii, we specialize in software development and have extensive experience working with various technologies to create backend systems, mobile apps, and websites. Our team is skilled in delivering tailored solutions to meet specific project requirements.\n\nLet’s connect and discuss how we can support your project!\n\nVisit us at https://trawlii.com/portfolio or email me at abhishek.jain@trawlii.com.\n\nLooking forward to hearing from you!"
    ],
    "highlightedCommentsActivityCounts": [
        {
            "text": "Hi Richa, \n\nAt Trawlii, we specialize in software development and have extensive experience working with various technologies to create backend systems, mobile apps, and websites. Our team is skilled in delivering tailored solutions to meet specific project requirements.\n\nLet’s connect and discuss how we can support your project!\n\nVisit us at https://trawlii.com/portfolio or email me at abhishek.jain@trawlii.com.\n\nLooking forward to hearing from you!"
        }
    ],
    "text": "Hello All,\n\nWe are looking for software development companies based at Lucknow.\n\nWho can work on our backend, mobile app and website all kind of development.\n\nInterested can share profile at sales@volttic.com \n\nThanks",
    "commentUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7278699032548388864?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7278699032548388864%2C7279448343720730625%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287279448343720730625%2Curn%3Ali%3Aactivity%3A7278699032548388864%29",
    "totalReactionCount": 20,
    "likeCount": 20,
    "commentsCount": 7,
    "repostsCount": 1,
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7279448347373879296/",
    "postedAt": "2d",
    "postedDate": "2024-12-30 10:48:51.624 +0000 UTC",
    "commentedDate": "2024-12-30 10:48:50.754 +0000 UTC",
    "urn": "7279448347373879296",
    "author": {
        "firstName": "Richa",
        "lastName": "Soni",
        "headline": "Follow Volttic EV Charging LinkedIn page for getting updates on Job & hiring.",
        "username": "richa-soni-76608116b",
        "url": "https://www.linkedin.com/in/richa-soni-76608116b"
    },
    "company": {},
    "article": {}
},  {
  "highlightedComments": [
      "Hi Richa, \n\nAt Trawlii, we specialize in software development and have extensive experience working with various technologies to create backend systems, mobile apps, and websites. Our team is skilled in delivering tailored solutions to meet specific project requirements.\n\nLet’s connect and discuss how we can support your project!\n\nVisit us at https://trawlii.com/portfolio or email me at abhishek.jain@trawlii.com.\n\nLooking forward to hearing from you!"
  ],
  "highlightedCommentsActivityCounts": [
      {
          "text": "Hi Richa, \n\nAt Trawlii, we specialize in software development and have extensive experience working with various technologies to create backend systems, mobile apps, and websites. Our team is skilled in delivering tailored solutions to meet specific project requirements.\n\nLet’s connect and discuss how we can support your project!\n\nVisit us at https://trawlii.com/portfolio or email me at abhishek.jain@trawlii.com.\n\nLooking forward to hearing from you!"
      }
  ],
  "text": "Hello All,\n\nWe are looking for software development companies based at Lucknow.\n\nWho can work on our backend, mobile app and website all kind of development.\n\nInterested can share profile at sales@volttic.com \n\nThanks",
  "commentUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7278699032548388864?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7278699032548388864%2C7279448343720730625%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287279448343720730625%2Curn%3Ali%3Aactivity%3A7278699032548388864%29",
  "totalReactionCount": 20,
  "likeCount": 20,
  "commentsCount": 7,
  "repostsCount": 1,
  "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7279448347373879296/",
  "postedAt": "2d",
  "postedDate": "2024-12-30 10:48:51.624 +0000 UTC",
  "commentedDate": "2024-12-30 10:48:50.754 +0000 UTC",
  "urn": "7279448347373879296",
  "author": {
      "firstName": "Richa",
      "lastName": "Soni",
      "headline": "Follow Volttic EV Charging LinkedIn page for getting updates on Job & hiring.",
      "username": "richa-soni-76608116b",
      "url": "https://www.linkedin.com/in/richa-soni-76608116b"
  },
  "company": {},
  "article": {}
}]);
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