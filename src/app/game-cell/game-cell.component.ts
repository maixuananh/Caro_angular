import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent {
  @Input() value!: 'X' | 'O' | null;
  @Output() cellClicked = new EventEmitter<void>();

  onClick() {
    this.cellClicked.emit();
  }
}
