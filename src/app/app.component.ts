import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'custom-form-control';
  inputForm!:FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      inputOne:['value 1'],
      inputTwo:['value 2'],
      inputThree:[],
      comments:[],
    })
  }

}
