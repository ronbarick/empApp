import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeClass } from '../employee-class.model';
import { EmpServiceService } from '../Service/emp-service.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AgeValidator } from '../age.validator';

@Component({
  selector: 'app-emp-curd',
  templateUrl: './emp-curd.component.html',
  styleUrls: ['./emp-curd.component.css']
})
export class EmpCurdComponent implements OnInit {

  displayedColumns = [ 'Name', 'Age', 'Salary','Action'];
  myForm: FormGroup;
 
  dataSource = new MatTableDataSource<EmployeeClass>();
  constructor(public fb: FormBuilder,private empservice:EmpServiceService) { }

  ngOnInit(): void {
    this.reactiveForm();
   this.getEmployee()
  }
 /* Reactive form */
 reactiveForm() {
  this.myForm = this.fb.group({
    id: ['0'],
    name: ['', [Validators.required]],
    age: ['', [Validators.required,AgeValidator]],
   
    salary: ['', [Validators.required]],
   

  })
}
submitForm() {
  
  console.log(this.myForm.value)
  this.empservice.postEmployee(this.myForm.value)
  .subscribe(data => {
    debugger;
    this.reactiveForm();
    this.getEmployee();  
  })    

}

public getEmployee() {
 
  this.empservice.getEmployeeList().subscribe
    (
      (response) => {    
        debugger;                      
        console.log('response received')
       this.dataSource= new MatTableDataSource<EmployeeClass>(response);
      },
      (error) => {                         
        console.error('Request failed with error')
      
      },
      () => {                                  
        console.error('Request completed')     
       
      })
}
onDeleteClick(EmpData:EmployeeClass):any{
  this.empservice.DeleteEmployee(EmpData)
  .subscribe(response => {
    debugger;
    
   this.getEmployee();
  })     
  

}
onEditClick(EmpData:EmployeeClass):any{
debugger;
this.myForm = this.fb.group({
  id: [EmpData.id],
  name: [EmpData.name],
  age: [EmpData.age,AgeValidator],
 
  salary: [EmpData.salary],
 

})
}

  

}






