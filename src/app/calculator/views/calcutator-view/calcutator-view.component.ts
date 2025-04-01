import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calcutator-view',
  standalone: true,
  imports: [],
  templateUrl: './calcutator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalcutatorViewComponent { }
