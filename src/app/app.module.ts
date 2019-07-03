import { WelcomeComponent } from "./welcome/welcome.component";
import { DrugSearchComponent } from "./drug-search/drug-search.component";
import { DrugLocationsService } from "./service/drug-locations.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DrugsService } from "./service/drugs.service";
import { RetailersService } from "./service/retailers.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatFormField, MatFormFieldControl, MatFormFieldModule, MatInputModule } from "@angular/material";
import { DashBoardComponent } from "./dashboard/dashboard.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DrugSearchComponent,
    DashBoardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [DrugLocationsService, DrugsService, RetailersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
