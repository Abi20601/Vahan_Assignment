import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../index.css'
import axios from 'axios';

const Del = () => {
  const [data,setData] = useState([])
  
  const location = useNavigate();
  useEffect(() => {
      axios.get('http://localhost:8000/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/delete/'+id)
    .then(res => {
      location(0);
    }) 
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
    <div className = ' customDiv w-50 bg-white rounded p-3'>
        <h2>Delete List</h2>

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
                        <button onClick = { () => handleDelete(users.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                  </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>

  )
}

export default Del