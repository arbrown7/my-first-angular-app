import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class Server {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus () {
    return this.serverStatus;
  }
}
