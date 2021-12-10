import { useSession } from "next-auth/react";
import { MiniProfile } from "src/components/model/MiniProfile";
import { Posts } from "src/components/model/Post";
import { Stories } from "src/components/model/Story";
import { Suggestions } from "src/components/model/Suggestion";

export const Feed = () => {
  const { data: session } = useSession();
  return (
    <div
      className={`grid grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </div>
  );
};
