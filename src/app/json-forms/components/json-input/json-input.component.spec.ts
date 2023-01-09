import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { JsonInputComponent } from './json-input.component';

describe('JsonInputComponent', () => {
  let component: JsonInputComponent;
  let fixture: ComponentFixture<JsonInputComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonInputComponent],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonInputComponent);
    component = fixture.componentInstance;
    component.jsonInput = {controls: []};
    component.form = formBuilder.group({
      jsonInput: ['', []],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
