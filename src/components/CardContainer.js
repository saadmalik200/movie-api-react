import React, { useState } from "react";
import { Context } from "./Context";
import { useContext, useEffect } from "react";

const CardContainer = ({ item }) => {
  const { state, dispatch } = useContext(Context);
  const [post, setPost] = useState({});

  //   console.log("state fomr card", state);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=57e0cae2&i=${item.imdbID}`
      );
      const data = await response.json();
      setPost({ ...data });
      //   console.log("SingleData", data);
    };

    getData();
  }, [item.imdbID]);

  return (
    <div>
      <div className="flex border-2 border-red-500 my-5">
        <div>
          <img src={post.Poster} alt="" />
        </div>
        <div>
          <h2>MOVIE DETAILS</h2>
          <hr />
          <h1>{post.Title}</h1>
          <p>Released Date: {post.Released}</p>
          <p>Rating: {post.imdbRating} </p>

          <p>
            Plot: {post.Plot}
            Duration: {post.Runtime}
            Writers: {post.Writer}
            Language: {post.Language}
            Director: {post.Director}
            Awards: {post.Awards}
            Actors: {post.Actors}
          </p>

          <div>
            <ul className="flex gap-2 ">
              {post?.Genre?.split(",").map((item, i) => (
                <li className="border-4 border-black rounded-md px-3" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
