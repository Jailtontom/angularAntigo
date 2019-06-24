import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made with <3 by <a href="#">MASSA</a>
      </p>
    </div>
    </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
