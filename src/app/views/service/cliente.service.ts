import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContaCliente } from 'src/app/models/ContaCliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiBack = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listarClientes(): Observable<ContaCliente[]> {
    return this.http.get<ContaCliente[]>(
      `${this.apiBack}/clientes/listar`
    );
  }
}
