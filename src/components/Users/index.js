import React from 'react';
import {connect} from 'react-redux'
import {useEffect} from 'react'
import { fetchUsers } from '../../redux/user/user.actions';

function Users({fetchUsers, users}) {

       useEffect(()=>{
         console.log("Calling", users)   
         fetchUsers();
      }, [users ? users.length: null])


    return (
        <div className="App">
        <header className="App-header">
            <p>
                {users ? users.map(user=>
                  <p>{user.phone}</p>
                ):null}
            </p>
            
        </header>
        </div>
    );
}

const mapStateToProps = state => ({
  users: state.users.data
});

export default connect(mapStateToProps, {fetchUsers})(Users);