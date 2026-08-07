import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Adress {
  address_id: number;
  address: string;
  district: string;
  city_id: number;
}
@Component({
  selector: 'app-listaradress',
  imports: [CommonModule, RouterLink],
  templateUrl: './listaradress.html',
  styleUrl: './listaradress.css',
})
export class Listaradress {
  adress: Adress[] = []
  constructor(private http: HttpClient, 
    private router: Router, 
    private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.traerAdress()
  }
  traerAdress() {
    this.http.get<Adress[]>('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address', {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
  })
  .subscribe({
      next:(response)=>{
        console.log(response)
        this.adress=response
        this.cdr.detectChanges();
      }
    })
  }

  eeliminar(id: number){
    
    this.http.delete('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/address?id=eq. '+ id, 
    {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    }
    ).subscribe({
      next:(respuesta)=>{
        alert("registro eliminado"+respuesta+ "id"+id)
        this.traerAdress()
        this.cdr.detectChanges();
      }
    })
  }
  llevarACtualizar(id:number){
    this.router.navigate(['/Actualizaradress',id])
  }
}
