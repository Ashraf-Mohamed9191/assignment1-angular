import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userNameLabel(element:HTMLLabelElement):void{
    element.classList.remove('d-none');
  }
}
