import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadFileAndGetURL } from '../firebase';

function Profile({ currentUser }) {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  useEffect( () => {
    if (!currentUser) {
      //NEED FIXING THIS
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const url = await uploadFileAndGetURL(file);
    if(url){
        setProfileImage(url)
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                {profileImage ? (
                  <img referrerPolicy='no-referrer' src={profileImage} alt="Profile" className="rounded-circle" style={{ width: 100, height: 100 }} />
                ) : (
                  <label htmlFor="profileImageInput">
                    <img referrerPolicy='no-referrer' src={currentUser.avatarURL || "/guest.jpeg"} alt="Profile" className="rounded-circle" style={{ width: 100, height: 100 }} />
                  </label>
                )}
                <input type="file" id="profileImageInput" accept="image/*" onChange={handleImageChange} />
              </div>
              <div className="col">
                <h2 className="mb-0">{currentUser.firstName} {currentUser.lastName}</h2>
                <p className="text-muted mb-0">{currentUser.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;