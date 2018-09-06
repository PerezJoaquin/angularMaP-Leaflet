import { Component, OnInit } from '@angular/core';
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  title = 'app';
  //mymap = L.map('mapid').setView([51.505, -0.09], 13);
}*/
export class AppComponent implements OnInit {
  
      constructor() {
  
      }
  
      ngOnInit() {
          const map = L.map('map').setView([51.505, -0.09], 13);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
  
          /*L.Routing.control({
              waypoints: [
                  L.latLng(57.74, 11.94),
                  L.latLng(57.6792, 11.949)
              ]
          }).addTo(map);*/

          function onLocationFound(e) {
            var radius = e.accuracy / 2;
    
            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();
    
            L.circle(e.latlng, radius).addTo(map);
        }
    
        function onLocationError(e) {
            alert(e.message);
        }
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
        //POSICION DEL USUARIO
        map.locate({setView: true, maxZoom: 16});
      }
  
  }