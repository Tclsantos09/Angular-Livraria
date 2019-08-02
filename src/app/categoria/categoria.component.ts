import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  
  constructor(private categorias: CategoriasService) { }

  ngOnInit() {
  }
  
  public leiaDaCategoria(){
    return this.categorias.getCategorias();
  }

}
