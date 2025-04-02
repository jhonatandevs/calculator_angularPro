import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'w-1/4 border-r border-b border-indigo-400',
    attribute:'hola',
    'data-size':'XL'
  }
})
export class CalculatorButtonComponent { }
