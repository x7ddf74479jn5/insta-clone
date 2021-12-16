import type { QueryDocumentSnapshot } from "@firebase/firestore";
import { onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "src/lib/firebase";
import type { TPost } from "src/types";

import { Post } from "./Post";

export const Posts = () => {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<TPost>[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(db.posts, orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(snapshot.docs);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image || ""}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};
