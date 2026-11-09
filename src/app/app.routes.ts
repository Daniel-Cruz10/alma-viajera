import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Destinos } from './pages/destinos/destinos';
import { Quinceaneras } from './pages/quinceaneras/quinceaneras';
import { Solteros } from './pages/solteros/solteros';

export const routes: Routes = [

  {
    path: '',
    component: Inicio,
    pathMatch: 'full'
  },

  {
    path: 'quienes-somos',
    component: QuienesSomos
  },

  {
    path: 'destinos',
    component: Destinos
  },

  {
    path: 'quinceaneras',
    component: Quinceaneras
  },

  {
    path: 'solteros',
    component: Solteros
  },

  {
    path: '**',
    redirectTo: ''
  }

];