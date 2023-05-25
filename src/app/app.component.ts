import { AppComponentStyles } from '@app/app.component.styles';
import { AppComponentView } from '@app/app.component.view';
import { createRouter } from '@app/routes';
import { LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppComponent extends LitElement {
  static override styles = AppComponentStyles;
  public readonly router = createRouter(this);

  protected override render(): TemplateResult {
    return AppComponentView(this);
  }
}
