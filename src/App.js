import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed'
import {login,logout,selectUser} from "./features/userSlice"
import {useDispatch, useSelector } from 'react-redux';
import Login from './Login'
import { auth } from './firebase';
import {useEffect} from 'react'
import Widgets from './Widgets';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout());
      }
    })
  }, [])
  
  return (
    <div className="App">
      <Header />
      {!user?(<Login/>):(
        <div className="app__body">
            <Sidebar/>
            <Feed />
            <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
