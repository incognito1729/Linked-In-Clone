import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import {useState,useEffect} from 'react';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {logout, selectUser} from '../src/features/userSlice'
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move"

function Feed() {
    
    const [inputs,setInput]=useState("");
    const [posts,setPosts]=useState([]);
    const user=useSelector(selectUser)

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    },[]);

    const sendPost=(e)=>{
        e.preventDefault();
        console.log(inputs)
        db.collection('posts').add({
            name: user.displayName,
            message: inputs,
            description: user.email,
            photoUrl: user.photoUrl||user.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
        console.log(inputs)
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <EditIcon />
                    <form >
                        <input value={inputs} onChange={(e)=>setInput(e.target.value)} type="text"  />
                        <button  onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data:{name ,description,message,photoUrl}})=>{
                    return <Post Key={Math.random()} name={name} description={description} message={message} photoUrl={photoUrl}/>
                })}
            </FlipMove>
            {/* <Post name='Vishal Patil' description='This is a test' message='Message goes here' /> */}
        </div>
    )
}

export default Feed
