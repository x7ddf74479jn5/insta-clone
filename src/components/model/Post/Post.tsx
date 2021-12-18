/* eslint-disable @next/next/no-img-element */
import {
  BookmarkAltIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";

import { usePost } from "./Post.hook";

type PostProps = {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
};

export const Post: React.VFC<PostProps> = ({ id, username, userImg, img, caption }) => {
  const { session, useComments, useLikes } = usePost(id);
  const { comment, comments, handleSendComment, handleSetComment } = useComments();
  const { likes, hasLike, handleLikePost } = useLikes();

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
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLike ? (
              <HeartIconFilled className="text-red-500 btn" />
            ) : (
              <HeartIcon onClick={handleLikePost} className="btn" />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkAltIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <div className="p-5 truncate">
        {likes.length > 0 && <p className="mb-1 font-bold">{likes.length} likes</p>}
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </div>

      {/* comments */}
      {comments.length > 0 && (
        <div className="overflow-y-scroll ml-10 h-20 scrollbar-thin-black scrollbar-thin">
          {comments.map((comment) => (
            <div className="flex items-center mb-3 space-x-2" key={comment.id}>
              <img src={comment.data().userImg} alt="" className="h-7 rounded-full" />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input */}
      {session && (
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={handleSetComment}
            className="flex-1 border-none focus:ring-0 outline-none"
            placeholder="Add a comment... "
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={handleSendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};
