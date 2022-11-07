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
    <div className="mx-auto w-[50rem]">
      <div className="flex border-slate-500 border-2 my-5 w-[100%] gap-[5%]">
        <div className=" ">
          <img
            style={{ width: "20rem", height: "25rem" }}
            src={post.Poster}
            alt="poster"
            className="clip-your-needful-style"
          />
        </div>
        <div className="w-[50%] flex flex-col items-end  pt-[10px]">
          <h2 className="text-[25px]  ">MOVIE DETAILS</h2>
          <hr />
          <h1 className="text-[30px] text-bold text-right border-4 border-b-slate-500 mb-5">
            {post.Title}
          </h1>
          <h5>
            <strong>Released Date:</strong> {post.Released}
          </h5>
          <h5>
            <strong>Rating:</strong> {post.imdbRating}/10
          </h5>
          <p className="text-right">
            {post.Plot}
            <br />
            <strong>Duration:</strong>
            {post.Runtime}
            <br />
            <strong>Actors:</strong>
            {post.Actors}
            <br />
            <strong>Director</strong>
            {post.Director}
          </p>
          <div className="my-5">
            <ul className="flex gap-[10px]  ">
              {post?.Genre?.split(",").map((item, idx) => (
                <li
                  className="border-black border-2 rounded-md px-1  bg-slate-300"
                  key={idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-[80%] mx-auto">
    //   <div className="flex gap-[2rem] border-2 border-slate-500 my-5">
    //     <div className="w-full flex">
    //       <img
    //         className="w-[600px] h-[600px] clip-your-needful-style"
    //         src={post.Poster}
    //         alt=""
    //       />
    //     </div>
    //     <div className="">
    //       <h2 className="text-[4rem]">MOVIE DETAILS</h2>
    //       <hr />
    //       <h1>{post.Title}</h1>
    //       <p>Released Date: {post.Released}</p>
    //       <p>Rating: {post.imdbRating} </p>

    //       <p>
    //         Plot: {post.Plot}
    //         Duration: {post.Runtime}
    //         Writers: {post.Writer}
    //         Language: {post.Language}
    //         Director: {post.Director}
    //         Awards: {post.Awards}
    //         Actors: {post.Actors}
    //       </p>

    //       <div>
    //         <ul className="flex gap-2 ">
    //           {post?.Genre?.split(",").map((item, i) => (
    //             <li className="border-4 border-black rounded-md px-3" key={i}>
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardContainer;
