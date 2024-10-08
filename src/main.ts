import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { RunAppComponent } from './app/run-app/run-app.component';
import { AdminComponent } from './app/admin/admin.component';


bootstrapApplication(RunAppComponent, appConfig)
  .catch((err) => console.error(err));
