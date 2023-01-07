import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { DocumentInputComponent } from './components/document-input/document-input.component';

@NgModule({
  declarations: [TabsComponent, DocumentInputComponent],
  imports: [CommonModule],
})
export class SharedModule {}
