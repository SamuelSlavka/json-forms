import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { DocumentInputComponent } from './components/document-input/document-input.component';
import { FileUploadDirective } from './directives/file-upload.directive';

@NgModule({
  declarations: [TabsComponent, DocumentInputComponent, FileUploadDirective],
  imports: [CommonModule],
  exports: [TabsComponent, DocumentInputComponent],
})
export class SharedModule {}
