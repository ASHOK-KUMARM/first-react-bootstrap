import React, { useState } from 'react'
import '../App.css'

function Contact() {

    const [formData, setFormData] = useState({
        UserName : "",
        Email : "",
        ContactNumber : "",
        comments : ""
    })

    function handleChange (e) {
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }
    
    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <form className='contact p-4' onSubmit={onSubmit}>
        <div className='container col-md-6 pt-4'>
            <div className="mb-2 ">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white">User Name</label>
                <input 
                    type="text" 
                    className="form-control rounded-0" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter your name" 
                    onChange={handleChange}
                    name="UserName"
                    value={formData.UserName}
                />
            </div>
            <div className="mb-2 ">
                <label htmlFor="exampleFormControlEmail" className="form-label text-white">Email address</label>
                <input 
                    type="email" 
                    className="form-control rounded-0" 
                    id="exampleFormControlEmail" 
                    placeholder="name@example.com" 
                    onChange={handleChange}
                    name="Email"
                    valur={formData.Email}
                    />
            </div>
            <div className="mb-2 ">
                <label htmlFor="exampleFormControlNumber" className="form-label text-white">Phone Number</label>
                <input 
                    type="Number" 
                    className="form-control rounded-0" 
                    id="exampleFormControlNumber" 
                    placeholder="Phone Number" 
                    onChange={handleChange}
                    name="ContactNumber"
                    value={formData.ContactNumber}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Comments</label>
                <textarea 
                    className="form-control rounded-0" 
                    id="exampleFormControlTextarea1" 
                    rows="5" 
                    placeholder='Enter your comments here....'
                    onChange={handleChange}
                    name="comments"
                    value={formData.comments}
                    />
            </div>
            <div className="d-grid gap-2 mb-2">
                <button className="btn btn-primary rounded-0">Submit</button>
            </div>
        </div>
    </form>
  )
}

export default Contact