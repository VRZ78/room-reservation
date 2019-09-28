import {Component, OnInit, ViewChild} from '@angular/core';
import {RoomsService} from "../../services/rooms.service";
import {EquipmentsService} from "../../services/equipments.service";
import {ReservationSearchComponent} from "../reservation-search/reservation-search.component";
import {ReservationDisplayRoomsComponent} from "../reservation-display-rooms/reservation-display-rooms.component";

@Component({
  selector: 'app-reservation-main',
  templateUrl: './reservation-main.component.html',
  styleUrls: ['./reservation-main.component.scss'],
  providers: [RoomsService, EquipmentsService]
})
export class ReservationMainComponent implements OnInit {

  @ViewChild(ReservationDisplayRoomsComponent, {static : false}) reservationDisplayRoomComponent : ReservationDisplayRoomsComponent

  constructor(private roomsService : RoomsService) { }

  ngOnInit() {

  }


}
