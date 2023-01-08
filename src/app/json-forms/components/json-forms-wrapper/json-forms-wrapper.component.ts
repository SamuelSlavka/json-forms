import { Component } from '@angular/core';
import { TabInterface } from '../../../shared/interfaces/tab-interface';
import { TabEnum } from '../../enums/tab-enum.enum';

@Component({
  selector: 'app-json-forms-wrapper',
  templateUrl: './json-forms-wrapper.component.html',
  styleUrls: ['./json-forms-wrapper.component.scss']
})
export class JsonFormsWrapperComponent {
  tabEnum = TabEnum;
  tabs: TabInterface[] = [
    {
      id: TabEnum.input,
      title: "Input",
    },
    {
      id: TabEnum.form,
      title: "Form",
    },
  ];

  selectedTab: TabEnum = TabEnum.input;

  updateTab(index: TabEnum) {
    this.selectedTab = index;
  }
}
