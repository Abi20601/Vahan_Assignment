import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const Create = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div style={{ marginLeft: '320px', width: 'calc(100% - 320px)', display: 'flex', justifyContent: 'center' ,flexDirection: 'column',height: '100vh'}}>create
    <div className = 'w-50 bg-secondary rounded p-3'>
        <h2>Users List</h2>
        <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Create + </Link>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>   
                    <th>phno</th> 
                    <th>dob</th>
                </tr>
            </thead>
            <tbody>
                {data.map((users, index) => {
                    return <tr key = {index}>

                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phno}</td>
                    <td>{users.dob}</td>
                    <td>
                        <button className = 'btn btn-sm btn-info'>Read</button>
                        <button className = 'btn btn-sm btn-primary mx-2'>Edit</button>
                        <button className = 'btn btn-sm btn-danger'>Delete</button>
                    </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>


  )
}

export default Create