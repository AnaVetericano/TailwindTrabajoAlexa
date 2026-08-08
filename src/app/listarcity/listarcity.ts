import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface InCity{
    city_id: number,
    city: number,
    country_id: string,
    last_update: string
}


@Component({
  selector: 'app-listarcity',
  imports: [RouterLink, CommonModule],
  templateUrl: './listarcity.html',
  styleUrl: './listarcity.css',
})
export class Listarcity {
  
  NewCity: InCity[] = []
  API_CITY = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/city"
  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(){
    this.loadList()
  }

  loadList(){
      const headers = {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
      this.http.get<InCity[]>(this.API_CITY, {headers})
      .subscribe({
        next:(response)=>{
          this.NewCity = response
          this.cdr.detectChanges()
          console.log(response)
        }
      })
  }

  eliminarCity(id:number){
      const headers = {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }

      this.http.delete(`${this.API_CITY}?city_id=eq.${id}`,
        {headers}
      ).subscribe({
        next:(response)=>{
          this.cdr.detectChanges()
          this.loadList()
          alert(`Ciudad con id ${id} eliminado correctamente`)
          console.log(response);
        }
      })
  }
}
