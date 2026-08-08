import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulariocity',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulariocity.html',
  styleUrl: './formulariocity.css',
})
export class Formulariocity {
  nuevoCity={
    city:'',
    country_id:0
  }
  constructor(private http:HttpClient){}
guardarcity(){
  this.http.post('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country',
    this.nuevoCity,
    {
      headers:{
        apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type':'application/json'
      }
    }).subscribe({
      next:(respuesta)=>{
        alert("City guardado correctamente"+respuesta)
      }
    }

    )
}
}







