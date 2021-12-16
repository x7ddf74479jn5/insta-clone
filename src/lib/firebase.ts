// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import type { FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import type { TPost } from "src/types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-RGb3Q93jOwE0JEnukZG6INcy2L3D24",
  authDomain: "insta-f09b1.firebaseapp.com",
  projectId: "insta-f09b1",
  storageBucket: "insta-f09b1.appspot.com",
  messagingSenderId: "146651459231",
  appId: "1:146651459231:web:bce0b0d494fedb779c7caa",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore();
const storage = getStorage();

const converter = <T extends object>(validator: (data: unknown) => asserts data is T): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => data,
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data();

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

const assertPost: (data: unknown) => asserts data is TPost = (data) => {
  const d = data as Partial<TPost>;
  if (
    !(
      typeof d.username === "string" &&
      typeof d.profileImg === "string" &&
      (typeof d.image === "string" || undefined) &&
      typeof d.caption === "string"
    )
  ) {
    throw new Error("data is not TPost type");
  }
};

const dataPoint = <T extends object>(collectionPath: string, validator: (data: unknown) => asserts data is T) =>
  collection(firestore, collectionPath).withConverter(converter<T>(validator));

const db = {
  posts: dataPoint<TPost>("posts", assertPost),
};

const customDoc = (path: string, pathSegments: string) => doc(firestore, path, pathSegments);

export { app, customDoc, db, firestore, storage };
