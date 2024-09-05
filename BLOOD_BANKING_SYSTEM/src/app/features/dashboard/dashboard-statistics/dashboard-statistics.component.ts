import { Component } from '@angular/core';
import {MobileTableComponent} from "../../../shared/components/mobile-table/mobile-table.component";

@Component({
  selector: 'app-dashboard-statistics',
  standalone: true,
  imports: [
    MobileTableComponent
  ],
  templateUrl: './dashboard-statistics.component.html',
  styleUrl: './dashboard-statistics.component.css'
})
export class DashboardStatisticsComponent {

}
