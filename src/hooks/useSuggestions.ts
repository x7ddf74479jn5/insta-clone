import faker from "faker";
import { useEffect, useState } from "react";
import type { TProfile } from "src/types";

export const useSuggestions = (length: number) => {
  const [suggestions, setSuggestions] = useState<TProfile[]>([]);

  useEffect(() => {
    const suggestions = [...Array(length)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, [length]);

  return [suggestions, setSuggestions] as const;
};
