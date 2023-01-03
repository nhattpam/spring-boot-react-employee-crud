package com.nhattpam.CRUD_Employee.service;

import com.nhattpam.CRUD_Employee.model.Employee;
import com.nhattpam.CRUD_Employee.repository.EmployeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    
    @Autowired
    private EmployeeRepository empRepo;

    @Override
    public Employee createEmp(Employee emp) {
        return empRepo.save(emp);
    }

    @Override
    public List<Employee> getAllEmp() {
        return empRepo.findAll();
    }

    @Override
    public Employee getEmpById(int id) {
        return empRepo.findById(id).get();
    }

    @Override
    public void deleteEmp(int id) {
        Employee emp = empRepo.findById(id).get();
        if(emp != null){
            empRepo.delete(emp);
        }
    }

    @Override
    public Employee updateEmp(int id, Employee emp) {
         Employee oldEmp = empRepo.findById(id).get();
         if(oldEmp != null){
             emp.setId(id);
             return empRepo.save(emp);
         }
        return null;
    }
    
}
