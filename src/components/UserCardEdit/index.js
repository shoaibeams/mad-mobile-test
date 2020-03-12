import React from 'react';
import './UserCardEdit.scss';

function UserCardEdit() {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="subject"
              type="text"
              //   onChange={this.handleSubjectChange}
              //   value={subject}
              className="validate"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="input-field col s12">
          <input
            placeholder="Write your note here"
            className="materialize-textarea"
            // value={text}
            // onChange={this.handleTextChange}
          />
        </div>
      </div>
    </>
  );
}

export default UserCardEdit;
