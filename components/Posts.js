import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, storage } from "././../firebase";
import Post from "./Post";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
 // console.log(realtimePosts && realtimePosts.docs);
  return (
    <div>
      {realtimePosts &&
        realtimePosts.docs.map((post) => (
          <Post
            id={post.id}
            message={post.data().message}
            name={post.data().name}
            email={post.data().email}
            image={post.data().image}
            timestamp={post.data().timestamp}
            postImage={post.data().postImage}
          />
        ))}

      
    </div>
  );
}

export default Posts;
