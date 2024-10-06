import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CardPaymentComponent } from './checkout/card-payment/card-payment.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: AppComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'card-payment', component: CardPaymentComponent},
    {path: '**', component: NotFoundComponent}
];
