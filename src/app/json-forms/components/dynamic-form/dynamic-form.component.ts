import { TabEnum } from './../../enums/tab-enum.enum';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonInterface } from '../../interfaces/json-interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnChanges {
  @Input() jsonInput!: JsonInterface;
  @Output() updateTab: EventEmitter<TabEnum> = new EventEmitter<TabEnum>();

  form: FormGroup = this._fb.group({});

  constructor( private readonly _fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['jsonInput']?.currentValue) {
      this.createForm(changes['jsonInput'].currentValue)
    }
  }

  createForm(currentInput: JsonInterface) {
    currentInput.controls.map((control) => {
      this.form.addControl(control.name, this._fb.control(control.value));
    })
  }

  toggleCheck(name: string) {
    this.form.patchValue({[name]: !this.form.value[name]});
  }

  backToInput() {
    this.updateTab.emit(TabEnum.input);
  }

  submit() {
    console.log(this.form.value);
  }
}
