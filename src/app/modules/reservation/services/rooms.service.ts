import {Injectable} from "@angular/core";
import {Room} from "../models/Room.model";

@Injectable()

export class RoomsService {

    rawRooms : {}[] = [
      {
        "name":"Salle Google",
        "description":"Salle Google",
        "capacity":5,
        "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
          ],
        "createdAt":"2016-12-07T12:39:29.812Z",
        "updatedAt":"2016-12-08T17:31:39.489Z"
      },
      {
        "name":"Salle Apple",
        "description":"Salle Apple",
        "capacity":10,
        "equipements":[
          {
            "name":"Retro Projecteur"
          }
          ],
        "createdAt":"2016-12-07T12:39:55.384Z",
        "updatedAt":"2016-12-07T13:33:37.184Z"
      },
      {
        "name":"Salle Facebook",
        "description":"Salle Facebook",
        "capacity":11,
        "equipements":[],
        "createdAt":"2016-12-07T14:15:55.733Z",
        "updatedAt":"2016-12-09T16:45:19.025Z"
      },
      {
        "name":"Salle Amazon",
        "description":"Salle Amazon",
        "capacity":10,
        "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
          ],
        "createdAt":"2016-12-09T16:45:34.419Z",
        "updatedAt":"2016-12-09T16:45:34.419Z"
      },
      {
        "name":"Salle Baidu",
        "description":"Salle Baidu",
        "capacity":26,
        "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
          ],
        "createdAt":"2016-12-09T16:45:49.096Z",
        "updatedAt":"2016-12-09T16:45:49.096Z"
      },
      {
        "name":"Salle Tencent",
        "description":"Salle Tencent",
        "capacity":8,
        "equipements":[
          {
            "name":"TV"
          }
          ],
        "createdAt":"2016-12-07T12:39:55.384Z",
        "updatedAt":"2016-12-07T13:33:37.184Z"
      }
      ]

  rooms : Room[] = [];

  constructor() {

  }

  /**
   * Get all rooms from API
   */
  loadRooms = (searchCriterias : any) => {
    return new Promise((resolve) => {

      // Empty current rooms
      this.rooms = [];

      for(let i = 0; i < this.rawRooms.length; i++) {
        this.rooms.push(new Room(this.rawRooms[i]))
      }

      resolve()
    })
  }

  /**
   * Send a booking request to the server
   * @param room
   * @param start
   * @param end
   */
  bookRoom = (room : Room, start : Date, end : Date) => {
    return new Promise(((resolve, reject) => {

    }))
  }

}
