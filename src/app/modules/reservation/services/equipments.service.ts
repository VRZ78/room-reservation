import {Equipment} from "../models/Equipment.model";

export class EquipmentsService {

  equipments : Equipment[] = [new Equipment({name : 'TV'}), new Equipment({name : 'Retro Projecteur'})];

  constructor() {

  }

}
