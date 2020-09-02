import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymeComponent } from './payme/payme.component';

const routes: Routes = [
  { path: 'payme', component: PaymeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
