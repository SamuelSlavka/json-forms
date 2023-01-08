import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonInputComponent } from './components/json-input/json-input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { JsonFormsWrapperComponent } from './components/json-forms-wrapper/json-forms-wrapper.component';
import { JsonFormsRoutingModule } from './json-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    JsonInputComponent,
    DynamicFormComponent,
    JsonFormsWrapperComponent,
  ],
  imports: [
    CommonModule,
    JsonFormsRoutingModule,
    SharedModule
  ]
})
export class JsonFormsModule { }
