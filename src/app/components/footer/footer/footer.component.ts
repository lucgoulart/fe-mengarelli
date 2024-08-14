import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  links = [
    { text: 'Home', url: '#' },
    { text: 'Empresa', url: '#' },
    { text: 'Tecnologia', url: '#' },
    { text: 'Produtos', url: '#' },
    { text: 'Serviços', url: '#' },
    { text: 'Cases', url: '#' },
    { text: 'Depoimentos', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'Contato', url: '#' }
  ];
}
