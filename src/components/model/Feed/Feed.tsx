import { MiniProfile } from "src/components/model/MiniProfile";
import { Posts } from "src/components/model/Post";
import { Stories } from "src/components/model/Story";
import { Suggestions } from "src/components/model/Suggestion";

export const Feed = () => {
  return (
    <>
      {/* Section */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* Section */}
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </>
  );
};
