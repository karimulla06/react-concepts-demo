import React from 'react';
import axios from 'axios';
import './style.css';

export default function AxiosDemo() {
  const [data,setData] = React.useState([]);

  // React.useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setData(json))
  // },[]);

  React.useEffect(async ()=>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch(e){
      console.log(e.message);
    }
  },[]);

  const handleAddPost = async () => {
    const obj = {title:"Title", body: "body"};
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    try{
      const response = await axios.post(endpoint,obj); //Create
      console.log(reponse.data);
    } catch(e){
      console.log(e.message);
    }
  };

  const handleUpdatePost = async (post) => {
    post.title = "Updated Title";
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    try{
      const response = await axios.put(endpoint,post); 
      // put -> entire object to update
      // await axios.patch(endpoint,{title:"Updated Title"}); 
      // patch -> only prop to update
      console.log(reponse);
    } catch(e){
      console.log(e.message);
    }
  };

  const handleDeletePost = async (post) => {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    try{
      await axios.delete(endpoint);
    } catch(e){
      if(e.response && e.reponse.state === 404){
        alert('This Post is already deleted!')
      } else{
        console.log(e.message);
      }
    }
  };

  return (
    <>
    <button onClick={handleAddPost}>Add Post</button>
    <button onClick={() => handleUpdatePost(data[0])}>Update Post</button>
    <button onClick={() => handleDeletePost(data[0])}>Delete Post</button>
    <ol>
      {data.map(obj => <li key={obj.id}>{obj.title}</li>)}
    </ol>
    </>
  );
}