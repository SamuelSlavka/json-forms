import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormsWrapperComponent } from './json-forms-wrapper.component';

describe('JsonFormsWrapperComponent', () => {
  let component: JsonFormsWrapperComponent;
  let fixture: ComponentFixture<JsonFormsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
