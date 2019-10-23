//news component that will fetch top news from a free api and render it on webpage 
import React from 'react' 
import {useFetch} from '../hooks/hooks';
const url = 'https://news-proxy-server.appspot.com/topstories'

function News(){
    const news = useFetch([],url);
    console.log(news);

    const renderNews = ()=>{
        let newsList = news.map((post)=>{
            return (
            <div key={post.id}>
                {/* <p> {post.title}</p> */}
                <p> 
                    <a href={post.url} target="_blank"
                    rel="noopener noreferrer" >{post.title}</a></p>
            </div>
            )
        })
        return newsList;
    }
    return(
        <>
            <h2> News </h2>
            {renderNews()}
        </>
    )
}


export default News;