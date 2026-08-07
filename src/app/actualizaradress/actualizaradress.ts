import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actualizaradress',
  imports: [FormsModule],
  templateUrl: './actualizaradress.html',
  styleUrl: './actualizaradress.css',
})
export class Actualizaradress {
  id:number=0
  adress = {
  address: '',
  district: '',
  city_id: 0
  };
  constructor( private http:HttpClient,
  private router:Router,
  private route:ActivatedRoute
  ){}
  ngOnInit(){
  this.id=this.route.snapshot.params['id']
  }
  actualizarAdress(){
    this.http.put('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address?id=eq.'+this.id, 
    this.adress,
    {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }
    ).subscribe({
      next: (respuesta) => {
        alert('Dirección actualizada correctamente');
        this.router.navigate(['/listaradress']);
      }
    })
  }
}
