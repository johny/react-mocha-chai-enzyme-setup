import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import Example from '../lib/example';

describe('<Example/>', function() {

  it('should have an H1 headline', function() {
    const wrapper = shallow(<Example/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it("should have welcome text P", function() {
    const wrapper = shallow(<Example/>);
    expect(wrapper.find('p')).to.have.length(1);
  })

})
