import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
  {
    path: 'admin',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'admin/portal',
    pathMatch: 'full',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
