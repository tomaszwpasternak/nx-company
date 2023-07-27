import {Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectOption} from './select-option';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() public options: SelectOption[] = [];
  @Output() public optionChanged = new EventEmitter();

  opened = false;
  field!: SelectOption;

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

  set value(val: { label: string, value: any }) {
    this.field = val;
    this.onChange(val);
    this.onTouch(val);
    this.opened = false;
  }

  selectOption(option: { label: string, value: any }) {
    this.value = option;
    this.optionChanged.emit();
  }

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}