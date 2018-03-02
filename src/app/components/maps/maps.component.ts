import { Component, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { JcdecauxService } from '../../service/jcdecaux.service';
import { Station } from '../../models/station';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public stations: Station[];
  public stationCities: Station[];
  public cities = [];

  constructor(private jcd: JcdecauxService) { }

  ngOnInit() {
    this.jcd.getStations().subscribe(res => {
      // init station
      this.stations = res.filter(c => c.contract_name === 'Marseille');
      this.centerPosition(this.stations);

      // current station
      this.stationCities = res;

      // create select with cities
      this.cities = Array.from(new Set(res.map(c => c.contract_name)));
    });
  }

  selectCity(city) {

    this.stations = this.stationCities.filter(c => c.contract_name === city);
    this.centerPosition(this.stations);
  }

  centerPosition(station: Station[]) {
    this.zoom = 12;
    this.latitude = station[0].position['lat'];
    this.longitude = station[0].position['lng'];
  }
}
