import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
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

  return (
    <div className="card">
      <div className="top">
        <div onClick={() => setEditButtonClicked(true)}>
          <FaUserEdit />
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
