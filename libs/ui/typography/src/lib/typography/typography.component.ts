import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

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

type ComponentsMap = {
  [key in Text]:
    | typeof H1Component
    | typeof H2Component
    | typeof H3Component
    | typeof H4Component
    | typeof H5Component
    | typeof SpanComponent;
};

type DynamicComponent = ComponentsMap[keyof ComponentsMap];

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h1 class="typography {{ this.size }}">
      <ng-content />
    </h1>
  `,
})
class H1Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h2 class="typography {{ this.size }}">
      <ng-content />
    </h2>
  `,
})
class H2Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h3 class="typography {{ this.size }}">
      <ng-content />
    </h3>
  `,
})
class H3Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h4 class="typography {{ this.size }}">
      <ng-content />
    </h4>
  `,
})
class H4Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <h5 class="typography {{ this.size }}">
      <ng-content />
    </h5>
  `,
})
class H5Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  styleUrl: './typography.component.css',
  template: `
    <span class="typography {{ this.size }}">
      <ng-content />
    </span>
  `,
})
class SpanComponent {
  @Input() size!: Size;
}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnInit {
  @Input() type: Text = 'normal';
  @Input() size!: Size;

  @ViewChild('template', { static: true })
  template!: TemplateRef<unknown>;

  Component!: DynamicComponent;

  dynamicComponentContent!: any[][];

  get inputs() {
    return { size: this.size };
  }

  private componentsMap = {
    title1: H1Component,
    title2: H2Component,
    title3: H3Component,
    subtitle1: H4Component,
    subtitle2: H5Component,
    normal: SpanComponent,
  } satisfies ComponentsMap;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.Component = this.componentsMap[this.type];

    this.dynamicComponentContent = [
      this.viewContainerRef.createEmbeddedView(this.template).rootNodes,
    ];
  }
}
