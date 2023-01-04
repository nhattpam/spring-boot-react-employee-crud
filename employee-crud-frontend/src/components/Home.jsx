import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import empService from "../services/emp.service";

export default function Home() {

  //function list
  const [empList, setEmpList] = useState([]);
  //chuyen thanh 1 ham khac example init khi delete xong thi update lai list
  const init = () =>{
    empService.getAllEmp().then((res) => {
      console.log(res.data);
      setEmpList(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(() => {
    init();
  },[]);

  //message
  const [msg, setMsg] = useState("")
  //navigate
  const navigate = useNavigate();
  //function delete
  const deleteEmp = (id) =>{
    console.log('day la id: ' , id)
    empService.deleteEmp(id).then((res) => {
      setMsg("Delete successfully....")
      init();//update lai list
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Employee System</h1>

      {
        msg && <p className="text-success text-center">{msg}</p>
      }

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((e, num) => (
            <tr>
              <th scope="row">{num + 1}</th>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>
              <td>
                <Link className="btn btn-sm btn-primary" to={"editEmployee/" + e.id}>Edit</Link>
                <a onClick={() => deleteEmp(e.id)} className="btn btn-sm btn-danger ms-2">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
