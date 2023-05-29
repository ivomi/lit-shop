import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-contact-form')
export class ContactFormComponent extends LitElement {
  form = {
    email: '',
  };

  handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLFormElement;
    const data = new FormData(target);
    console.log(Object.fromEntries(data));
    console.log('this', this.form);
  };

  protected override render(): unknown {
    return html` <form @submit="${this.handleSubmit}">
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Send</button>
    </form>`;
  }
}
