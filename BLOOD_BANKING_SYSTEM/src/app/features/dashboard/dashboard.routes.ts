import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {DashboardStatisticsComponent} from "./dashboard-statistics/dashboard-statistics.component";
import {DashboardManagementComponent} from "./dashboard-management/dashboard-management.component";

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'Dashboard',
    children: [
      {path: '', component: DashboardStatisticsComponent, title: 'Statistics'},
      {path: 'management', component: DashboardManagementComponent, title: 'Management'},
    ]
  },
];
