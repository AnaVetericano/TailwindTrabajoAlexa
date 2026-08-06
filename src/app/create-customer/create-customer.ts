import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css',
})
export class CreateCustomer {
  newClient = {
    store_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    address_id: 0,
    active: true
  }
  
  constructor(private http: HttpClient){}
  API_CUSTOMER = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer"

  saveCustomer(){
    const headers = {
      apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      Authorization: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      'Content-Type': 'application/json'
    }

    this.http.post(this.API_CUSTOMER, this.newClient, {headers}).subscribe({
      next:(response)=>{
        alert('cliente registrado correctamente' + response)
      },
      error:(err)=>{
        alert('Error en el servidor' + err)
      }
    })
  }
}
