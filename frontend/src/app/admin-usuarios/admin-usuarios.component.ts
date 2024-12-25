import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.http.get<any>('http://24.199.65.57:3000/usuariosTotales').subscribe(
      (data: any) => {
        this.usuarios = data.usuarios;
      },
      error => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}