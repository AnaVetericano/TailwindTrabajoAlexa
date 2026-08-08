import { Routes } from '@angular/router';
import { Formulariocity } from './formulariocity/formulariocity';
import { Formulariocountry } from './formulariocountry/formulariocountry';
import { Listarcity } from './listarcity/listarcity';
import { Listarcountry } from './listarcountry/listarcountry';
import { Actualizarcity } from './actualizarcity/actualizarcity';
import { Actualizarcountry } from './actualizarcountry/actualizarcountry';
import { Formularioadress } from './formularioadress/formularioadress';
import { Listaradress } from './listaradress/listaradress';
import { Actualizaradress } from './actualizaradress/actualizaradress';
import { CreateCustomer } from './create-customer/create-customer';
import { ListCustomer } from './list-customer/list-customer';
import { UpdateCustomer } from './update-customer/update-customer';
 
export const routes: Routes = [
     {
        path:'',
        component: Formulariocity
    },
    {
        path:'formulariocity',
        component: Formulariocity
    },
    {
        path:'formulariocountry',
        component: Formulariocountry
    },
    {
        path:'listarcity',
        component: Listarcity
    },
    {
        path:'listarcountry',
        component: Listarcountry
    },
    {
        path:'actualizarcity/:id',
        component: Actualizarcity
    },
      {
        path:'actualizarcountry/:id',
        component: Actualizarcountry
    },
    {
        path:'formularioadress',
        component: Formularioadress
    },
    {
        path: 'listaradress',
        component: Listaradress
    },
    {
        path: 'actualizaradress/:id',
        component: Actualizaradress
    },
    {
        path: 'createcustomer',
        component: CreateCustomer
    },
    {
        path: "listarcustomer",
        component: ListCustomer
    },
    {
        path: "updatecustomer/:id",
        component: UpdateCustomer
    }

    












];
