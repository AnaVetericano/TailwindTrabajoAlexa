import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizarcity',
  imports: [FormsModule],
  templateUrl: './actualizarcity.html',
  styleUrl: './actualizarcity.css',
})
export class Actualizarcity {
  id: number = 0
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
  }

  CityEdit ={
    city: "",
    country_id: 0
  }
  API_CITY = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city?city_id=eq."
  constructor(private http: HttpClient, private route: ActivatedRoute){}

  UpdateCity(){
      const headers = {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
      
      this.http.patch(this.API_CITY + this.id, this.CityEdit, {headers})
      .subscribe({
        next:(response)=>{
          alert(`actualización hecha satisfactoriamente` + response)
        },
        error:(err)=>{
          alert('¡¡ERROR DEL SERVIDOR!!')
          console.log(err);
          
        }
      })
  }
}
