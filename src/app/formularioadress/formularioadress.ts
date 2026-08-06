import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularioadress',
  imports: [CommonModule, FormsModule],
  templateUrl: './formularioadress.html',
  styleUrl: './formularioadress.css',
})
export class Formularioadress {
  nuevaAdress = {
  address: '',
  district: '',
  city_id: 0
};

  constructor(private http: HttpClient) {}

  agregarAdress() {
    this.http.post('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address', 
    this.nuevaAdress,
    {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (respuesta) => {
        alert('Dirección agregada correctamente');
      }
    })
  }
}
