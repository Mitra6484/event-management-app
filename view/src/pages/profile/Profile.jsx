import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal'); // Tracks the active tab
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Springfield',
    password: '********',
  });

  const favouriteEvents = [
    { id: 1, name: 'Music Festival', image: 'event1.jpg' },
    { id: 2, name: 'Art Exhibition', image: 'event2.jpg' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Startup Pitch Night', image: 'event3.jpg', date: '2024-11-30' },
    { id: 2, name: 'Tech Conference', image: 'event4.jpg', date: '2024-11-22' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEditSave = () => {
    setEditMode(!editMode);
    if (editMode) {
      alert('Profile updated!');
    }
  };

  return (
    <div className="profile-container">
      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Info
        </button>
        <button
          className={`tab-btn ${activeTab === 'favourites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favourites')}
        >
          Favourites
        </button>
        <button
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
      </div>

      {/* Content */}
      <div className="profile-content">
        {/* Personal Info Section */}
        {activeTab === 'personal' && (
          <div className="personal-info">
            <h3>Personal Information</h3>
            <div className="info-row">
              <label>Name:</label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userInfo.name}</span>
              )}
            </div>
            <div className="info-row">
              <label>Email:</label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userInfo.email}</span>
              )}
            </div>
            <div className="info-row">
              <label>Address:</label>
              {editMode ? (
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userInfo.address}</span>
              )}
            </div>
            <div className="info-row">
              <label>Password:</label>
              {editMode ? (
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userInfo.password}</span>
              )}
            </div>
            <button className="edit-btn" onClick={handleEditSave}>
              {editMode ? 'Save' : 'Edit'}
            </button>
          </div>
        )}

        {/* Favourites Section */}
        {activeTab === 'favourites' && (
          <div className="favourites">
            <h3>Favourite Events</h3>
            <div className="cards-container">
              {favouriteEvents.map((event) => (
                <div className="card" key={event.id}>
                  <img src={event.image} alt={event.name} />
                  <p>{event.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Section */}
        {activeTab === 'events' && (
          <div className="events">
            <h3>Upcoming Events</h3>
            <div className="cards-container">
              {upcomingEvents.map((event) => (
                <div className="card" key={event.id}>
                  <img src={event.image} alt={event.name} />
                  <p>{event.name}</p>
                  <button
                    className="cancel-btn"
                    disabled={new Date(event.date) <= new Date(new Date().setDate(new Date().getDate() + 7))}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
