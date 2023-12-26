import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Feed() {
  const { data: session } = useSession();
  const [psots, setPosts] = useState([]);
  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs);
    });

    return () => {
      // Unsubscribe from the Firestore listener when the component unmounts
      unsubscribe();
    };
  }, [db]);

  return (
    <div
      className="flex-grow border-l border-r border-gray-700 max-w-2xl
     sm:ml-[73px] xl:ml-[370px]"
    >
      <div
        className="text-[#d9d9d9] flex items-center sm:justify-between py-2
       px-3 sticky top-0 z-50 bg-black border-b border-l-gray-700"
      >
        <h2 className="tex-lg sm:text-xl font-bold">Home</h2>
        <div
          className="hoverAnimation w-9 h-9 flex items-center
         justify-center xl:p-0 ml-auto "
        >
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {psots.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
