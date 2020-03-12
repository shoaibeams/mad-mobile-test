import React from 'react';
import './UserCard.scss';

function UserCard(props) {
  const {
    name: { first, last },
    phone,
    location,
    picture: { large }
  } = props.user;

  return (
    <div className="card">
      <div className="top">
        <h1>
          {first}&nbsp;{last}
        </h1>
      </div>
      <img src={large} alt="John" />
      <div className="info">
        <p>{phone}</p>
        <p className="title">CEO & Founder, Example</p>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
