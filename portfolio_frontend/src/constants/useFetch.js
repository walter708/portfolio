import  {useState, useEffect} from 'react'
import {client } from '../client';
export const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  useEffect(() =>{
    client.fetch(url).then((data) => {
      setResponse(data);
    });
  }, [url])
  
  return response
}
