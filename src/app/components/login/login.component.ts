import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newLog!: FormGroup
  model: any = {}

  constructor() { }

  ngOnInit() {
    this.newLog = new FormGroup ({
      username: new FormControl (null),
      password: new FormControl (null),

    })

  }

  login() {
    console.log(this.newLog)
  }

}
