import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mobile-table',
  standalone: true,
  imports: [],
  templateUrl: './mobile-table.component.html',
  styleUrl: './mobile-table.component.css'
})
export class MobileTableComponent {

  @Input() title: string = '';
  @Input() value: string = ''
}
