import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ViewUserPage } from './view-user.page';

const routes: Routes = [
  {
    path: '',
    component: ViewUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUserPageRoutingModule {}
