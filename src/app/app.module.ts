import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CriarCategoriaComponent } from './criar-categoria/criar-categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { LivrosComponent } from './livros/livros.component';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CriarCategoriaComponent,
    NotfoundComponent,
    HeaderComponent,
    LivrosComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
