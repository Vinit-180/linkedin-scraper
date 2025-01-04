"use client"
import { useState } from "react";
import { ArrowRight, Bot, Code2, Database, Globe2, Lock, Settings2 } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 ">
            Automate Your Digital Presence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Extract data, automate workflows, and scale your online presence with our powerful automation platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground  transition-all duration-700 hover:bg-primary/80 "
            >
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {/* <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
            >
              Watch Demo
            </Link> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need for automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center mx-auto text-6xl capitalize font-semibold">
            Be ready to get your leads faster
          </h1>
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to automate your workflows?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses that trust our platform for their automation needs.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
          >
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Data Extraction",
    description: "Extract data from any website with our powerful scraping engine.",
    icon: Database,
  },
  {
    title: "Workflow Automation",
    description: "Create complex automation workflows with our visual builder.",
    icon: Settings2,
  },
  {
    title: "API Integration",
    description: "Connect with any API and automate data transfers seamlessly.",
    icon: Code2,
  },
  {
    title: "AI-Powered",
    description: "Leverage AI to make your automations smarter and more efficient.",
    icon: Bot,
  },
  {
    title: "Global Infrastructure",
    description: "Run your automations from multiple locations worldwide.",
    icon: Globe2,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with advanced encryption and access controls.",
    icon: Lock,
  },
];

const stats = [
  {
    value: "10M+",
    label: "Automations Run",
  },
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

  // return (
  //   <div className="py-10 px-20">
  //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  //       <h1 className="text-center">Fetch LinkedIn Profile Comments</h1>
  //       <form onSubmit={fetchComments} className="flex flex-col gap-4">
  //         <div className="flex gap-2 items-center">
  //         <label htmlFor="username">
  //           Username:
  //         </label>
  //           <input
  //             type="text"
  //             id="username"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //             required
  //             className="border p-2 rounded-lg text-black"
  //           />
  //         </div>
  //         <div className="flex gap-2 items-center">
  //         <label htmlFor="apikey">
  //           API Key:
  //         </label>
  //           <input
  //             id="apikey"
  //             type="text"
  //             value={apiKey}
  //             onChange={(e) => setApiKey(e.target.value)}
  //             required
  //             className="border p-2 rounded-lg  text-black"
  //           />
  //         </div>
  //         <button type="submit" className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-500">
  //           Fetch Data
  //         </button>
  //       </form>

  //       {error && <p className="text-red-500">{error}</p>}

  //       <div id="results" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  //         {comments.map((comment, index) => (
  //           <div key={index} className="card border p-4 rounded ">
  //             <div className="mt-2">
  //               <p className="font-bold">Post Preview:</p>
  //               <p>{comment?.text}</p>
  //               <div>
  //                 <p>Comments: {comment?.commentsCount}</p>
  //                 <p>Posted Date: {new Date(comment?.postedDate).toLocaleDateString()} - {new Date(comment?.postedDate).toLocaleTimeString()}</p>
  //               </div>
  //             </div>
  //             <a href={comment?.postUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
  //               View Post
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     </main>
  //   </div>
  // );
// }