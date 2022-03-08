import React from 'react';

import App from '../pages/index';

export default {
	// this is where it will appear on the storybook sidebar
	title: 'My Project/Home Page',
	component: App
};

const Template: any = args => <App {...args} />;

export const IndexPage = Template.bind({});
// default props it will render with
IndexPage.args = {};
