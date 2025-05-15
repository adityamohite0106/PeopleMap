import React from 'react';
import ProfileList from '../components/ProfileList';
import '../pages/Home.css'; 
const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4"  id='searchName'>Pe🌎pleMap</h2>
      <ProfileList />
         <div className='returnTop'><a href="#searchName" >^</a></div>
    </div>
    
  );
};

export default Home;
