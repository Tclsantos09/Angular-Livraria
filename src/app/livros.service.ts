import { Injectable } from '@angular/core';
import { Livro } from './model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros: Livro[] = [
    {
      id: 1, 
      idCategoria: 2,
      titulo: 'Vidas secas', 
      autor: 'Graciliano Ramos'
    },
    {
      id: 2, 
      idCategoria: 2,
      titulo: 'Capitães da Areia', 
      autor: 'Jorge Amado'
    },
    {
      id: 3, 
      idCategoria: 3,
      titulo: 'O menino Espelho', 
      autor: 'Fernando Sabino'
    },
    {
      id: 4, 
      idCategoria: 1,
      titulo: 'Água para elefantes', 
      autor: 'Sara Gruen'
    },
  ];

  constructor() { }

  public getLivros(idCategoria: number): Livro[]{
    return this.livros.filter( (item) => item.idCategoria === idCategoria);
  }
}
