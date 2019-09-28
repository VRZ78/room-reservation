import { Component, OnInit } from '@angular/core';
import {RoomsService} from "../../services/rooms.service";
import {Room} from "../../models/Room.model";

@Component({
  selector: 'app-reservation-display-rooms',
  templateUrl: './reservation-display-rooms.component.html',
  styleUrls: ['./reservation-display-rooms.component.scss']
})
export class ReservationDisplayRoomsComponent implements OnInit {

  isLoadingRooms : boolean = true;
  isReservationLoading : boolean = false;
  searchCriterias : any;

  constructor(private roomsService : RoomsService) { }

  ngOnInit() {
  }
  
  refreshRooms = (searchCriterias) => {
    this.isLoadingRooms = true;
    this.searchCriterias = searchCriterias;
    this.roomsService.loadRooms(searchCriterias).then(() => {
      this.isLoadingRooms = false;
    })
  }

  bookRoom = (room : Room) => {
    this.isReservationLoading = true;
    this.roomsService.bookRoom(room, this.searchCriterias.dateStart, this.searchCriterias.dateEnd).then(() => {
      this.isReservationLoading = false;
    }, (err) => {
      this.isReservationLoading = false;
    })
  }

}
