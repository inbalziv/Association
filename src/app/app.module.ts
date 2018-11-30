import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalPageComponent } from './components/animal-page/animal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteMapComponent,
    NavbarComponent,
    AboutComponent,
    JobsComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'animals', component: AnimalsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'animal-page/:id', component: AnimalPageComponent },

    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
