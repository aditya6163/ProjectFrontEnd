import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  reg: Register[] = []



  constructor(private dataservice: DataService) {

  }

  ngOnInit(): void {

    this.form = new FormGroup(
      {
        userId: new FormControl(""),
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        phone: new FormControl(""),
        email_Id: new FormControl(""),
        password: new FormControl(""),
        role: new FormControl(""),
        createdOn: new FormControl("")
      })

  }
  register(myform: NgForm) {
    // this.reg.push(this.form.value)
//    console.log("aditya");
    console.log(myform.value);



    this.dataservice.saveData(myform.value).subscribe
      ( res=> { console.log(res);
       })
  }

}
