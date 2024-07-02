import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { VoirplusComponent } from './voirplus/voirplus.component';

const routes: Routes = [
  { path: '', component: PageaccueilComponent },
  { path: 'voirplus', component: VoirplusComponent },
  { path:'', redirectTo: 'PageaccueilComponent', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
