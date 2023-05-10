import React from 'react';
import PostTweet from './PostTweet';
import "./tweet.css";
import SingleTweet from './SingleTweet';

const MainTweetPage = ()=>{
    return(
        <div className='mainTweetPage-warpper'>
            <h1>This Is Parent Page</h1>
            <PostTweet />
            <SingleTweet />
        </div>
        
    )
}
export default MainTweetPage;