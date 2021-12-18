import type { TDoc } from "./firestore";
import type { TUser } from "./user";

export type TLike = Pick<TDoc, "id"> & Pick<TUser, "username">;
