import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input()
  label = ""

  @Input()
  valueName = ""

  @Input()
  val = "";

  @Input()
  errMessage = ""

  @Output()
  valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {

    this.val = event.target.value
    this.valueChange.emit({
      valueName: this.valueName,
      value: this.val,
    });
  }

}
