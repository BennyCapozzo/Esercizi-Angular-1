import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user:User | null = null;
  @Output() submitted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  send(user:User): void{
    this.submitted.emit(user.id);
  }
}
