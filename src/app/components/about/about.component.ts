import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AboutComponent extends LitElement {
  protected override render(): unknown {
    return html`<h1>About</h1>`;
  }
}
