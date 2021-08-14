import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://lynkersoft.com/" target="_blank">Lynkersoft</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/lynkersoft/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/lynkersoft" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://in.linkedin.com/company/lynkersoft-solutions" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
