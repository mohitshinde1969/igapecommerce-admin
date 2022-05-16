import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./authentication/page404/page404.component";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "admin",
        data: {
          role: localStorage.getItem("role"),
        },
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "business",
        data: {
          role: localStorage.getItem("role"),
        },
        loadChildren: () =>
          import("./employee/employee.module").then((m) => m.EmployeeModule),
      },
      {
        path: "vendor",
        data: {
          role: localStorage.getItem("role"),
        },
        loadChildren: () =>
          import("./client/client.module").then((m) => m.ClientModule),
      },
      {
        path: "extra-pages",
        loadChildren: () =>
          import("./extra-pages/extra-pages.module").then(
            (m) => m.ExtraPagesModule
          ),
      },
      {
        path: "multilevel",
        loadChildren: () =>
          import("./multilevel/multilevel.module").then(
            (m) => m.MultilevelModule
          ),
      },
    ],
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
