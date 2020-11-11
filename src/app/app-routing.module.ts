import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubexcavationComponent } from './subexcavation/create-subexcavation/create-subexcavation.component';
import { ListSubexcavationComponent } from './subexcavation/list-subexcavation/list-subexcavation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'view-subexcavation/:id', component: ListSubexcavationComponent},
  { path: 'list-subexcavations', component: ListSubexcavationComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subexcavation', component: CreateSubexcavationComponent,canActivate: [AuthGuard]},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
