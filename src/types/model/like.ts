import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TLike = Pick<TDoc, "id"> & Pick<TUser, "username">;

export const assertLike: (data: unknown) => asserts data is TLike = (data) => {
  const d = data as Partial<TLike>;
  if (!(typeof d.username === "string")) {
    throw new Error("data is not TLike type");
  }
};
