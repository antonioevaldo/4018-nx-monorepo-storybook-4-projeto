import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
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
export class ModalComponent implements AfterViewChecked {
  @Input() modalTitle = '';
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  ngAfterViewChecked(): void {
    if (this.isOpen) {
      this.modal.nativeElement.showModal();
    } else {
      this.modal.nativeElement.close();
    }
  }

  closeModal() {
    this.closed.emit();
  }
}
