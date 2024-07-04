import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VoirplusComponent } from './voirplus/voirplus.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
  { path: 'voirplus', component: VoirplusComponent },
  { path:'', redirectTo: 'PageaccueilComponent', pathMatch:'full'}
];
