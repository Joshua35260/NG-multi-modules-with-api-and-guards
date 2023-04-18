import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { isAdminGuard } from './guards/isAdmin.guard';
import { isConnectedGuard } from './guards/is-connected.guard';
const routes: Routes = [
  { path: 'admin', component: AdminPageComponent, canActivate: [isAdminGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [isConnectedGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
