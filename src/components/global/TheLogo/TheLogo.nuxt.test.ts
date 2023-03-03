import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Logo from './TheLogo.vue';

describe('Logo', () => {
  it('renders the dark logo without a link when dark mode is enabled', () => {
    const wrapper = mount(Logo, {
      props: { dark: true }
    });

    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
    expect(logo.attributes('src')).toBe('/images/aimpoint-dark.svg');

    const link = wrapper.find('.header_link');
    expect(link.exists()).toBe(false);
  });

  it('renders the light logo with a link when a link is provided and dark mode is disabled', () => {
    const wrapper = mount(Logo, {
      props: { dark: false, link: 'https://example.com' }

    });

    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
    expect(logo.attributes('src')).toBe('/images/aimpoint-light.svg');

    const baseLink = wrapper.findComponent('.header_link');
    expect(baseLink.exists()).toBe(true);
    expect(baseLink.attributes('to')).toBe('https://example.com');
  });
});
