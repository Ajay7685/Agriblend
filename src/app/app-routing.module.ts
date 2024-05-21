import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './core/components/middle/middle.component';

const routes: Routes = [
  { path: 'home', component: MiddleComponent,title: 'Home | AgriBlend ', },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
