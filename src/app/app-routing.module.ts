import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpCurdComponent } from './emp-curd/emp-curd.component';

const routes: Routes = [
{path:'',component:EmpCurdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
