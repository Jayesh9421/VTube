import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, formatNumber } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {

  const [apiData, setapiData] = useState(null);
const [channelData, setChannelData] = useState(null)

  const fetchVideoData = async () => {
    const videodeatils_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&id=${videoId}&key=${API_KEY}`;

    await fetch(videodeatils_url)
      .then((response) => response.json())
      .then((data) => setapiData(data.items[0]));
  };

  const fetchOtherData=async()=>{
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%20&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setapiData(data.items[0]));
  }

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div className="play-video mt-12">
      {/* <video src={video1} controls autoPlay muted className="w-full"></video> */}
      {/* video play section here */}
      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* video details */}
      <h3 className="mt-[10px] font-semibold text-[22px]">
        {apiData ? apiData.snippet.title : "Title here"}
      </h3>
      <div className="info flex items-center justify-between flex-wrap mt-[10px] text-[14px] text-gray-500">
        <p>
          {" "}
          {apiData
            ? formatNumber(apiData.statistics.viewCount)
            : "152k"} &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex gap-4 mr-8">
          <span>
            {/* like */}
            <img className="h-6 " src={like} alt="like" />
            {apiData ? formatNumber(apiData.statistics.likeCount) : 155}
          </span>
          {/* dislike */}
          <span>
            <img className="h-6 " src={dislike} alt="dislike" />
          </span>
          {/* share */}
          <span>
            <img className="h-6 " src={share} alt="share" />
            Share
          </span>
          {/* Save */}
          <span>
            <img className="h-6 " src={save} alt="save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      {/* publish */}
      <div className="publish flex items-center mt-[20px]">
        <img className="rounded-full w-12 mr-4" src={jack} alt="" />
        <div className="flex-1 leading-4">
          <p className="font-bold text-xl">GreatStack</p>
          <span className="text-sm text-gray-400">1M subscribers</span>
        </div>
        <button className="bg-red-700 px-4 text-white py-1 rounded-lg hover:bg-red-500 mr-8 text-sm">
          Subscribe
        </button>
      </div>
      {/* discription */}
      <div className="discription pl-[55px] ml-[15px] text-xs mt-4 text-gray-600">
        <p>
         {apiData ? apiData.snippet.description.slice(0,250):"Description Here"}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolore
          sit rerum?
        </p>
        <hr />
        {/* comment-section */}
        <h4 className="mt-4 font-bold text-lg">{apiData ? formatNumber(apiData.statistics.commentCount):"102"} Comments</h4>
        {/* comment1 */}
        <div className="comment flex items-start m-5">
          <img
            src={user_profile}
            alt="user_profile"
            className="w-8 h-8 rounded-full mr-4"
          />
          <div>
            <h3 className="mt-2 text-sm font-bold">
              {apiData ? apiData.snippet.channelTitle : "Title Here"}
              <span className="font-thin ml-2 text-[12px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              dicta.
            </p>
            <div className="comment-action flex h-[25px] mt-2">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} className="ml-3" alt="Dislike" />
            </div>
          </div>
        </div>
        <hr />
        {/* comment 2 */}
        <div className="comment flex items-start m-5">
          <img
            src={user_profile}
            alt="user_profile"
            className="w-8 h-8 rounded-full mr-4"
          />
          <div>
            <h3 className="mt-2 text-sm font-bold">
              Jayesh Kakad{" "}
              <span className="font-thin ml-2 text-[12px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              dicta.
            </p>
            <div className="comment-action flex h-[25px] mt-2">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} className="ml-3" alt="Dislike" />
            </div>
          </div>
        </div>
        <hr />
        {/* comment 3 */}
        <div className="comment flex items-start m-5">
          <img
            src={user_profile}
            alt="user_profile"
            className="w-8 h-8 rounded-full mr-4"
          />
          <div>
            <h3 className="mt-2 text-sm font-bold">
              Jayesh Kakad{" "}
              <span className="font-thin ml-2 text-[12px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              dicta.
            </p>
            <div className="comment-action flex h-[25px] mt-2">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} className="ml-3" alt="Dislike" />
            </div>
          </div>
        </div>
        <hr />
        {/* comment 4 */}
        <div className="comment flex items-start m-5">
          <img
            src={user_profile}
            alt="user_profile"
            className="w-8 h-8 rounded-full mr-4"
          />
          <div>
            <h3 className="mt-2 text-sm font-bold">
              Jayesh Kakad{" "}
              <span className="font-thin ml-2 text-[12px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              dicta.
            </p>
            <div className="comment-action flex h-[25px] mt-2">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} className="ml-3" alt="Dislike" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PlayVideo;
