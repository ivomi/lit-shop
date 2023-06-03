import { AppComponentStyles } from '@app/app.component.styles';
import { link } from '@app/directives/link';
import { createRouter } from '@app/routes';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./footer.component";

@customElement('app-root')
export class AppComponent extends LitElement {
  static override styles = AppComponentStyles;
  public readonly router = createRouter(this);

  protected override render(): TemplateResult {
    return html`
    <header>
      <b>MENU</b>
      <a ${link('/')}>Home</a>
      <a ${link('/about')}>About</a>
      <a ${link('/contact')}>Contact</a>
    </header>
    <main>${this.router.outlet()}</main>
    <img src="/assets/images/logo.svg" alt="logo" />
    <app-footer></app-footer>
  `;
  }
}
