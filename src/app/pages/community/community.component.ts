import { Component } from '@angular/core';
import { SquareRedirectComponent } from '../components/square-redirect/square-redirect.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [SquareRedirectComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
