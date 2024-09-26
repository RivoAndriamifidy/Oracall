import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Fermer le menu si on clique en dehors
  @HostListener('document:click', ['$event'])
  closeOnClickOutside(event: Event) {
    const clickedInsideMenu = (event.target as HTMLElement).closest('.navbar-collapse');
    const clickedToggler = (event.target as HTMLElement).closest('.navbar-toggler');
    if (!clickedInsideMenu && !clickedToggler) {
      this.closeMenu();
    }
  }
}
