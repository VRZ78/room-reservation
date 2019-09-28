import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Equipment} from "../../models/Equipment.model";
import {EquipmentsService} from "../../services/equipments.service";

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.scss']
})
export class ReservationSearchComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;
  capacity: Number;
  equipments: Equipment[];
  @Output() onSearchButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit() {
  }

  searchRooms = () => {
    this.onSearchButtonClicked.emit({
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      capacity: this.capacity,
      equipments: this.equipments
    });
  }

}
