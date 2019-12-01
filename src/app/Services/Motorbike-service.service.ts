import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motorbike } from '../motorbike.model';

@Injectable({
  providedIn: 'root'
})
export class MotorbikeServiceService {

  constructor(private http: HttpClient) { }

  GetMotorbikeInformation(): Observable<any> {
    return this.http.get('http://localhost:4000/api/motorbikes');
  }

  AddMotorbikeInformation(model: string, year: string, price: string, description: string): Observable<any> {
    const motorbike: Motorbike = { model: model, year: year, price: price, description: description, };
    return this.http.post('http://localhost:4000/api/motorbikes', motorbike)
  }

  DeleteMotorbike(id: String): Observable<any> {
    return this.http.delete('http://localhost:4000/api/motorbikes/' + id);
  }

  GetMotorbike(id: String): Observable<any> {
    return this.http.get('http://localhost:4000/api/motorbikes/' + id);
  }

  UpdateMotorbike(
    _id: string, 
    model: string, 
    year: string, 
    price: string,
    description: string,
  ): Observable<any> {
    const motorbike: Motorbike = { model: model, year: year, price: price, description: description, };
    console.log("Edit" + _id);
    return this.http.put('http://localhost:4000/api/motorbikes/' + _id, motorbike);
  }



}
