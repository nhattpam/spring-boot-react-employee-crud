package com.nhattpam.CRUD_Employee.controller;

import com.nhattpam.CRUD_Employee.model.Employee;
import com.nhattpam.CRUD_Employee.service.EmployeeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class EmployeeController {
    
    @Autowired
    private EmployeeService empService;
    
    @PostMapping("/save")
    public ResponseEntity<Employee> createEmp(@RequestBody Employee emp){
        return new ResponseEntity<Employee>(empService.createEmp(emp), HttpStatus.CREATED);
    }
    
    @GetMapping("/")
    public ResponseEntity<List<Employee>> getAllEmp(){
        return new ResponseEntity<List<Employee>>(empService.getAllEmp(), HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmpById(@PathVariable int id){
        return new ResponseEntity<Employee>(empService.getEmpById(id), HttpStatus.OK);
    }
    
    @GetMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmp(@PathVariable int id){
        empService.deleteEmp(id);
        return new ResponseEntity<String>("Delete successfully...", HttpStatus.OK);
    }
    
    @PostMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmp(@PathVariable int id, @RequestBody Employee emp){
        return new ResponseEntity<Employee>(empService.updateEmp(id, emp), HttpStatus.OK);
    }
}
