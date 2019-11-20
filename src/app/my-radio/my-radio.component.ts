import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-my-radio',
  templateUrl: './my-radio.component.html',
  styleUrls: ['./my-radio.component.css'],
})


export class MyRadioComponent implements OnInit {
  @Input() groupName: string;
  @Input() defaultValue;
  @Input() checkedValue;
  @Input() source;
  @Input() disabled = false;
  @Output() onclick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }
  onClick(event): void {
    console.log(this.defaultValue);
    this.onclick.emit(event);
  }
}
