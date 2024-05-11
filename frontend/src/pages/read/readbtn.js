import React from 'react'

const readbtn = () => {
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
    <div className='customDiv w-50 bg-white rounded p-3'>
    <div className='p-2'>
    <h2>Student Detail</h2> 
    <h2>{users.ID}</h2>
    <h2>{users.name}</h2>
    <h2>{users.email}</h2>
    <h2>{users.phno}</h2>
    <h2>{users.dob}</h2>
</div>
<Link to="/" className='btn btn-primary me-2'>Back</Link>
<button className='btn btn-info'>Edit</button>

</div>
</div>
  )
}

export default readbtn