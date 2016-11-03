import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard.component';
import { VideoComponent } from './matches/video.component';
import { VideosListComponent } from './matches/videos-list.component';

const routes: Routes = [
  {
      
      path: 'app',
      component: MainComponent,
      children: [
        {
            path: '',
            component: DashboardComponent,
            
        },
        {
          path: 'videos',
          children: [
            {
              path: '',
              component: VideosListComponent
            },
            {
              path: ':id',
              component: VideoComponent
            }
          ]
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }

export const routedComponents = [MainComponent];