import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { MakeyourcomboComponent } from './components/offers/makeyourcombo/makeyourcombo.component';
import { FaqsComponent } from './components/shared/faqs/faqs.component';
import { FinishComponent } from './components/shared/finish/finish.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ChoicesComponent } from './components/offers/choices/choices.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'makeyourcombo', component: MakeyourcomboComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'finish', component: FinishComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: 'choices', component:ChoicesComponent},
  {path: 'error', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
