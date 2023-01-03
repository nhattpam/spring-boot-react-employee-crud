import React from 'react'

export default function AddEmp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center fs-3">
                        Add Employee
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="mb-3">
                                <label>Enter First Name</label>
                                <input type="text" className="form-control" name="firstName"/>
                            </div>
                            <div className="mb-3">
                                <label>Enter Last Name</label>
                                <input type="text" className="form-control" name="lastName"/>
                            </div>
                            <div className="mb-3">
                                <label>Enter Email</label>
                                <input type="text" className="form-control" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label>Enter Address</label>
                                <input type="text" className="form-control" name="address"/>
                            </div>
                            <div className="mb-3">
                                <label>Enter Salary</label>
                                <input type="number" className="form-control" name="salary"/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
