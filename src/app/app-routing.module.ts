
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
