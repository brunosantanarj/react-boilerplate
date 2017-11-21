import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('<App/>', () => {

	it('should have component is not null', () => {
        const wrapper = shallow(
            <App />
        );
		expect(wrapper.html()).not.toBeNull();
	});
})