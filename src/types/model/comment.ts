import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TComment = {
  comment: string;
} & TUser &
  TDoc;

export const assertComment: (data: unknown) => asserts data is TComment = (data) => {
  const d = data as Partial<TComment>;
  if (!(typeof d.username === "string" && typeof d.userImg === "string" && typeof d.comment === "string")) {
    throw new Error("data is not TComment type");
  }
};
