import { ReactiveFormsModule } from '@angular/forms';
import { JsonInputComponent } from './../json-input/json-input.component';
import { DynamicFormComponent } from './../dynamic-form/dynamic-form.component';
import { DocumentInputComponent } from './../../../shared/components/document-input/document-input.component';
import { TabsComponent } from './../../../shared/components/tabs/tabs.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormsWrapperComponent } from './json-forms-wrapper.component';

describe('JsonFormsWrapperComponent', () => {
  let component: JsonFormsWrapperComponent;
  let fixture: ComponentFixture<JsonFormsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JsonFormsWrapperComponent,
        JsonFormsWrapperComponent,
        TabsComponent,
        DocumentInputComponent,
        DynamicFormComponent,
        JsonInputComponent,
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonFormsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
