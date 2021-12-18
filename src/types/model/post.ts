import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TPost = {
  image?: string | undefined;
  caption: string;
} & TUser &
  TDoc;

export const assertPost: (data: unknown) => asserts data is TPost = (data) => {
  const d = data as Partial<TPost>;
  if (
    !(
      typeof d.username === "string" &&
      typeof d.userImg === "string" &&
      (typeof d.image === "string" || undefined) &&
      typeof d.caption === "string"
    )
  ) {
    throw new Error("data is not TPost type");
  }
};
