import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { AccessoriesListComponent } from './app/accessories-home/accessories-list/accessories-list.component';
import { AccessoriesPageComponent } from './app/accessories-home/accessories-page/accessories-page.component';


bootstrapApplication(AccessoriesPageComponent, appConfig)
  .catch((err) => console.error(err));
