import { JsonFormsWrapperComponent } from './components/json-forms-wrapper/json-forms-wrapper.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { JsonInputComponent } from "./components/json-input/json-input.component";

const routes: Routes = [
  {
      path: '',
      component: JsonFormsWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonFormsRoutingModule { }
