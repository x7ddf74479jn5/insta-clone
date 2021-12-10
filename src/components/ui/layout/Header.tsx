import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import type { VFC } from "react";

export const Header: VFC = () => {
  const { data: session } = useSession();
  const handleSignIn = () => signIn();
  const handleSignOut = () => signOut();
  const router = useRouter();
  const handlePushRoute = () => router.push("/");

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between mx-5 max-w-6xl xl:mx-auto">
        {/* Left */}
        <div className="hidden relative w-24 h-24 cursor-pointer lg:inline-grid">
          <button onClick={handlePushRoute}>
            <Image src="/images/2880px-Instagram_logo.png" layout="fill" objectFit="contain" alt="insta logo" />
          </button>
        </div>
        <div className="relative flex-shrink-0 w-10 cursor-pointer lg:hidden">
          <button onClick={handlePushRoute}>
            <Image src="/images/insta-logo.png" layout="fill" objectFit="contain" alt="insta logo" />
          </button>
        </div>
        {/* Middle */}
        <div className="sticky top-0 z-50 max-w-xs bg-white border-b">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="flex absolute inset-y-0 items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block pl-10 w-full bg-gray-50 rounded-md border-gray-300 focus:border-black focus:ring-black sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex justify-end items-center space-x-4">
          <HomeIcon onClick={handlePushRoute} className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="rotate-45 navBtn" />
                <div className="flex absolute -top-1 -right-2 justify-center items-center w-5 h-5 text-xs text-white bg-red-500 rounded-full animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <button onClick={handleSignOut}>
                <img
                  src={session.user?.image ?? "/images/pandashark_icon.webp"}
                  alt="profile pic"
                  className="object-cover w-10 h-10 rounded-full cursor-pointer"
                />
              </button>
            </>
          ) : (
            <button onClick={handleSignIn}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
};
