import  React from 'react'
import  {useState} from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import {auth} from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { login } from './features/userSlice';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Login() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch = useDispatch()

    const register=()=>{
        if(!name){
            return alert("Enter Full Name")
        }
        // const auth=getAuth();
        // signInWithEmailAndPassword(auth,email,password)
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }) 
            .then(()=>{
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                )
            })
        })
        .catch((error)=>{
            alert(error)
        });

    }
    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }
            ))
        })
        .catch(error=>alert(error))
    }
    
    return (
        <div className="login">
            <img src="https://techcrunch.com/wp-content/uploads/2012/11/linkedin-logo.png" alt="linkedin_picture" />
            <form >
                <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Full name (required)" />
                <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder="Profile Pic Url (Optional)" />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Email" />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
                <p>Not a member?
                    <span className="login__register" onClick={register}>Register Here</span>
                </p>
            </form>
        </div>
    )
}

export default Login
