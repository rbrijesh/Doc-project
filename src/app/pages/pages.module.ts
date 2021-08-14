import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    SharedModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],
})
export class PagesModule {
}
