import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomePage],
  imports: [HomePageRoutingModule, SharedModule]
})
export class HomePageModule {}
