import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DijkastraVisualComponent } from './dijkastra-visual/dijkastra-visual.component';
import { BfsVisualComponent } from './bfs-visual/bfs-visual.component';


@NgModule({
  declarations: [
    AppComponent,
    DijkastraVisualComponent,
    BfsVisualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
