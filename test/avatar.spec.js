import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Avatar from '../lib/avatar';

describe('<Avatar/>', function() {

  it('should have an image to display gravatar', function() {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

})
