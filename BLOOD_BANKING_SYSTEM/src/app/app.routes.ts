import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {SignUpComponent} from "./features/sign-up/sign-up.component";
import {SignInComponent} from "./features/sign-in/sign-in.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home component'},
  {path: 'sign-up', component: SignUpComponent, title: 'Sign-Up component'},
  {path: 'sign-in', component: SignInComponent, title: 'Sign-In component'},
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)
  }
];
