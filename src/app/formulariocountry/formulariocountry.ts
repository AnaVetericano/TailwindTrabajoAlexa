import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulariocountry',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulariocountry.html',
  styleUrl: './formulariocountry.css',
})
export class Formulariocountry {
  nuevaCountry={
    country:''
  }
constructor(private http:HttpClient){}
guardarcountry(){
  this.http.post('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country',
    this.nuevaCountry,
    {
      headers:{
        apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type':'application/json'
      }
    }).subscribe({
      next:(respuesta)=>{
        alert("Country guardado correctamente"+respuesta)
      }
    }

    )
}
}
