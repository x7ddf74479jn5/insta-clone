import {
  BookmarkAltIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

type PostProps = {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
};

export const Post: React.VFC<PostProps> = ({ username, userImg, img, caption }) => {
  return (
    <div className="my-7 bg-white rounded-sm border">
      {/* header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt="" className="object-contain p-1 mr-3 w-12 h-12 rounded-full border" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkAltIcon className="btn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>

      {/* comments */}

      {/* input */}
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input type="text" className="flex-1 border-none focus:ring-0 outline-none" placeholder="Add a comment... " />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};
