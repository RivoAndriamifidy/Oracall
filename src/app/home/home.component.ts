import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrigé: 'styleUrl' devient 'styleUrls'
})
export class HomeComponent {

  constructor () {}

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const textElement1 = document.getElementById('welcome-text-1');
    const textElement2 = document.getElementById('welcome-text-2');
    const textContent1 = 'Votre allié '; // Premier texte
    const textContent2 = 'en externalisation'; // Deuxième texte
    let index1 = 0;
    let index2 = 0;

    // Effet de saisie pour le premier texte
    const typingInterval1 = setInterval(() => {
      if (index1 < textContent1.length) {
        textElement1!.textContent += textContent1.charAt(index1);
        index1++;
      } else {
        clearInterval(typingInterval1); // Arrêter l'animation une fois terminé
        textElement1!.style.borderRight = 'none'; // Retirer le curseur clignotant
        setTimeout(() => this.startTypingEffect2(textElement2, textContent2), 500); // Démarrer le second texte après une petite pause
      }
    }, 100); // Délai de 100ms entre chaque lettre
  }

  startTypingEffect2(element: HTMLElement | null, text: string) {
    let index = 0;
    const typingInterval2 = setInterval(() => {
      if (index < text.length) {
        element!.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval2); // Arrêter l'animation une fois terminé
        element!.style.borderRight = 'none'; // Retirer le curseur clignotant
      }
    }, 100);
  }
}
