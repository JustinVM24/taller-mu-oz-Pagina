import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscar-placa',
    pathMatch: 'full',
  },
  {
    path: 'buscar-placa',
    loadComponent: () =>
      import('./pages/buscar-placa/buscar-placa.page').then(
        (m) => m.BuscarPlacaPage
      ),
  },
  {
    path: 'vehiculo/:id',
    loadComponent: () =>
      import('./pages/vehiculo/vehiculo.page').then(
        (m) => m.VehiculoPage
      ),
  },
  {
    path: 'nuevo-servicio/:id',
    loadComponent: () =>
      import('./pages/nuevo-servicio/nuevo-servicio.page').then(
        (m) => m.NuevoServicioPage
      ),
  },
  
  {
    path: 'historial',
    loadComponent: () =>
      import('./pages/historial/historial.page').then(
        (m) => m.HistorialPage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(
        (m) => m.LoginPage
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.page').then(
        (m) => m.AdminPage
      ),
  },
  {
  path: 'nuevo-vehiculo',
  loadComponent: () =>
    import('./pages/nuevo-vehiculo/nuevo-vehiculo.page').then(
      (m) => m.NuevoVehiculoPage
    ),
},
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(
        (m) => m.HomePage
      ),
  },
];