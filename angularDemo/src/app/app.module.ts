import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input handling
import { RouterModule } from '@angular/router'; // for routing
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http'; // for http

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

// Services
import { UsersService } from './services/users.service';
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    CommunicationComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'communication', component: CommunicationComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
      ],
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
