import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import StoryCard from './StoryCard.vue';

describe('StoryCard', () => {
  it('renders with props', () => {
    const props = {
      title: 'Example Title',
      link: {
        url: '/test-link/',
        name: 'Test Link',
        target: null
      },
      category: 'Example Category',
      image: 'example-image.jpg'
    };
    const wrapper = mount(StoryCard, { props });

    expect(wrapper.find('h2').text()).toBe('Example Title');
    expect(wrapper.find('[data-test="image"]').attributes('src')).toBe('example-image.jpg');
    expect(wrapper.find('[data-test="link"]').attributes('to')).toBe('/test-link/');
    expect(wrapper.find('[data-test="tag"]').attributes('title')).toBe('Example Category');
  });
});
