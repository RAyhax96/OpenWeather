import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from './service/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  array = [];
  clima: any;
  constructor(private service: ServiceService, private http: HttpClient) {

  }
  ngOnInit() {


  }

  obtClima() {

    //  datos de api generales
    this.service.getData().subscribe(
      res => {
        this.clima = res,

        console.log(res)
      },
      err => console.log(err))

    console.log("array ", this.array);


  }
  // preparar valores en vector
  async agregarDato(dato1: []) {
    this.service.agregar.push(dato1)
    console.log("array push", this.service.agregar);


  }
  aert() { window.alert("Agregado"); }
}

