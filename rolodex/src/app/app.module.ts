import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule  } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatRippleModule } from '@angular/material';
import 'hammerjs';
import { QueueComponent } from './queue/queue.component';
import { ProgressComponent } from './progress/progress.component';
import { DoneComponent } from './done/done.component';
import { NewformComponent } from './newform/newform.component';

import { BackendService } from './services/backend.service';

const appRoutes: Routes = [



];


@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    ProgressComponent,
    DoneComponent,
    NewformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule

  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
