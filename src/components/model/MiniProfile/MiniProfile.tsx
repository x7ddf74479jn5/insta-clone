export const MiniProfile = () => {
  return (
    <div className="flex justify-between items-center mt-14 ml-10">
      <img src="/images/pandashark_icon.webp" alt="" className="p-[2px] w-16 h-16 rounded-full border" />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Pandashark</h2>
        <h3 className="text-sm text-gray-400">Welcome to Insta</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
};
