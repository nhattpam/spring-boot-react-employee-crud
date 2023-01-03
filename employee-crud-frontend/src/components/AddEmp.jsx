import React, { useState } from 'react'
import empService from '../services/emp.service';

export default function AddEmp() {

    //viet function add
    const [emp, setEmp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: ""
    });
    

    //viet thong bao
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmp({...emp, [e.target.name] : value});
    };


    const submitEmp = (e) => {
        e.preventDefault();

        empService.saveEmp(emp).then((res) => {
            setMsg("Employee added successfully...");
            setEmp({
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              salary: "",
            });
        }).catch((error) => {
            console.log("loi roi");
            console.log(emp.firstName);
            console.log(emp.lastName);
            console.log(emp.email);
            console.log(emp.address);
            console.log(emp.salary);
            
            console.log(error);
        })
    }



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3">Add Employee

            {
                msg && <p className='text-success'>
                    {msg}
                </p>
            }
            </div>
            <div className="card-body">
              <form onSubmit={(e) => submitEmp(e)}>
                <div className="mb-3">
                  <label>Enter First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={emp.firstName}
                    onChange = {(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={emp.lastName}
                    onChange = {(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={emp.email}
                    onChange = {(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={emp.address}
                    onChange = {(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    name="salary"
                    value={emp.salary}
                    onChange = {(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center">
                  <button  className="btn btn-success">Submit</button>
                  {/* <input
                    type="Reset"
                    className="btn btn-danger ml-5"
                    value="Reset"
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
