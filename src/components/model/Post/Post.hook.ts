import type { QueryDocumentSnapshot } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { addDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "src/repository";
import type { TComment, TLike } from "src/types";

const useComments = (session: Session | null, id: string) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<QueryDocumentSnapshot<TComment>[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(db.comments(id), orderBy("timestamp", "desc")), (snapshot) => {
      setComments(snapshot.docs);
    });

    return () => unsubscribe();
  }, [id]);

  const handleSetComment: React.ChangeEventHandler<HTMLInputElement> = (e) => setComment(e.target.value);

  const handleSendComment: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!session?.user.username || !session?.user.image) return;
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(db.comments(id), {
      comment: commentToSend,
      username: session?.user.username,
      userImg: session?.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return { comment, comments, handleSetComment, handleSendComment };
};

const useLikes = (session: Session | null, id: string) => {
  const [likes, setLikes] = useState<QueryDocumentSnapshot<TLike>[]>([]);
  const [hasLike, setHasLike] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(db.likes(id), (snapshot) => {
      setLikes(snapshot.docs);
    });
    return () => {
      unsubscribe();
    };
  }, [id]);

  useEffect(() => {
    if (!session?.user.uid) return;
    setHasLike(likes.findIndex((like) => like.id === session.user.uid) !== -1);
  }, [likes, session?.user.uid]);

  const handleLikePost = async () => {
    if (!session?.user.username || !session.user.uid) return;
    if (hasLike) {
      await deleteDoc(db.like(id, session.user.uid));
    } else {
      await setDoc(db.like(id, session.user.uid), {
        username: session.user.username,
      });
    }
  };

  return { likes, hasLike, handleLikePost };
};

export const usePost = (id: string) => {
  const { data: session } = useSession();

  return { session, useComments: () => useComments(session, id), useLikes: () => useLikes(session, id) };
};
