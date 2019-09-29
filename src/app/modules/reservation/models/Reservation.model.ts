import {Room} from "./Room.model";

export class Reservation {

  id : number;
  dateStart : Date;
  dateEnd : Date;
  room : Room;
  nbOfPeople : number;

  constructor(data) {
    this.id = data.id;
    this.dateStart = data.dateStart;
    this.dateEnd = data.dateEnd;
    this.room = data.room.constructor === Room ? data.room : new Room(data.room);
    this.nbOfPeople = data.nbOfPeople;
  }


}
