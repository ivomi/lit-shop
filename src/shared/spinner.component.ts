import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('app-spinner')
export class SpinnerComponent extends LitElement {
  @property()
  isLoading = false;

  protected override render(): TemplateResult {
    return html`<p>${this.isLoading ? 'Loading...' : ''}</p>
`;
  }
}
