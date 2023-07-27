import {Component, Input} from '@angular/core';
import {ThemeColor} from '@shared/ui/theme';

@Component({
  selector: 'ui-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  @Input() public width = '100%';
  @Input() public height = '100%';
  @Input() public rounded = '10px';
  @Input() public color: ThemeColor = 'default';
}