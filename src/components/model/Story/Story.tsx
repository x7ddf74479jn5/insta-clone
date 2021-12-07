type StoryProps = {
  img: string;
  username: string;
};

export const Story: React.VFC<StoryProps> = ({ img, username }) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-contain p-[1.5px] w-14 h-14 rounded-full border-2 border-red-500 transition duration-200 ease-out transform hover:scale-110 cursor-pointer"
        src={img}
        alt=""
      />
      <p className="w-14 text-sm text-center truncate">{username}</p>
    </div>
  );
};
