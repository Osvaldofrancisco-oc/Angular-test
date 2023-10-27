import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { SectionFotoComponent } from './components/section-foto/section-foto.component';
import { MyPhotoComponent } from './components/my-photo/my-photo.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    SidebarComponent,
    FooterComponent,
    FilterComponent,
    SectionFotoComponent,
    MyPhotoComponent,
  ],
  imports: [
    BrowserModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
