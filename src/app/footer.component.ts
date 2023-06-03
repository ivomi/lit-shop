import { html, LitElement } from 'lit';
import { customElement } from "lit/decorators";

@customElement('app-footer')
export class FooterComponent extends LitElement {
  protected override render(): unknown {
    return html`<p>version 1.0</p>`;
  }
}
