import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {DashboardStatisticsComponent} from "./dashboard-statistics/dashboard-statistics.component";
import {DashboardManagementComponent} from "./dashboard-management/dashboard-management.component";
import {RequestComponent} from "./request/request.component";
import {SettingsComponent} from "./settings/settings.component";
import{DonateComponent}from "./donate/donate.component";

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'Dashboard',
    children: [
//       {path: '', component: DashboardStatisticsComponent, title: 'Statistics'},
//       {path: 'jjjjjjjj', component: DashboardManagementComponent, title: 'Management'},
      {path: 'settings', component: SettingsComponent, title: 'Settings'},
      {path: 'request', component: RequestComponent, title: 'Request'},
      {path: 'donate', component: DonateComponent, title: 'Donate' }
    ]
  },
];
