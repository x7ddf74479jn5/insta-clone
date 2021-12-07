import faker from "faker";
import { useEffect, useState } from "react";
import type { TProfile } from "src/types";

import { Story } from "./Story";

export const Stories = () => {
  const [suggestions, setSuggestions] = useState<TProfile[]>([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex overflow-x-scroll p-6 mt-8 space-x-2 bg-white rounded-sm border border-gray-200 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};
