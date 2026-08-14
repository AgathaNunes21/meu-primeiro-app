  import { Component, signal } from '@angular/core';
  import { RouterOutlet, RouterLink } from '@angular/router';
  import { Header } from './shared/layout/header/header';
  import { usuarioLogado, login, logout } from './core/auth';
 @Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, Header],
    templateUrl: './app.html',
    styleUrl: './app.css',
  })
export class App {
  protected readonly title = signal('meu-primeiro-app');
  usuarioLogado = usuarioLogado;
    login = login;
    logout = logout;
}


