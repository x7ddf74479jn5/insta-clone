import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User extends DefaultUser {
    uid?: string | null;
    username?: string | null;
  }
}
