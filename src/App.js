import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Card from 'react-bootstrap/Card'; 
import CardGroup from 'react-bootstrap/CardGroup'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from './components/pics/Cards';
export default function App() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      console.log(res.data);
      setUsers(res.data)

    }).catch((err)=>{
      console.log(err)
    })
  },)


  return (

    <div>
      
        <h1  className='bg-primary-subtle text-center'><i>Api integration</i></h1>
        {
           
           users.map((element,index)=>{
            return(
              <div key={index}>

              <GroupExample/>
              

                   
              </div>
              
            )
           })
        }
       

      
      
    </div>
  )
}
