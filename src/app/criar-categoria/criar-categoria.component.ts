import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.scss']
})
export class CriarCategoriaComponent implements OnInit {

  categoriaLivro: string;

  constructor(private categoria: CategoriasService) { }

  ngOnInit() {
  }

  adicionarCategoria(){
    console.log('Nome: ', this.categoriaLivro);
    this.categoria.adicionaCategoria({id: this.categoria.nextId(), categoria: this.categoriaLivro});
    this.categoriaLivro = "";
  }

}
