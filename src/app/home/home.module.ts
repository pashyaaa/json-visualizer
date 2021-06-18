import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JsonInputComponent } from './json-input/json-input.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    JsonInputComponent,
    VisualizerComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
