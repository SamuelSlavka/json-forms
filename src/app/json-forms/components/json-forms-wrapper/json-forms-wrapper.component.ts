import { Component } from '@angular/core';
import { TabInterface } from '../../../shared/interfaces/tab-interface';
import { TabEnum } from '../../enums/tab-enum.enum';
import { JsonInterface } from '../../interfaces/json-interface';

@Component({
  selector: 'app-json-forms-wrapper',
  templateUrl: './json-forms-wrapper.component.html',
  styleUrls: ['./json-forms-wrapper.component.scss']
})
export class JsonFormsWrapperComponent {
  tabEnum = TabEnum;
  selectedTab: TabEnum = TabEnum.input;
  jsonInput: JsonInterface = {controls: []};

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

  updateTab(index: TabEnum) {
    this.selectedTab = index;
  }

  updateInput(from: string) {
    try {
      this.jsonInput = JSON.parse(from);
    } catch (e) {
      this.jsonInput = {controls: []};
    }
  }
}
