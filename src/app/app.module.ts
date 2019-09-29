import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {ConfigService} from "../config/config.service";
import {ReservationMainComponent} from "./modules/reservation/components/reservation-main/reservation-main.component";
import { ReservationSearchComponent } from './modules/reservation/components/reservation-search/reservation-search.component';
import {FormsModule} from "@angular/forms";
import { ReservationDisplayRoomsComponent } from './modules/reservation/components/reservation-display-rooms/reservation-display-rooms.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ReservationMainComponent,
    ReservationSearchComponent,
    ReservationDisplayRoomsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
