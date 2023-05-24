import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../shared/spinner.component';

@customElement('app-root')
export class AppComponent extends LitElement {
  @property()
  user = { name: 'Ivo' };

  @property()
  isLoading = true;

  @property()
  adminLoaded = false;

  constructor() {
    super();
    setTimeout(() => {
      this.isLoading = false;
      this.user.name = 'David';
      console.log(AppComponent.elementProperties);
    }, 1500);
  }

  protected async onLoad() {
    if (this.adminLoaded) return;
    await import('../admin/admin');
    this.adminLoaded = true;
  }

  protected adminBlock(): TemplateResult {
    return html` <app-admin></app-admin>`;
  }

  protected override render(): TemplateResult {
    return html`
      <app-spinner .isLoading="${this.isLoading}"></app-spinner>
      <h1>Hello ${this.user.name}</h1>
      <button @click="${() => this.onLoad()}">Load</button>
      ${this.adminLoaded ? this.adminBlock() : nothing}
    `;
  }
}
