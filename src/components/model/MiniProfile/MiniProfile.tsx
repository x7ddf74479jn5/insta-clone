import { useSession } from "next-auth/react";

export const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center mt-14 ml-10">
      <img
        src={session?.user.image || "/images/pandashark_icon.webp"}
        alt=""
        className="p-[2px] w-16 h-16 rounded-full border"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Insta</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
};
