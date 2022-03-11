import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TransactionSpinner } from './TransactionSpinner';

export default {
	// this is where it will appear on the storybook sidebar
	title: 'Example/TransactionSpinner',
	component: TransactionSpinner
} as ComponentMeta<typeof TransactionSpinner>;

const Template: ComponentStory<typeof TransactionSpinner> = args => (
	<TransactionSpinner {...args} />
);

export const DefaultTransactionSpinner = Template.bind({});
// default props it will render with
DefaultTransactionSpinner.args = {
	customText: 'loading...',
	colorLeft: '#312e81',
	colorRight: '#831843',
	speed: 2
};
