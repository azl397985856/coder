import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar, Icon
} from 'antd-mobile';

import './header.less';

function Header({
  location
}) {
  return (
    <div className="normal">
      <NavBar
        leftContent={null}
        rightContent={<Icon key="1" type="ellipsis" />}
      >
        码代
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
