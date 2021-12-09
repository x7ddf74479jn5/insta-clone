import type { BuiltInProviderType } from "next-auth/providers";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";

export type { ClientSafeProvider };
export type TProviders = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>;
