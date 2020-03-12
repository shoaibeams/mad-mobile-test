import React from 'react';
import './UserInfo.scss';
import UserInput from '../UserInput';

function UserInfo({ phone, email, location, editButtonClicked }) {
  return (
    <div className="info">
      {/* <p>{phone}</p>
      <p>{email}</p> */}
      <p>
        {location.city}, {location.country}
      </p>

      <UserInput editButtonClicked={editButtonClicked} value={phone} />
      <UserInput editButtonClicked={editButtonClicked} value={email} />
    </div>
  );
}

export default UserInfo;
