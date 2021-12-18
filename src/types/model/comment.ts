import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TComment = {
  comment: string;
} & TUser &
  TDoc;
