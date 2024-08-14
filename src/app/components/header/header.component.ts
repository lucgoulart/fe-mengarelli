import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  buttons = [
    { label: 'HOME', link: '/home' },
    { label: 'EMPRESA', link: '/empresa' },
    { label: 'TECNOLOGIA', link: '/tecnologia' },
    { label: 'PRODUTOS', link: '/produtos' },
    { label: 'SERVIÇOS', link: '/servicos' },
    { label: 'CASES', link: '/cases' },
    { label: 'DEPOIMENTOS', link: '/depoimentos' },
    { label: 'JERTEX', link: '/jertex' },
    { label: 'JFISCAL', link: '/jfiscal' },
    { label: 'BLOG', link: '/blog' },
    { label: 'CONTATO', link: '/contato' }
  ];

  selectedButton: string | null = null;

  constructor(private router: Router) {}

  selectButton(button: { label: string, link: string }): void {
    this.selectedButton = button.label;
    this.router.navigate([button.link]);
  }
}
