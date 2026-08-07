import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface InCustomer{
    customer_id: number,
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    address_id: number,
    active: boolean
}

@Component({
  selector: 'app-list-customer',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list-customer.html',
  styleUrl: './list-customer.css',
})

export class ListCustomer {
  NewCustomer: InCustomer[] = []
  API_CUSTOMER = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer"
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
      this.http.get<InCustomer[]>(this.API_CUSTOMER, {headers})
      .subscribe({
        next:(response)=>{
          this.NewCustomer = response
          this.cdr.detectChanges()
          console.log(response)
        }
      })
  }
}