import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import moment from 'moment';

function toggle() {
  document.getElementsByClassName("post").classlist.remove("po")
}


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

// function navbar() {
//   return <>
//   <nav>
//     <li>Facebook </li>
//     <li>Home</li>
//     <li>Profile</li>
//     <li>Posts</li>
//     <li>Notifications</li>
//     <li>Dark mode</li>
//   </nav>
//   </>
// }


let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
  
  <div className='post'>
    <div className='postHeader'>
      <img className='profilePhoto' src={profilePhoto} alt="profile" />
      <div>
        {name} <br />
        {moment(postDate).fromNow()}
      </div>
    </div>

    <div className='postText'>
      {postText}
    </div>

    <img className='postImage' src={postImage} alt="post" />

    <hr />
    <div className='postFooter'>
      <div><AiFillLike/> like </div>
      <div><AiOutlineComment/> comment</div>
      <div><AiOutlineShareAlt/> share</div>
    </div>
    <hr />

  </div>
);


function Page() {
  function toggle() {
    <style>
      
    </style>
  }
  return <div className='page'>
    {/* <button onClick={}></button> */}

    <Post
      name="Ali"
      profilePhoto="https://i.pinimg.com/236x/14/bb/92/14bb92b0b5c9e510110d7ec16926f04e--van-niekerk-professional-portrait.jpg"
      postDate="12 Dec 2021"
      postImage="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960"
      postText="In simple terms, coding is the act of feeding commands to a computer in a language it can understand. The computer uses these commands to fulfill a task or a variety of tasks set by the person."
    />
    <Post
      name="Malik"
      profilePhoto="https://news.microsoft.com/wp-content/uploads/prod/2021/11/2021-11-24-Carlos-Rodriguez__headshot-215x215.png"
      postDate="12 Dec 2021"
      postImage="data:image/jpeg;base64,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"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
    />
    <Post
      name="Kashif"
      profilePhoto="https://news.microsoft.com/wp-content/uploads/prod/sites/43/2022/02/dharma-simorangkir_511x511-215x215.jpg"
      postDate="22 Aug 2022"
      postImage="https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
    />
    <Post
      name="Sulaiman"
      profilePhoto="https://production-next-images-cdn.thumbtack.com/i/345074918730145793/width/1024.jpeg"
      postDate="12 Dec 2021"
      postImage="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg?auto=webp&quality=95&crop=16:9&width=675"
      postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
    />


  </div>
}


ReactDOM.render(<Page />, document.querySelector('#root'));