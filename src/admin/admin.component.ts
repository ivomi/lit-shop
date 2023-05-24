import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-admin')
export class AdminComponent extends LitElement {
  @property()
  protected user = { name: 'Ivo' };

  constructor() {
    super();
    console.log()
  }

  protected override render(): TemplateResult {
    return html` <h3>ADMIN PANEL</h3> `;
  }
}
