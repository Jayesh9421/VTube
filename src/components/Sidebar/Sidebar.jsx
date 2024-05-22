import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import Home from "../../Pages/Home/Home";

const Sidebar = ({ sidebar , category , setCategory }) => {
  const active = "pb-[2px] underline text-red-600 font-bold";
  return (
    <div
      className={`sidebar bg-white w-[15%] h-[100vh] fixed top-0 pl-[2%] pt-[80px] mt-12 transition-all duration-500 ${
        sidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-[20px] mr-[20px] flex-col gap-4 space-y-4 font-thin text-sm relative bottom-16">
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 0 ? active:""}`} onClick={()=> setCategory(0)}>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        {/* icons and categories */}
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 20 ? active:""}`} onClick={()=> setCategory(20)}>
          <img src={game_icon} alt="home" />
          <p>Gaming</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 2 ? active:""}`} onClick={()=> setCategory(2)}>
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 17 ? active:""}`} onClick={()=> setCategory(17)}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 24 ? active:""}`} onClick={()=> setCategory(24)}>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 28 ? active:""}`} onClick={()=> setCategory(28)}>
          <img src={tech} alt="tech" />
          <p>Tech</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 10 ? active:""}`} onClick={()=> setCategory(10)}>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 22 ? active:""}`} onClick={()=> setCategory(22)}>
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>
        <div className={`shortcut-link flex gap-4 cursor-pointer ${category === 25 ? active:""}`} onClick={()=> setCategory(25)}>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
        <hr style={{ borderTop: "1px solid gray", width: "180px" }} />
      </div>

      {/* subscribers */}
      <div className="subscribe space-y-4 mt-4 relative bottom-16">
        <h3 className="font-semibold text-gray-500">Subscribed</h3>
        <div className="side-link flex gap-4 cursor-pointer">
          <img src={jack} alt="profile" className="rounded-full w-8" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link flex gap-4 cursor-pointer">
          <img src={simon} alt="profile" className="rounded-full w-8" />
          <p>Mr.beast</p>
        </div>
        <div className="side-link flex gap-4 cursor-pointer">
          <img src={tom} alt="profile" className="rounded-full w-8" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link flex gap-4 cursor-pointer">
          <img src={megan} alt="profile" className="rounded-full w-8" />
          <p>5-Minut Craft</p>
        </div>
        <div className="side-link flex gap-4 cursor-pointer">
          <img src={cameron} alt="profile" className="rounded-full w-8" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
