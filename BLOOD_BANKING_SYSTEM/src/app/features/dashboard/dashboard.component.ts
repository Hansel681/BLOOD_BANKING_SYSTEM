import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FullCalendarModule} from "@fullcalendar/angular";
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import {Menu} from "./model/Menu";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FullCalendarModule,
    RouterLinkActive
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: '',
      center: 'title',
      right: ''
    },
    weekends: false,
    viewClassNames: "h-full",
  };


  public menu: Menu[] = [
    {
      title: 'Dashboard',
      routerLink: '/dashboard'
    },
    {
      title: 'Management',
      routerLink: '/dashboard/management'
    }
  ]
}
