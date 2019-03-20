import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
