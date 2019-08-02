import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CriarCategoriaComponent } from './criar-categoria/criar-categoria.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  {path: 'categoria', component: CategoriaComponent},
  {path: '', redirectTo: 'categoria', pathMatch: 'full'},
  {path: 'criar-categoria', component: CriarCategoriaComponent},
  {path: 'livros/:id', component: LivrosComponent},
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
