import {
  AfterViewInit,
  Component,
  ElementRef,
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
export class ModalComponent implements AfterViewInit {
  @Input() title = 'Heading';

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit(): void {
    this.modal.nativeElement.showModal();
  }

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
  }
}
