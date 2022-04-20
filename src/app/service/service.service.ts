import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// https://api.openweathermap.org/data/2.5/forecast?lat=19.42847&lon=-99.12766&appid=ec8a8901f4cb1e20eb57c1e124eeadff
export class ServiceService {
  public agregar: Array<any>;
  // consulta de api
  Key = `ec8a8901f4cb1e20eb57c1e124eeadff`; //llave de API
  URL: string = "";
  constructor(private http: HttpClient) {
    this.agregar = [];
    this.URL = `https://api.openweathermap.org/data/2.5/forecast?lat=19.42847&lon=-99.12766&appid=${this.Key}&units=metric`

  }
  getData() {
    return this.http.get(`${this.URL}`)
  }




}
