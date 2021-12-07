import { Posts } from "src/components/model/Post";
import { Stories } from "src/components/model/Story";

export const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
      {/* Section */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </div>
  );
};
