import React, { useState } from "react";
import "./tweet.css";
import SingleTweet from "./SingleTweet";

const PostTweet = () => {

  // const singleTweet = () =>{
  //   return <SingleTweet />
  // }
  

    const [{createTweet}, setCreateTweet] = useState({ createTweet: []});

    const addTweetHandler = () =>{
      createTweet.push(<div key={createTweet.length}></div>);
      setCreateTweet({createTweet: [ ...createTweet] })
    };

  return (
    <div className="writePostWrapper">
      <div className="textAreaContainer">
        <label for="exampleFormControlTextarea1" class="form-label">
          Whats in Your Mind?
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <button type="button" class="" onClick={addTweetHandler}>POST</button>
      {/* {singleTweet} */}
    </div>
  );
};
export default PostTweet;
