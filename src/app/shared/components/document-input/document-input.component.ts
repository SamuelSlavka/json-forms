import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html',
  styleUrls: ['./document-input.component.scss']
})
export class DocumentInputComponent {

  @Output() updateInput: EventEmitter<string> = new EventEmitter<string>();

  onUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.item(0);
    file?.text().then(text => {
      this.updateInput.emit(text);
    });
  }

  onDrop(files: FileList) {
    const file: File | null = files?.item(0);
    file?.text().then(text => {
      this.updateInput.emit(text);
    });
  }
}
