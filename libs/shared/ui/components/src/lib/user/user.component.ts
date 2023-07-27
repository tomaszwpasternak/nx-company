import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() public img = '';
}