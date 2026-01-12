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
  serverCreated = false;
  servers = [ 'Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    
  }

  onUpdateServerName (event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
