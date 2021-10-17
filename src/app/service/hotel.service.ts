import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  urlBase: string = "http://localhost:8080/hoteis/";
  constructor(
    private http: HttpClient
  ) { }

  //Create
  //create(hotel: Hotel) : Observable<Hotel>{
    //return this.http.post<Hotel>(this.urlBase, hotel)
  //}

  //Read
    //findAll
    findAll() : Observable<Hotel[]>{
      return this.http.get<Hotel[]>(this.urlBase);
    }
    //findById

  //Update

  //Delete
}
