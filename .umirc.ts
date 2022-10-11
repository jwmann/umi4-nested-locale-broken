import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {},
  antd: {},
  locale: {
    antd: true,
    default: 'en-US',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Identity Platform Login',
  },
  title: 'site.title',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});
