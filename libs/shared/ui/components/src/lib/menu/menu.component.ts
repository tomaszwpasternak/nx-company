import {Component, ElementRef, HostListener, Input} from '@angular/core';
import { MenuOption } from './menu-option';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() public icon = '';
  @Input() public text = '';
  @Input() public options: MenuOption[] = [];

  opened = false;

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!this.opened) {
      return;
    }
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.opened = false;
    }
  }

  constructor(private elementRef: ElementRef) {
  }
}