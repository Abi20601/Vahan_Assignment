import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const Rea = () => {
    
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>READ
    <div className = ' customDiv w-50 bg-white rounded p-3'>
        <h2>Users List</h2>

        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>   
                    <th>Phone Number</th> 
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {data.map((users, index) => {
                    return <tr key = {index}>

                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phno}</td>
                    <td>{users.dob}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>


  )
}

export default Rea