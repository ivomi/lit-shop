import { AppComponent } from '@app/app.component';
import { link } from '@app/directives/link';
import { html } from 'lit';

export const AppComponentView = (component: AppComponent) => html`
  <header>
    <b>MENU</b>
    <a ${link('/')}>Home</a>
    <a ${link('/about')}>About</a>
    <a ${link('/contact')}>Contact</a>
  </header>
  <main>${component.router.outlet()}</main>
  <img src="/assets/images/logo.png" alt="logo" />
`;
