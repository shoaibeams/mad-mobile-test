import React from 'react';
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import { fetchUsers } from '../../redux/user/user.actions';


function Users(props) {
  
       const [state, setstate] = useState([]);
       
       useEffect(() => {
        async function getUsers() {
          const users = await props.fetchUsers();
          console.log("user", users)
        }
        getUsers();
      }, []);

    return (
        <div className="App">
        <header className="App-header">
            <p>
                Users Screen
            </p>
            
        </header>
        </div>
    );
}


export default connect(null, {fetchUsers})(Users);