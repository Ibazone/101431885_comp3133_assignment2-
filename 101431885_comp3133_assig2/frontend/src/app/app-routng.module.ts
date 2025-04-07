// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestConnectionComponent } from './components/test-connection/test-connection.component';

const routes: Routes = [
  { path: 'test', component: TestConnectionComponent },
  { path: '', redirectTo: '/test', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }