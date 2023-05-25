import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-homepage')
export class HomepageComponent extends LitElement {
  protected override render(): unknown {
    return html`<h1>Homepage</h1>`;
  }
}
