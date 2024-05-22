import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import "./Home.css"

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
    <div className='flex '>

     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/> 
     <div className={` container ${sidebar ? "" : "large-Container"}`}>
      <Feed sidebar={sidebar} category={category}/>
     </div>
    </div>
    </>
  )
}

export default Home
