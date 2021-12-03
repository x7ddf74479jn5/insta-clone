import faker from "faker";
import { useEffect } from "react";

export const Stories = () => {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.info(suggestions);
  }, []);

  return <div></div>;
};
