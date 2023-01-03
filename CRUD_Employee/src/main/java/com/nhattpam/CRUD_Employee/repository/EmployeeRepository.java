package com.nhattpam.CRUD_Employee.repository;

import com.nhattpam.CRUD_Employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
    
}
