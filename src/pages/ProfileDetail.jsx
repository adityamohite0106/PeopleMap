import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profiles } from '/data';
import MapView from '../components/MapView';
import '../pages/ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === id);

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="profile-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2 className="profile-title">{profile.name}</h2>
      <p className="profile-description">{profile.description}</p>
      <p className="profile-contact"><strong>Contact:</strong> {profile.contact}</p>
      <div className="map-container">
        <MapView address={profile.address} />
      </div>
    </div>
  );
};

export default ProfileDetail;
