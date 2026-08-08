import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actualizarcountry',
  imports: [FormsModule],
  templateUrl: './actualizarcountry.html',
  styleUrl: './actualizarcountry.css',
})
export class Actualizarcountry {
  id:number=0
  ngOnInit(){
  this.id=this.route.snapshot.params['id']
  }
  country = {
  country: '',
  
};
  constructor( private http:HttpClient,
  private router:Router,
  private route:ActivatedRoute
  ){}  
  
  actualizarCountry(){
    this.http.patch('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/country?country_id=eq.'+this.id, 
    this.country,
    {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
    }
    ).subscribe({
      next: (respuesta) => {
        alert('Pais actualizado correctamente');
        this.router.navigate(['/listarcountrry']);
        console.log(respuesta);
        
      },
      error: (err)=>{
        console.log(err);
        alert("error del servidor")
        
      }
    })
  }
}



