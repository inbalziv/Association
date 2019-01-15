import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermanentlyAdoptionComponent } from './components/permanently-adoption/permanently-adoption.component';
import { AdoptionOptionComponent } from './components/adoption-option/adoption-option.component';
import { AdoptionTemporaryComponent } from './components/adoption-temporary/adoption-temporary.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HttpModule } from '@angular/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {AnimalsService} from "./services/animals.service";

@NgModule({
  declarations: [
    AppComponent,
    SiteMapComponent,
    NavbarComponent,
    AboutComponent,
    JobsComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalPageComponent,
    NotFoundComponent,
    PermanentlyAdoptionComponent,
    AdoptionOptionComponent,
    AdoptionTemporaryComponent,
    ContactUsComponent
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
    MatGridListModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'animals',
        component: AnimalsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'animal-page/:id',
        component: AnimalPageComponent
      },
      {
        path: 'adoption',
        component: PermanentlyAdoptionComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
