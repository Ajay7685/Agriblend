import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './core/components/middle/middle.component';
import { AboutComponent } from './core/components/about/about.component';
import { ContactComponent } from './core/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: MiddleComponent, title: 'Home | AgriBlend ', },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'About Us | AgriBlend ', },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | AgriBlend ', },

  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
