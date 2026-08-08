import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Country{
  country:string
}


@Component({
  selector: 'app-listarcountry',
  imports: [CommonModule, RouterLink],
  templateUrl: './listarcountry.html',
  styleUrl: './listarcountry.css',
})
export class Listarcountry {
  countrys:Country[]=[]
}
