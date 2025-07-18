import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BgSelectComponent } from './bg-select/bg-select.component';
import { BgConfigComponent } from './bg-config/bg-config.component';
import { BgEditComponent } from './bg-edit/bg-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/bg-select', pathMatch: 'full' },
  { path: 'bg-select', component: BgSelectComponent },
  { path: 'bg-edit', component: BgEditComponent },
  { path: 'bg-config/:id', component: BgConfigComponent },
  { path: '**', redirectTo: '/baugruppen' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
