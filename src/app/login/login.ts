import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  // Borramos 'styleUrl' y usamos 'styles' directamente
  styles: [`
    .login-screen { 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      padding: 40px 20px; 
      height: 100vh;
      box-sizing: border-box;
      background-color: white;
    }

    .brand-header { text-align: center; margin-bottom: 40px; }
    .brand-header h2 { color: #ff5a60; margin: 10px 0; font-family: sans-serif; }
    
    .form-body { width: 100%; }

    .form-group { 
      width: 100%; 
      margin-bottom: 25px; 
      display: flex;
      flex-direction: column; 
    }

    .form-group label { 
      color: #ff5a60; 
      font-size: 14px; 
      font-weight: bold; 
      margin-bottom: 8px;
    }

    .form-group input { 
      width: 100%; 
      border: none; 
      border-bottom: 2px solid #eee; 
      padding: 10px 0; 
      font-size: 16px;
      outline: none;
    }

    .btn-primary { 
      background-color: #ff5a60; 
      color: white; 
      width: 100%; 
      padding: 15px; 
      border-radius: 12px; 
      border: none; 
      font-weight: bold;
      margin-top: 20px; 
      cursor: pointer;
    }

    .btn-secondary { 
      background-color: #ff8e92; 
      color: white; 
      width: 100%; 
      padding: 15px; 
      border-radius: 12px; 
      border: none; 
      margin-top: 15px;
      font-weight: bold;
    }
  `]
})
export class Login {
  private router = inject(Router);

  entrar() {
    this.router.navigate(['/restaurantes']);
  }
}