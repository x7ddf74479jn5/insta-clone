import { Post } from "./Post";

const posts = [
  {
    id: "123",
    username: "username",
    userImg: "/images/pandashark_icon.webp",
    img: "/images/pandashark_icon.webp",
    caption: "SUBSCRIBE AND DESTROY",
  },
  {
    id: "123",
    username: "username",
    userImg: "/images/pandashark_icon.webp",
    img: "/images/pandashark_icon.webp",
    caption: "SUBSCRIBE AND DESTROY",
  },
];

export const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};
