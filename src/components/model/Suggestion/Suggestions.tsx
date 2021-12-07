import { useSuggestions } from "src/hooks/useSuggestions";

export const Suggestions = () => {
  const [suggestions] = useSuggestions(5);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you </h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex justify-between items-center mt-3">
          <img src={profile.avatar} alt="" className="p-[2px] w-10 h-10 rounded-full border" />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>
          </div>
          <button className="text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
};
