import {Equipment} from "./Equipment.model";
import {DataToModelArrayService} from "../../utils/services/data-to-model-array.service";

export class Room {

  name : string;
  description : string;
  capacity : number;
  equipments : Equipment[];

  constructor(data) {

    this.name = data.name;
    this.description = data.description;
    this.capacity = data.capacity;
    this.equipments = DataToModelArrayService.getModelArrayFromData(data.equipements, Equipment);

  }

  /**
   * Build a user readable string of the equipments of the room
   */
  getEquipmentString = () : string => {
    let str = '';
    for(let i = 0; i < this.equipments.length; i++) {
      if(i !== 0) {
        str = str.concat(", ")
      }
      str = str.concat(this.equipments[i].name)
    }

    if(str === '') {
      return 'Aucun'
    }

    return str;
  }


}
