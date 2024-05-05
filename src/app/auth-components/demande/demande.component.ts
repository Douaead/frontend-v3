import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrl: './demande.component.css'
})
export class DemandeComponent {
  constructor (private  ButtonModule: MatButtonModule){}

}
