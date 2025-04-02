import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

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
  },

})
export class CalculatorButtonComponent {
  public isCommand = input(false,{
    transform:(value: boolean | string)=> typeof value=== 'string'?value==='':value
  });
  public isDouble = input(false,{
    transform:(value: boolean | string)=> typeof value=== 'string'?value==='':value
  });
  @HostBinding('class.bg-indigo-700') get commandStyle(){
    return this.isCommand();
  }
  @HostBinding('class.w-2/4') get commandStyleDouble(){
    return this.isDouble();
  }
 }
