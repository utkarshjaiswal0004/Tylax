import { WindowService } from './service/window/window.service';
import { FooterComponent } from './common/footer/footer.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/home/header/header.component';
import { WhoWeAreComponent } from './main/home/who-we-are/who-we-are.component';
import { OurProductComponent } from './main/home/our-product/our-product.component';
import { ApplicationComponent } from './main/home/application/application.component';
import { MediaGalleryAndDownloadComponent } from './main/home/media-gallery-and-download/media-gallery-and-download.component';
import { HowItWorksComponent } from './main/home/how-it-works/how-it-works.component';
import { HomeComponent } from './main/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoWeAreComponent,
    OurProductComponent,
    ApplicationComponent,
    MediaGalleryAndDownloadComponent,
    HowItWorksComponent,
    NavbarComponent,
    HomeComponent,
    FeedbackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
