import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./json-forms/json-forms.module').then(m => m.JsonFormsModule),
    data: {
        breadcrumb: 'containerTracking.featureName',
    },
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
