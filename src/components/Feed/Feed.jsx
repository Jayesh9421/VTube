import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";

const Feed = ({ sidebar, category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_Url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const feedStyle = sidebar ? "ml-[16%]" : ""; // Adjust the left margin when sidebar is open

  return (
    <div
      className={`feed grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-auto mt-20 ${feedStyle}`}
    >
      {/* card1 */}
      {data.map((item, index) => {
        return (
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <h2 className="text-[14px] text-gray-500">
             {item.snippet.title}
            </h2>
            <h3 className="font-bold">{item.snippet.channelTitle}</h3>
            {/* <p className="text-xs">{item.statistics?.viewCount || 0} views &bull; 2 days ago</p> */}
            <p className="text-xs">&bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
