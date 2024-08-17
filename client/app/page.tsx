'use client'

import Image from "next/image";
import { env } from "process";
import { useState } from "react";


const crawl = async (url : string) => {
  if (url) {
    try {
      const res = await fetch(`${process.env.NEXT_API_URL_DEV || 'http://localhost:8080'}/api/courser`, {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("No URL provided");
  }
}

// https://courses.cs.washington.edu/courses/cse473/24sp/
export default function Home() {
  const [dir, setDir] = useState({});
  const [url, setUrl] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-semibold">courser</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setDir(await crawl(url));
        }}
      >
        <label htmlFor="url">URL</label>
        <input type="text" name="url" className="border" onChange={(e) => setUrl(e.target.value)} value={url} />
        <button type="submit">crawl</button>
      </form>
      <small>
        {JSON.stringify(dir, null, 2)}
      </small>
    </main>
  );
}
