import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';

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

export class ListCustomer implements AfterViewInit {
  NewCustomer: InCustomer[] = []
  API_CUSTOMER = "https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/customer"
  
  // Instancia para guardar la gráfica
  private chart: any;

  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(){
    this.loadList()
  }

  ngAfterViewInit() {
    // Inicializamos la gráfica al cargar la vista
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
          
          // Actualizamos la gráfica con los datos reales que llegan de la API
          this.actualizarGrafica();
        }
      })
  }

  actualizarGrafica() {
    // Contamos cuántos están activos (true) y cuántos inactivos (false)
    const activos = this.NewCustomer.filter(c => c.active === true).length;
    const inactivos = this.NewCustomer.filter(c => c.active === false).length;

    const canvas = document.getElementById('customerPieChart') as HTMLCanvasElement;
    if (!canvas) return;

    // Si ya existe una gráfica previa, la destruimos para evitar errores de superposición
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Activos', 'Inactivos'],
        datasets: [{
          data: [activos, inactivos],
          backgroundColor: ['#831843', '#fbcfe8'], // Tonos acorde a tu diseño rosado/rosa oscuro
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  eliminarCustomer(id:number){
      const headers = {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json'
      }

      this.http.delete(`${this.API_CUSTOMER}?customer_id=eq.${id}`,
        {headers}
      ).subscribe({
        next:(response)=>{
          this.cdr.detectChanges()
          this.loadList()
          alert(`Cliente con id ${id} elimnado correctamente`)
          console.log(response);
        }
      })
  }
}