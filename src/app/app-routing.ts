
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const MAINMENU_ROUTES: Routes = [
    
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'Shoppingcart',component:ShoppingcartComponent},
    {path:'contact',component:ContactComponent},
 
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);