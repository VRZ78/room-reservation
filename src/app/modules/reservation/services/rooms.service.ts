import {EventEmitter, Injectable} from "@angular/core";
import {Room} from "../models/Room.model";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../../../config/config.service";
import {Reservation} from "../models/Reservation.model";

@Injectable()

export class RoomsService {

  onRoomBooked = new EventEmitter<void>();
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

  constructor(private http: HttpClient, private configService : ConfigService) {

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
        this.checkAvailability(this.rooms[i], searchCriterias.dateStart, searchCriterias.dateEnd).catch((err) => {
          console.log(err);
        })
      }

      resolve()
    })
  }

  /**
   * Send a booking request to the server
   * @param room
   * @param datStart
   * @param dateEnd
   * @param numberOfPeople
   */
  bookRoom = (room : Room, datStart : Date, dateEnd : Date, numberOfPeople : Number) => {
    return new Promise(((resolve, reject) => {

      // Create reservation instance
      let reservation = new Reservation({room : room, dateStart : datStart, dateEnd : dateEnd, nbOfPeople : numberOfPeople});

      // Send reservation to API
      this.http.post(this.configService.uriRoot + '/reservations',reservation).toPromise().then((data : any) => {
        // Affect id returned by the API to the reservation
        if(data && data.id) {
          reservation.id = data.id;
        }
        // Hide room from list
        room.isAvailable = false;
        this.onRoomBooked.emit();
        resolve(reservation);
      }, (err) => {
        reject(err);
      })
    }))
  }

  checkAvailability = (room : Room, datStart : Date, dateEnd : Date) => {
    return new Promise(((resolve, reject) => {

      // Construct params string
      let paramString = "?dateStart=" + datStart.toISOString() + "&dateEnd=" + dateEnd.toISOString();

      // Send request to API
      this.http.get(this.configService.uriRoot + '/rooms/' + room.name + '/availability' + paramString).toPromise().then((data : any) => {
        if(data.available) {
          room.isAvailable = true;
        } else {
          room.isAvailable = false;
        }
        resolve()
      }, (err) => {
        reject(err);
      })
    }))

  }
}
