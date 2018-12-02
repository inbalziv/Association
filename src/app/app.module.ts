import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalPageComponent } from './components/animal-page/animal-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule  } from '@angular/material';

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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,

    MatMenuModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
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
