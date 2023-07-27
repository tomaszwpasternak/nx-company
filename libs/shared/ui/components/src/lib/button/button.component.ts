import {Component, Input} from '@angular/core';
import {ThemeColor} from '@shared/ui/theme';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public text = '';
  @Input() public icon = '';
  @Input() public color: ThemeColor | 'ghost' = 'default';
  @Input() public darkText = false;
}