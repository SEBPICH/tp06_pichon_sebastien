import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from './shared/models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp06_pichon_sebastien';
  login: string = '';
  password: string = '';

  lastname: string = '';
  firstname: string = '';
  cnx: boolean = false;
  loginError: boolean = false; 
  produits$: Observable<Array<Product>>;
  constructor(private apiService: ApiService) {
    this.produits$ = this.apiService.getCalague();
  }
  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe((c) => {
      this.lastname = c.lastname;
      this.firstname = c.firstname;
      this.cnx = true;
      this.loginError = false; 
      },
      (error) => {
        this.loginError = true; 
      }
    );
  }
}
