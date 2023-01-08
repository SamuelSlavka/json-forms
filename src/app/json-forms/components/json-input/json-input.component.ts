import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private readonly _fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.form) {
      this.createForm();
    }

    if (changes?.['jsonInput']?.currentValue) {
      this.form.patchValue({
        jsonInput: JSON.stringify(changes?.['jsonInput']?.currentValue),
      });
      this.form.markAllAsTouched();
    }
  }

  createForm() {
    this.form = this._fb.group({
      jsonInput: ['', [Validators.required, jsonValidator]],
    });
  }
}
