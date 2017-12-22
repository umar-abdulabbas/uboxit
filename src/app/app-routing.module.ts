
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { MakeyourcomboComponent } from './makeyourcombo/makeyourcombo.component';
import { FaqsComponent } from './faqs/faqs.component';
const routes: Routes = [
    
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'shoppingcart',component:ShoppingcartComponent},
    {path:'contact',component:ContactComponent},
    {path:'makeyourcombo',component:MakeyourcomboComponent},
    {path:'faqs',component:FaqsComponent},
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}