import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-square-redirect',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './square-redirect.component.html',
  styleUrls: ['./square-redirect.component.scss'],
})
export class SquareRedirectComponent {
  @Input() pageName!: string;
  @Input() route!: string;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}