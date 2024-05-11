import React, { useEffect,useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import '../../index.css'
import axios from 'axios';


const Upd = () => {

    const [data,setData] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
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
                    <td>
                        <Link to = "../Updbtn" state= {{key: users,id: index}}>
                            <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                            {}
                        </Link>
                    </td>
                  </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>

  )
}

export default Upd