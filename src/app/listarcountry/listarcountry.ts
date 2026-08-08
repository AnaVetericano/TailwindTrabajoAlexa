import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Country{
  country_id:number;
  country:string;
  last_update:string
}


@Component({
  selector: 'app-listarcountry',
  imports: [CommonModule, RouterLink],
  templateUrl: './listarcountry.html',
  styleUrl: './listarcountry.css',
})
export class Listarcountry {
  countrys:Country[]=[]
constructor(private http:HttpClient,
            private cdr:ChangeDetectorRef, private router:Router){}
ngOnInit(){
  this.traerCountrys()
}

traerCountrys(){
  this.http.get<Country[]>(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country`,
        {
      headers:{
        apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type':'application/json'
      }
    }).subscribe({
      next:(respuesta)=>{
        console.log(respuesta)
        this.countrys=respuesta
        this.cdr.detectChanges();
      }
    })
}   eliminarr(id:number){
  this.http.delete('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country?id=eq.'+id,
        {
      headers:{
        apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type':'application/json'
      }
    }).subscribe({
      next:(respuesta)=>{
        alert("Pais eliminado"+respuesta+ "id"+id)
        this.cdr.detectChanges();
        this.traerCountrys();
      }
    } )
}
      llevarActualizar(id:number){
        this.router.navigate(['/actualizarcountry',id])
      }}
