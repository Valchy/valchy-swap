import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './Link';

export default {
	// this is where it will appear on the storybook sidebar
	title: 'Example/Link',
	component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const DefaultLink = Template.bind({});
// default props it will render with
DefaultLink.args = {
	text: 'default placeholder text',
	href: 'https://valerisabev.com',
	openInNewTab: true
};
