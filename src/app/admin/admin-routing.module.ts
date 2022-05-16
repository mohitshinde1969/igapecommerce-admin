import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component:DashboardComponent
  },
  {
    path: "vendors",
    loadChildren: () =>
      import("./vendor/vendor.module").then((m) => m.VendorModule),
  },
  {
    path: "businesses",
    loadChildren: () =>
      import("./business/business.module").then((m) => m.BusinessModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
