import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: any[] = [];
  @Input() selectedTab: any = undefined;

  @Output() updateTab: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  selectTab(id: any) {
    this.selectedTab = id;
    this.updateTab.emit(id);
  }
}
