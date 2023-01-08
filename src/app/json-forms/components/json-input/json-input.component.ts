import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabEnum } from '../../enums/tab-enum.enum';
import { JsonInterface } from '../../interfaces/json-interface';
import { jsonValidator } from '../../validators/json.validators';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
})
export class JsonInputComponent implements OnChanges {
  form!: FormGroup;
  @Input() jsonInput!: JsonInterface;
  @Output() updateInput: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateTab: EventEmitter<TabEnum> = new EventEmitter<TabEnum>();

  constructor(private readonly _fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.form) {
      this.form = this._fb.group({
        jsonInput: ['', [Validators.required, jsonValidator]],
      });
    }

    if (changes?.['jsonInput']?.currentValue) {
      this.form.patchValue({
        jsonInput: JSON.stringify(changes?.['jsonInput']?.currentValue),
      });
      this.form.markAllAsTouched();
    }
  }

  updateForms() {
    if (this.form.valid) {
      this.updateInput.emit(this.form.value.jsonInput);
    }
  }

  gotToForm() {
    this.updateTab.emit(TabEnum.form);
  }
}
