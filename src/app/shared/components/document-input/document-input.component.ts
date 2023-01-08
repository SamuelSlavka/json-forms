import { Component } from '@angular/core';

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html',
  styleUrls: ['./document-input.component.scss']
})
export class DocumentInputComponent {

  onUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.item(0);
    console.log(file);
  }

  onDrop(files: any) {
    const file = files?.item(0);
    console.log(file);
  }
}
