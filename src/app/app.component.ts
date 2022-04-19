import { Component, OnInit } from '@angular/core';
import{ServiceService} from './service/service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
 imgn:any;
  clima:any;
  constructor(private service: ServiceService){
    
  }
  ngOnInit(){ 
    
   
}
obtClima(){
 
  console.log( "datos"+this.clima);
  this.service.getData().subscribe(
    res=>{this.clima=res,
      console.log(res)},
    err=>console.log(err))
  //  this.imgn=https://openweathermap.org/img/wn/${{this.clima.list[0].weather[0].icon}} @2x.png;
 


}
}

