import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const textElement = document.getElementById('welcome-text');
    const textContent = 'ORACALL, votre partenaire stratégique en externalisation de services'; // Le texte à écrire
    let index = 0;

    // S'assurer que le texte commence vide
    textElement!.textContent = ''; 

    const typingInterval = setInterval(() => {
      if (index < textContent.length) {
        // Ajoute chaque caractère progressivement
        textElement!.textContent += textContent.charAt(index);
        index++;
      } else {
        // Une fois l'animation terminée, retirer le curseur clignotant
        textElement!.style.borderRight = 'none'; 
        clearInterval(typingInterval); // Arrête l'animation
      }
    }, 100); // Délai entre chaque lettre (100ms)
  }
}
