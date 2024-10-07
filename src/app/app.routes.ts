import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CardPaymentComponent } from './checkout/card-payment/card-payment.component';
import { RunProjectComponent } from './run-project/run-project.component';
import { AccessoriesHomeComponent } from './accessories-home/accessories-home.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EcommerceHomeComponent } from './home/ecommerce-home/ecommerce-home.component';
import { FindBikesComponent } from './find-bikes/find-bikes.component';
import { AccessoriesListComponent } from './accessories-home/accessories-list/accessories-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
      path: 'admin', component: AdminComponent,
      children: [
        { path: '', redirectTo: 'admin-page', pathMatch: 'full' },  // Redirect to 'admin-page' when '/home' is accessed
        { path: 'admin-products', component: AdminProductsComponent },
        { path: 'admin-orders', component: AdminOrdersComponent },
        { path: 'admin-users', component: AdminUsersComponent },
        { path: 'admin-page', component: AdminPageComponent }  // Admin page is rendered first
      ]
    },
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: '', redirectTo: 'ecommerce-home', pathMatch: 'full'},
            {path: 'ecommerce-home', component: EcommerceHomeComponent},
        ]
    },
    {
        path: 'accessories', component: RunProjectComponent,
        children: [
            {path: 'accessories-list', component: AccessoriesListComponent}
        ]
    },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'card-payment', component: CardPaymentComponent },
    { path: '**', component: NotFoundComponent },
    {path: 'find-bikes', component: FindBikesComponent},
];
