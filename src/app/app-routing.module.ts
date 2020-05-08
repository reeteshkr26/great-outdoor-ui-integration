import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/my-order/order/order.component';
import { ShoppingCartComponent } from './components/shoping-cart/shopping-cart/shopping-cart.component';
import { OrderDetailsComponent } from './components/my-order/order-details/order-details.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';
import { RegistrationComponent } from './components/user-management/registration/registration.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { LoginSuccessComponent } from './components/user-management/login-success/login-success.component';
import { ViewWishlistComponent } from './components/wishlist-management/view-wishlist/view-wishlist.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AddProductComponent } from './components/product-management/products/add-product/add-product.component';
import { UpdateProductComponent } from './components/product-management/products/update-product/update-product.component';
import { AddProductMasterComponent } from './components/product-management/add-product-master/add-product-master.component';
import { AboutUsComponent } from './components/shared/about-us/about-us.component';
import { AddRetailerProductComponent } from './components/retailer-inventory-management/add-retailer-product/add-retailer-product.component'
import { RetailerProductListComponent } from './components/retailer-inventory-management/retailer-product-list/retailer-product-list.component';
import { DeleteProductComponent } from './components/retailer-inventory-management/delete-product/delete-product.component';
import { SearchProductComponent } from './components/retailer-inventory-management/search-product/search-product.component';
import { ViewAddressComponent } from './components/address-management/view-address/view-address.component';
import { AddAddressComponent } from './components/address-management/add-address/add-address.component';
import { EditAddressComponent } from './components/address-management/edit-address/edit-address.component';
import { GrowthReportComponent } from './components/admin-report-management/growth-report/growth-report.component';
import { RevenueReportComponent } from './components/admin-report-management/revenue-report/revenue-report.component';
import { MonthlyComponent } from './components/admin-report-management/monthly/monthly.component';
import { QuaterlyComponent } from './components/admin-report-management/quaterly/quaterly.component';
import { YearlyComponent } from './components/admin-report-management/yearly/yearly.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ShoppingCartComponent },
  { path: "cart", component: CartComponent },
  { path: "orders", component: OrderComponent },
  { path: "orders/:orderId", component: OrderDetailsComponent },
  { path: 'loginsuccess', component: LoginSuccessComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wishlist', component: ViewWishlistComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'edit/:id', component: UpdateProductComponent },
  { path: 'addProductMaster', component: AddProductMasterComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'add-retailer-product', component: AddRetailerProductComponent },
  { path: 'delete-retailer-product', component: DeleteProductComponent },
  { path: 'search-retailer-product', component: SearchProductComponent },
  { path: 'viewall-retailer-product', component: RetailerProductListComponent },
  { path: 'address/view-address', component: ViewAddressComponent },
  { path: 'address/add-address', component: AddAddressComponent },
  { path: 'address/edit-address', component: EditAddressComponent },
  { path: 'growth-report', component: GrowthReportComponent },
  { path: 'revenue-report', component: RevenueReportComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'quaterly', component: QuaterlyComponent },
  { path: 'yearly', component: YearlyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
