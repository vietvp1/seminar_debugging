import React, { useState } from "react";
import { Post } from "../types";

interface IPostItem {
  post: Post;
  activeId: number;
  onActivePostItem: (postId: number) => void;
  onUpdate: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const PostItem: React.FC<IPostItem> = (props) => {
  const { post, activeId, onActivePostItem, onUpdate, onDelete } = props;
  const [count, setCount] = useState(0);

  // const onClickUpdateButton = () => {
  //   setCount(count + 1);
  // };

  return (
    <div
      style={activeId === post.id ? { border: "solid 2px green" } : {}}
      className="post"
      onClick={() => onActivePostItem(post.id)}
    >
      <h2 className="post-title">{post.title}</h2>
      <p className="post-description">{post.body}</p>
      <div className="post-actions-container">
        <div>
          <div className="post-actions">
            <button className="update-btn" onClick={() => onUpdate(post)}>
              Update
            </button>
            <button className="delete-btn" onClick={() => onDelete(post)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
