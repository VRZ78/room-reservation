import {Equipment} from "./Equipment.model";
import {DataToModelArrayService} from "../../utils/services/data-to-model-array.service";

export class Room {

  name : string;
  description : string;
  capacity : number;
  equipments : Equipment[];
  isAvailable : boolean;

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

  /**
   * Check if the room check the search criterias
   * @param searchCriterias
   */
  matchCriterias = (searchCriterias) => {

    // Capacity
    if(this.capacity < searchCriterias.numberOfPeople) {
      return false;
    }

    // Equipments
    if(searchCriterias.equipments) {
      let matchEquipments : number = 0;
      for(let i = 0; i < searchCriterias.equipments.length; i++) {
        for(let j = 0; j < this.equipments.length; j++) {
          if(searchCriterias.equipments[i] === this.equipments[j].name) {
            matchEquipments++;
            break;
          }
        }
      }
      if(matchEquipments !== searchCriterias.equipments.length) {
        return false;
      }
    }

    return true;
  }


}
