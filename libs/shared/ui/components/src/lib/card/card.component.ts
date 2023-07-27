import {animate, style, transition, trigger} from '@angular/animations';
import {Component, Input} from '@angular/core';
import {ThemeColor} from '@shared/ui/theme';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0, marginBottom: '20px'}),
        animate(200, style({opacity: 1, marginBottom: '0'}))
      ]),
      transition('* => void', [
        style({opacity: 1, marginLeft: '0'}),
        animate(200, style({opacity: 0, marginLeft: '20px'}))
      ])
    ])
  ]
})
export class CardComponent {
  @Input() public title = '';
  @Input() public titleIcon?: string;
  @Input() public color: ThemeColor = 'default';
  @Input() public loading = false;
}
