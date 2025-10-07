import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'whatsapp';
  url = "https://wa.me/+5491130479419?text=pago&attachment=https://media.istockphoto.com/id/1927164716/es/vector/letras-a-mano-de-caligraf%C3%ADa-te-amo-en-coraz%C3%B3n-grunge-inscripci%C3%B3n-te-amo-en-espa%C3%B1ol-tarjeta.jpg?s=612x612&w=0&k=20&c=IERP6VJ1ea8UO3hvZvWkWWvnKdAud4QEtQYoavH9yG0=";


constructor(private router: Router){}


  enviar(){
    console.log("holaa");
    window.open(this.url, "_blank");
  }





}

