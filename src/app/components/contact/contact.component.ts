import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-contact')
export class ContactComponent extends LitElement {
  protected override render(): unknown {
    return html`<h1>Contact</h1>`;
  }
}
