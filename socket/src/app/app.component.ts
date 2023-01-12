import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'socket';
  constructor() {
    const socket = io('http://localhost:3000/', { transports: ['websocket'] });
    socket.on('test', (socket) => {
      console.log(socket);
    });
  }
}
