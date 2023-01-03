package com.nhattpam.CRUD_Employee.service;

import com.nhattpam.CRUD_Employee.model.Employee;
import java.util.List;

public interface EmployeeService {
    
    //create
    public Employee createEmp(Employee emp);
    
    //list
    public List<Employee> getAllEmp();
    
    //get by id for delete, update
    public Employee getEmpById(int id);
    
    //delete
    public void deleteEmp(int id);
    
    //update
    public Employee updateEmp(int id, Employee emp);
    
}
