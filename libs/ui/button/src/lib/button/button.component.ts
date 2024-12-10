import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Theme = 'blue' | 'violet';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Determina a variante do botão.
   */
  @Input() variant: Variant = 'primary';
  /**
   * Define se está desabilitado.
   */
  @Input() disabled = false;
  @Input() theme: Theme = 'blue';

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }
}
