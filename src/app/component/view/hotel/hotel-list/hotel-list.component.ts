import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hoteis: Hotel[] = [];

  constructor(
    private service: HotelService
  ) { }

  ngOnInit(): void {
    console.log('passou aqui');
    this.service.findAll().subscribe(hoteis => {
      this.hoteis = hoteis;
      console.log(this.hoteis);
    })
  }

}
