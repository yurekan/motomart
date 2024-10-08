import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EcommerceHomeComponent } from './home/ecommerce-home/ecommerce-home.component';
import { FindBikesComponent } from './home/find-bikes/find-bikes.component';
import { ViewBikeComponent } from './home/view-bike/view-bike.component';
import { AccessoriesHomeComponent } from './home/accessories-home/accessories-home.component';
import { AccessoriesListComponent } from './home/accessories-home/accessories-list/accessories-list.component';
import { AccessoriesPageComponent } from './home/accessories-home/accessories-page/accessories-page.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

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
            { path: 'find-bikes', component: FindBikesComponent},
            {path: 'view-bike', component: ViewBikeComponent},
            { path: 'accessories', component: AccessoriesHomeComponent},
            {path: 'accessories-list/:category', component: AccessoriesListComponent},
            {path: 'accessories-page/:id', component: AccessoriesPageComponent},
            //{path: 'accessories-page', component: AccessoriesPageComponent}   
        ]
    },
    { path: 'checkout', component: CheckoutComponent},
    {path: 'card-payment', component: CardPaymentComponent},
    { path: 'login', component: LoginComponent },
    { path: 'card-payment', component: CardPaymentComponent },
    {path: 'order-placed', component: OrderPlacedComponent},
    { path: '**', component: NotFoundComponent },
    
];
