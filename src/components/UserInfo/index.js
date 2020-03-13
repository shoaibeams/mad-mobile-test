import React from 'react';
import './UserInfo.scss';
import UserInput from '../UserInput';

function UserInfo({ phone, email, location, login, editButtonClicked, user }) {
  return (
    <div className="info">
      <p>
        {location.city}, {location.country}
      </p>

      {!editButtonClicked ? (
        <>
          <p>{phone}</p> <p>{email}</p>
        </>
      ) : (
        <>
          <UserInput
            editButtonClicked={editButtonClicked}
            value={phone}
            name="phone"
            login={login}
            use
          />
          <UserInput
            editButtonClicked={editButtonClicked}
            value={email}
            name="email"
            login={login}
          />
        </>
      )}
    </div>
  );
}

export default UserInfo;
