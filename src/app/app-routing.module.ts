import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { ViewCategoryComponent } from './component/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AdduserComponent } from './pages/admin/adduser/adduser.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AlluserComponent } from './pages/admin/alluser/alluser.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MailcontentComponent } from './pages/admin/mailcontent/mailcontent.component';
import { UpdateproductComponent } from './pages/admin/updateproduct/updateproduct.component';
import { UpdateuserComponent } from './pages/admin/updateuser/updateuser.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AllproductsComponent } from './pages/user/allproducts/allproducts.component';
import { CategorysideComponent } from './pages/user/categoryside/categoryside.component';
import { ProductCartsComponent } from './pages/user/product-carts/product-carts.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ViewProductsComponent } from './pages/user/view-products/view-products.component';
import { ViewWishlistComponent } from './pages/user/view-wishlist/view-wishlist.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: "full",
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [{
      path: '',
      component: WelcomeComponent,
    },
    {
      path:'sendmail',
      component: MailcontentComponent
    },
    {
      path:'updateproduct/:pid',
      component:UpdateproductComponent
    },
    {
      path:'file',
      component: FileUploadComponent,
    },
    {
      path: 'category',
      component: ViewCategoryComponent
    },
    {
    path: 'add-category',
    component: AddCategoryComponent
    },
    {
      path: 'addProduct',
      component: AddProductComponent
    },
    {
      path: 'Product',
      component: AdminProductComponent
    },
    {
      path: 'alluser',
      component: AlluserComponent
    },
    {
      path: 'adduser',
      component: AdduserComponent
    },
    {
      path: 'update/:id',
      component: UpdateuserComponent
    }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [{
      path: 'category',
      component: CategorysideComponent
    },
    {
      path: 'view-product/:id/:categoryName',
      component: ViewProductsComponent
    },
    {
      path: 'view-wishlist',
      component: ViewWishlistComponent
    },
    {
      path: 'allproducts',
      component: AllproductsComponent
    },
    {
      path: 'cart',
      component: ProductCartsComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
