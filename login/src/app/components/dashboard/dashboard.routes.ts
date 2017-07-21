import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { TareaComponent } from './tarea/tarea.component';
import { ContactoFormComponent } from './contacto/contacto-form.component';
import { TareaFormComponent } from './tarea/tarea-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form.component';


export const dashboard_routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'contacto/:idContacto', component: ContactoFormComponent },
  { path: 'categoria/:idCategoria', component: CategoriaFormComponent },
  { path: 'tarea/:idTarea', component: TareaFormComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];
