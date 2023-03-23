import { ChangeEventHandler, useEffect, useState } from "react";
import PostItem from "./post-item";
import { Post } from "./types";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeId, setActiveId] = useState<number>();
  const [filterPost, setFilterPost] = useState<Post[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=12"
        );
        const data = await res.json();
        fn1();
        fn2();
        fn3();
        setPosts(data || []);
        setFilterPost(data || []);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fn1 = () => {
    console.log("fn1");
    console.log("fn11");
  };
  const fn2 = () => {
    console.log("fn2");
  };
  const fn3 = () => {
    console.log("fn3");
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.trim();
    setFilterPost(
      posts.filter(
        (item) => item.body.includes(value) || item.title.includes(value)
      )
    );
  };

  const onActivePostItem = (postId: number) => {
    setActiveId(postId);
  };

  const onUpdate = (post: Post) => {
    setFilterPost((posts) =>
      posts.map((pst) => {
        if (pst.userId === post.id)
          return {
            ...pst,
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam, dolorum neque rem dignissimos omnis dolor. Optio nam quae, eveniet veritatis praesentium ipsam adipisci dolorem, officiis labore alias sunt totam?",
          };
        return pst;
      })
    );
  };
  const onDelete = (post: Post) => {
    setFilterPost((posts) => posts.filter((pst) => pst.id === post.id));
  };

  return (
    <div>
      <div className="search">
        <h1 style={{ margin: "20px 0px" }}>News</h1>
        <input onChange={onChange} />
      </div>
      <div className="main">
        <div className="post-grid">
          {filterPost.map((post) => {
            return (
              <PostItem
                key={post.id}
                post={post}
                onActivePostItem={onActivePostItem}
                activeId={activeId}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
