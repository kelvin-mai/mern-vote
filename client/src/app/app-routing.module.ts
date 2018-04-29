import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardService } from './services/guard.service';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  },
  {
    path: 'profile/poll/new',
    component: CreatePollComponent,
    canActivate: [GuardService]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
