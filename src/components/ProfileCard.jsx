import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/ProfileCard.css'; 

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleViewMap = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="profile-card">
      <img src={profile.image} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={handleViewMap}>Summary</button>
    </div>
  );
};

export default ProfileCard;
