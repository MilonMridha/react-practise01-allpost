import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts (){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  },[])

  return(
    <div>
      <h2>My All Post : {posts.length}</h2>
     <div className='all-post'>  {
        posts.map(post => <SinglePost tittle={post.title} userid={post.userId} body={post.body}></SinglePost>)
      } </div>
    </div>
  )
}
function SinglePost (props){
  return (
    <div className='single-post'>
      <h3>Title : {props.tittle}</h3>
      <p>User Id :{props.userid}</p>
      <p>Body : {props.body}</p>
    </div>
  )
}
export default App;
