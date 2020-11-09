import React from 'react';
import { shallow } from 'enzyme';

import TestComponent from './testComponent';

describe('TestComponent component:', () => {
  it('renders without crashing', () => {
    shallow(<TestComponent />);
  });
});
