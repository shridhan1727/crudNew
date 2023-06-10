import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyDetailComponent } from './my-detail/my-detail.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from './interceptor/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
