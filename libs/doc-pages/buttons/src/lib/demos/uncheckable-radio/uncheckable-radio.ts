import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-buttons-radio-uncheckable',
  templateUrl: './uncheckable-radio.html',
  standalone: false
})
export class DemoButtonsUncheckableRadioComponent {
  uncheckableRadioModel = 'Middle';
}
