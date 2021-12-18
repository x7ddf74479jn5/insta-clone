import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TPost = {
  image?: string | undefined;
  caption: string;
} & TUser &
  TDoc;
