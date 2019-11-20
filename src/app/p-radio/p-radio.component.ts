import { NgModule, Component, Input, Output, ElementRef, OnInit, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PRadioComponent),
  multi: true
};

@Component({
  selector: 'app-p-radio',
  template: `
        <div class="p-radio">
            <label class="radio-label" (click)="select()" *ngIf="label">
                <div class="name" [class.checked-name]="rb.checked">{{label}}</div>
            </label>
            <div class="helper-hidden-accessible">
                <input #rb type="radio" [attr.name]="name" [attr.value]="value" [checked]="checked">
            </div>
            <div class="radio-md" (click)="handleClick()">
                <div class="radio-icon " [class.radio-checked]="rb.checked">
                     <div class="radio-inner"></div>
                </div>
            </div>
        </div>
    `,
  styleUrls: ['./p-radio.component.css'],
  providers: [RADIO_VALUE_ACCESSOR]
})
export class PRadioComponent implements ControlValueAccessor {

  @Input() name: string;
  @Input() label: string;
  @Input() value: string;
  checked: boolean;

  @ViewChild('rb', {read: undefined, static: false}) inputViewChild: ElementRef;
  @Output() pRadioChange: EventEmitter<any> = new EventEmitter();
  onModelChange: any = () => { };

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  // model view -> view value
  writeValue(value: any): void {
    if (value) {
      this.checked = (value === this.value);
      if (this.inputViewChild.nativeElement) {
        this.inputViewChild.nativeElement.checked = this.checked;
      }
      this.cd.markForCheck();
    }
  }

  // view value ->model value
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void { }

  handleClick() {
    this.select();
  }

  select() {
    this.inputViewChild.nativeElement.checked = !this.inputViewChild.nativeElement.checked;
    this.checked = !this.checked;
    if (this.checked) {
      this.onModelChange(this.value); // 同步view value 和 model value
    } else {
      this.onModelChange(null);
    }
    this.pRadioChange.emit(null);
  }
}
