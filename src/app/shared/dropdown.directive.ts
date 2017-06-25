import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
@HostBinding('class.open') isOpen = false;

  @HostListener('click') ondisplayDropdown(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
