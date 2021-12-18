import type { FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "src/lib/firebase";
import type { TComment, TLike, TPost } from "src/types";
import { assertComment, assertLike, assertPost } from "src/types";

const converter = <T extends object>(validator: (data: unknown) => asserts data is T): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => data,
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data({ serverTimestamps: "estimate" });

    const result = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (typeof value.toString == "function" && value.toString().startsWith("Timestamp")) {
          return [key, value.toDate()];
        }
        return [key, value];
      })
    );

    validator(result);

    return result;
  },
});

const collectionDataPoint = <T extends object>({
  collectionPath,
  pathSegments = [],
  validator,
}: {
  collectionPath: string;
  pathSegments?: string[] | undefined;
  validator: (data: unknown) => asserts data is T;
}) => {
  return collection(firestore, collectionPath, ...pathSegments).withConverter(converter<T>(validator));
};

const documentDataPoint = <T extends object>({
  collectionPath,
  pathSegments = [],
  refId,
  validator,
}: {
  collectionPath: string;
  refId: string;
  pathSegments?: string[] | undefined;
  validator: (data: unknown) => asserts data is T;
}) => {
  return doc(firestore, collectionPath, ...pathSegments, refId).withConverter(converter<T>(validator));
};

const db = {
  posts: () => collectionDataPoint<TPost>({ collectionPath: "posts", validator: assertPost }),
  post: (id: string) => documentDataPoint<TPost>({ collectionPath: "posts", refId: id, validator: assertPost }),
  comments: (postId: string) =>
    collectionDataPoint<TComment>({
      collectionPath: "posts",
      pathSegments: [postId, "comments"],
      validator: assertComment,
    }),
  comment: (postId: string, commentId: string) =>
    documentDataPoint<TComment>({
      collectionPath: "posts",
      pathSegments: [postId, "comments"],
      refId: commentId,
      validator: assertComment,
    }),
  likes: (postId: string) =>
    collectionDataPoint<TLike>({
      collectionPath: "posts",
      pathSegments: [postId, "likes"],
      validator: assertLike,
    }),
  like: (postId: string, likeId: string) =>
    documentDataPoint<TLike>({
      collectionPath: "posts",
      pathSegments: [postId, "likes"],
      refId: likeId,
      validator: assertLike,
    }),
};

export { db };
