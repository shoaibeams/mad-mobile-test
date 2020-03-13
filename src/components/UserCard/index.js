import React, { useState } from 'react';
import { FaUserEdit, FaUserCheck } from 'react-icons/fa';
import './UserCard.scss';
import UserInfo from '../UserInfo';

function UserCard(props) {
  const {
    name: { first, last },
    login,
    phone,
    email,
    location,
    picture: { large }
  } = props.user;

  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [iconVisibilty, setIconVisibilty] = useState(true);

  const iconHandler = () => {
    setIconVisibilty(!iconVisibilty);
    setEditButtonClicked(!editButtonClicked);
  };

  return (
    <div className="card">
      <div className="top">
        <div onClick={iconHandler}>
          <FaUserEdit
            style={{ display: iconVisibilty ? 'initial' : 'none' }}
            className="sortIcon"
          />

          <FaUserCheck
            style={{ display: iconVisibilty ? 'none' : 'initial' }}
            className="sortIcon"
          />
        </div>
        <h2>
          {first}&nbsp;{last}
        </h2>
      </div>
      <img src={large} alt="John" />
      <UserInfo
        login={login}
        phone={phone}
        email={email}
        location={location}
        editButtonClicked={editButtonClicked}
      />
    </div>
  );
}

export default UserCard;
