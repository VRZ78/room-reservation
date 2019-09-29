import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Equipment} from "../../models/Equipment.model";
import {EquipmentsService} from "../../services/equipments.service";

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.scss']
})
export class ReservationSearchComponent implements OnInit {

  dateStart: { year: number, month: number, day: number };
  timeStart: { hour: number, minute: number };
  timeEnd: { hour: number, minute: number };
  numberOfPeople: Number;
  equipments: Equipment[];
  showInvalidDateMessage: boolean;
  @Output() onSearchButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit() {
  }

  searchRooms = () => {
    let toEmit = {
      dateStart: new Date(this.dateStart.year, this.dateStart.month - 1, this.dateStart.day, this.timeStart.hour, this.timeStart.minute),
      dateEnd: new Date(this.dateStart.year, this.dateStart.month - 1, this.dateStart.day, this.timeEnd.hour, this.timeEnd.minute),
      numberOfPeople: this.numberOfPeople,
      equipments: this.equipments
    }
    if (toEmit.dateEnd > toEmit.dateStart) {
      this.showInvalidDateMessage = false;
      this.onSearchButtonClicked.emit(toEmit);
    } else {
      this.showInvalidDateMessage = true;
    }

  }
};
