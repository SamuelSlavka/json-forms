import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TabEnum } from '../../../json-forms/enums/tab-enum.enum';
import { TabInterface } from '../../interfaces/tab-interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: TabInterface[] = [];
  @Input() selectedTab: TabEnum = TabEnum.form;

  @Output() updateTab: EventEmitter<TabEnum> = new EventEmitter<TabEnum>();

  constructor() {}

  selectTab(id: TabEnum ) {
    this.selectedTab = id;
    this.updateTab.emit(id);
  }
}
