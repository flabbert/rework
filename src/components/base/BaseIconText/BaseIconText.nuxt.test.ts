import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseIconText from './BaseIconText.vue';

describe('BaseIconText', () => {
  it('renders the text and icon props correctly', () => {
    const wrapper = mount(BaseIconText, {
      props: {
        text: 'My Text',
        icon: 'my-icon'
      }
    });

    const p = wrapper.find('p');

    expect(p.text()).toContain('My Text');

    const icon = wrapper.find('.text-icon');
    expect(icon.exists()).toBe(true);
    expect(icon.attributes('name')).toBe('my-icon');
  });
  it('renders icon with no text', () => {
    const wrapper = mount(BaseIconText, {
      props: {
        text: 'My Text',
        icon: 'my-icon',
        hideText: true
      }
    });

    const p = wrapper.find('p');

    expect(p.exists()).toBe(false);
  });
  it('renders link as string', () => {
    const wrapper = mount(BaseIconText, {
      props: {
        text: 'My Text',
        icon: 'my-icon',
        link: 'https://www.google.com'
      }
    });

    const p = wrapper.find('.text-icon-link');

    expect(p.exists()).toBe(true);
    expect(p.attributes('to')).toBe('https://www.google.com');
    expect(p.attributes('aria-label')).toBe('My Text');
  });
  it('renders link as object', () => {
    const wrapper = mount(BaseIconText, {
      props: {
        text: 'My Text',
        icon: 'my-icon',
        link: { url: 'https://www.google.com', target: '_blank', name: 'Google' }
      }
    });

    const p = wrapper.find('.text-icon-link');

    expect(p.exists()).toBe(true);
    expect(p.attributes('to')).toBe('https://www.google.com');
    expect(p.attributes('target')).toBe('_blank');
    expect(p.attributes('aria-label')).toBe('Google');
  });
});
