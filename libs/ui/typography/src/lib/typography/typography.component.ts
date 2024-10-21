import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[abContainerContent]',
  standalone: true,
})
export class ContainerContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

type Text =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'normal';

type Size =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';

@Component({
  selector: 'ab-inner-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class InnerTypographyComponent {
  @Input() type!: Text;
  @Input() size!: Size;

  @ContentChild(ContainerContentDirective) content!: ContainerContentDirective;

  getClasses(): string {
    return `typography ${this.size}`;
  }
}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule, InnerTypographyComponent, ContainerContentDirective],
  template: `
    <ab-inner-typography [type]="type" [size]="size">
      <ng-template abContainerContent>
        <ng-content></ng-content>
      </ng-template>
    </ab-inner-typography>
  `,
})
export class TypographyComponent {
  @Input() type: Text = 'normal';
  @Input() size!: Size;
}
