import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "HI friends, I am going to Mumbai this weekend for a short trip!",
    reactions: 0,
    userID: "",
    tags: ["vacation", "travel", "mumbai"],
  },
  {
    id: "2",
    title: "Delicious Recipes",
    body: "Just tried a new pasta recipe and it turned out amazing! Sharing it with you all.",
    reactions: 0,
    userID: "",
    tags: ["cooking", "food", "recipe"],
  },
];
export default PostListProvider;
