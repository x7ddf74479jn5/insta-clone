import { useSuggestions } from "src/components/hooks/useSuggestions";

import { Story } from "./Story";

export const Stories = () => {
  const [suggestions] = useSuggestions(20);

  return (
    <div className="flex overflow-x-scroll p-6 mt-8 space-x-2 bg-white rounded-sm border border-gray-200 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};
