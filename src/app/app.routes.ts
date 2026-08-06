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
 
export const routes: Routes = [
    {
        path:'',
        component: Formulariocity
    },
    {
        path:'',
        component: Formulariocountry
    },
    {
        path:'',
        component: Listarcity
    },
    {
        path:'',
        component: Listarcountry
    },
    {
        path:'',
        component: Actualizarcity
    },
      {
        path:'',
        component: Actualizarcountry
    },
    {
        path:'',
        component: Formularioadress
    },
    {
        path: '',
        component: Listaradress
    },
    {
        path: '',
        component: Actualizaradress
    }

    












];
