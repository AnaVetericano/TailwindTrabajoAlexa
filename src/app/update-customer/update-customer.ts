import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  imports: [FormsModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {
  id: number = 0
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
  }

  CustomerEdit ={
    store_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    address_id: 0,
    active: true
  }
  API_CUSTOMER = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer?customer_id=eq."
  constructor(private http: HttpClient, private route: ActivatedRoute){}

  UpdateCustomer(){
      const headers = {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }
      
      this.http.patch(this.API_CUSTOMER + this.id, this.CustomerEdit, {headers})
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
