import { getRouter } from '@app/routes';
import { ElementPart } from 'lit';
import { Directive, directive } from 'lit/directive.js';

class LinkDirective extends Directive {
  override update(part: ElementPart, [path]: [string]): unknown {
    const element = part.element as HTMLLinkElement;
    element.href = path;
    element.onclick = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      getRouter()
        .goto(path)
        .then(() => history.pushState(null, '', path));
    };
    return this.render(path);
  }

  override render(path: string): void {
    return;
  }
}

export const link = directive(LinkDirective);
