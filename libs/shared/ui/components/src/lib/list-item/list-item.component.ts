import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeColor} from '@shared/ui/theme';

@Component({
  selector: 'ui-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() color: ThemeColor = 'default';
  @Input() icon = '';
  @Input() label = '';
  @Input() hint = '';
  @Input() buttonText = '';
  @Input() rightText: string | number = '';

  @Output() buttonClicked = new EventEmitter<void>();
}