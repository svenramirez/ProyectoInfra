import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-vehiculos',
  templateUrl: './admin-vehiculos.component.html',
  styleUrl: './admin-vehiculos.component.css'
})
export class AdminVehiculosComponent implements OnInit {
  vehiculos: any[] = [];
  


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void {
    this.http.get<any[]>('http://24.199.65.57:3000/userVehicles').subscribe(
      (data: any) => {
        this.vehiculos = data.vehicles;
      },
      error => {
        console.error('Error al obtener los vehículos:', error);
      }
    );
  }

}
