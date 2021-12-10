import { useSession } from "next-auth/react";
import { useSuggestions } from "src/hooks/useSuggestions";

import { Story } from "./Story";

export const Stories = () => {
  const [suggestions] = useSuggestions(20);
  const { data: session } = useSession();

  return (
    <div className="flex overflow-x-scroll p-6 mt-8 space-x-2 bg-white rounded-sm border border-gray-200 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session.user.image ?? "/images/pandashark_icon.webp"}
          username={session.user.username ?? "Pandashark"}
        />
      )}
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};
