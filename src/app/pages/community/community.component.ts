import { Component } from '@angular/core';
import { SquareRedirectComponent } from '../components/square-redirect/square-redirect.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [HeaderComponent, SquareRedirectComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
