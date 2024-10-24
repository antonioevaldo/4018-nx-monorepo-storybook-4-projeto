import {
  Component,
  effect,
  ElementRef,
  input,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

@Component({
  selector: 'ab-modal',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() title = 'Heading';
  isOpen = input(false);

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.modal.nativeElement.showModal();
      } else {
        this.modal.nativeElement.close();
      }
    });
  }

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    // this.modal.nativeElement.close();
    // this.isOpen = false;
  }
}
