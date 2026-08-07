import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulariocity',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulariocity.html',
  styleUrl: './formulariocity.css',
})
export class Formulariocity {
  nuevoCity={
    city:''
  }
  constructor(private http:HttpClient){}
  guardarcity(){
    this
  }











apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type':'application/json'

        }