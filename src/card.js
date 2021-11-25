import React, { useState, useEffect } from "react";

function Card() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=10";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp.results));
  }, []);

  return (
    <div className="diva">
      {posts.map((post) => (
        <div className="div">
          <section>
            <h1>
              {post.name.first} {post.name.last}
            </h1>
            <p>{post.location.street.number}</p>
            <p>{post.location.street.name}</p>
            <p>{post.location.city}</p>
            <p>{post.location.state}</p>
            <p>{post.location.postcode}</p>
            <p>{post.location.country} </p>
          </section>
          <p>
            <i>Home:{post.phone}</i>
            <br />
            <i>Cell:{post.cell}</i>
          </p>
          <img src={post.picture.thumbnail} className="image" alt="" />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Card;
