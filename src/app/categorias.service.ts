import { Injectable } from '@angular/core';
import { Categoria } from './model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[] = [
    {id: 1, categoria: 'Romance', ativo: true, slug: 'romance'},
    {id: 2, categoria: 'Aventura', ativo: true, slug: 'aventura'},
    {id: 3, categoria: 'Infantil', ativo: true, slug: 'infantil'},
    {id: 4, categoria: 'Terror', ativo: false, slug: 'terror'}
  ];

  constructor() { }

  public getCategorias(): Categoria[] {
    return this.categorias.filter((item) => item.ativo === true);
  }

  public adicionaCategoria(itemCategoria: Categoria): void {
    itemCategoria.ativo = true;
    this.categorias.push(itemCategoria);
  }

  nextId(): number{
    let id: number;
    id = this.categorias.length + 1;
    return id;
  }
}
