import { Router } from '@lit-labs/router';
import { html, LitElement } from 'lit';

let router: Router;

export const getRouter = () => {
  if (!router) {
    throw new Error('Router not created, call createRouter() method first!');
  }

  return router;
};

export const createRouter = (component: LitElement) => {
  if (router) {
    throw new Error('Router already created!');
  }

  router = new Router(component, [
    {
      path: '/',
      render: () => html` <app-homepage></app-homepage>`,
      enter: async () => {
        const component = await import('./components/homepage/homepage.component');
        return !!component.HomepageComponent;
      },
    },
    {
      path: '/about',
      render: () => html` <app-about></app-about>`,
      enter: async () => {
        const component = await import('./components/about/about.component');
        return !!component.AboutComponent;
      },
    },
    {
      path: '/contact',
      render: () => html` <app-contact></app-contact>`,
      enter: async () => {
        const component = await import('./components/contact/contact.component');
        return !!component.ContactComponent;
      },
    },
  ]);

  return router;
};
