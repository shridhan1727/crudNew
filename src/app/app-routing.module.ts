import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { MyDetailComponent } from './my-detail/my-detail.component';
import { GuardGuard } from './Guards/guard.guard';


const routes: Routes = [
  {path:'my-list',component:MyListComponent},
  {path:'my-detail',component:MyDetailComponent},
  {path:'',redirectTo:'my-list',pathMatch:'full'},
  {path:'edit-info/:id',component:MyDetailComponent,canDeactivate:[GuardGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
