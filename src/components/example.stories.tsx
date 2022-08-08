import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExampleComponent from './example.component';

export default {
  title: 'Example Component',
  component: ExampleComponent,
} as ComponentMeta<typeof ExampleComponent>;

const Template: ComponentStory<typeof ExampleComponent> = () => (
  <ExampleComponent />
);

export const Primary = Template.bind({});
