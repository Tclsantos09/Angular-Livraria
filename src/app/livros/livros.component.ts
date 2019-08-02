import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  constructor(private livros: LivrosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id_categoria = this.route.snapshot.params['id'];
  }

  public leiaDosLivros(){
    let id_categoria = this.route.snapshot.params['id'];
    // com o + a string vira number
    return this.livros.getLivros(+id_categoria);
  }

}
