import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { MainComponent }    from './main.component';

import { DashboardComponent }    from './dashboard.component';
import { VideoComponent }    from './matches/video.component';
import { VideoCreateComponent }    from './matches/video-create.component';
import { VideosListComponent } from './matches/videos-list.component';
import { UserDataService } from "./user-data.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MaterializeModule
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    VideoComponent,
    VideosListComponent,
    VideoCreateComponent,
  ],
  providers: [
    UserDataService,
  ]
})
export class MainModule {}
