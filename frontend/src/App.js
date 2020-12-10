import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import api from './services/api';


function Moenda() {
  const [response, setResponse] = useState("");
  const [post, setPost] = useState("");
  const [responseToPost, setResponseToPost] = useState([]);

  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('', {link: post});

    setResponseToPost(response.data.moenda);
  };

  function strings(array){
    let result = "";

    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array[i].length; j++){
        result += array[i][j];
      } 
    }

    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          MOENDA
        </h3>
      </header>
      <p>{response}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={post}
          placeholder="Link to the github repository"
          onChange={e => setPost(e.target.value)}
        />
        <input 
          type="file"
          name="file"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="App-Result">
        <p>{responseToPost}</p>
      </div>
    </div>
  );
}


export default Moenda;