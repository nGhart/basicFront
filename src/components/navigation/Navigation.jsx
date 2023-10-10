import './navigation.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileStore from '../../stores/profileStore';
import { Center } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

const Navigation = () => {
  const profile = profileStore();
  const [profileName, setProfileName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    profile.getProfiles().then(() => {
      if (profile.profiles && profile.profiles.length > 0) {
        setProfileName(profile.profiles[0].name);
        setProfilePic(profile.profiles[0].logo);
      }
    });
  }, [profile]);

  return (
    <Center>
      <div className="navContainer">
        <div className="logo">
          <Link to="/" className="listItem">
            <span className="font3">records</span>
          </Link>
        </div>
        <div className="icons">
          <>
            <div className="user">
              <Avatar
                className="profileImg"
                name={profileName}
                src={profilePic}
                size="sm"
                bg="rgb(26, 115, 96)"
              />
              <Link to="profile">
                <button>Welcome {profileName} </button>
              </Link>
            </div>
          </>
        </div>
      </div>
    </Center>
  );
};

export default Navigation;
