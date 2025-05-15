import React, { useState } from 'react';
import { profiles } from '/data.js';
import ProfileCard from './ProfileCard';
import '../pages/ProfileList.css';

const ProfileList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="profile-grid">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
   
    </>
  );
};

export default ProfileList;
