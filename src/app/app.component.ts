import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profilo', url: '/folder/Person', icon: 'person' },
    { title: 'Reistrati', url: '/folder/Login', icon: 'log-in' },
    { title: 'Blog', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Gestisci appuntamenti', url: '/folder/Calendar', icon: 'calendar' },
    { title: 'I tuoi dati al sicuro', url: '/folder/Key', icon: 'key' }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
