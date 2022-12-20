import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { ViewCategoryComponent } from './component/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { CategorysideComponent } from './pages/user/categoryside/categoryside.component';
import { ViewProductsComponent } from './pages/user/view-products/view-products.component';
import { ViewWishlistComponent } from './pages/user/view-wishlist/view-wishlist.component';
import { AllproductsComponent } from './pages/user/allproducts/allproducts.component';
import { ProductCartsComponent } from './pages/user/product-carts/product-carts.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { FilterPipe } from './shared/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatMenuModule} from '@angular/material/menu';
import { AlluserComponent } from './pages/admin/alluser/alluser.component';
import { AdduserComponent } from './pages/admin/adduser/adduser.component';
import { UpdateuserComponent } from './pages/admin/updateuser/updateuser.component';
import { DeleteuserComponent } from './pages/admin/deleteuser/deleteuser.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateproductComponent } from './pages/admin/updateproduct/updateproduct.component';
import { MailcontentComponent } from './pages/admin/mailcontent/mailcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FileUploadComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    WelcomeComponent,
    UsersidebarComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    CategorysideComponent,
    ViewProductsComponent,
    ViewWishlistComponent,
    AllproductsComponent,
    ProductCartsComponent,
    AdminProductComponent,
    FilterPipe,
    AddProductComponent,
    AlluserComponent,
    AdduserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    UpdateproductComponent,
    MailcontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
