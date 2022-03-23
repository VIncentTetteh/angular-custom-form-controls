import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: InputFormComponent,
      multi: true
    }
  ]
})
export class InputFormComponent implements OnInit,ControlValueAccessor {

  //@Input() label!:string
  @Input() type!:string
  value!:string;
  onChange!:(value:string) => void
  onTouched!:() => void

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {

  }

}
