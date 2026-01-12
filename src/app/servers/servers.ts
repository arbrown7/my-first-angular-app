import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!'
  serverName = ' ';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName (event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
