import { CalculatorComponent } from '@/calculator/components/calculator/calculator.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calcutator-view',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './calcutator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalcutatorViewComponent { }
