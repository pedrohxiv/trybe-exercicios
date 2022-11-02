import React from 'react';
import { bool, func, node, string } from 'prop-types';

export default function Button({ onClick, className, disabled, children }) {
  return (
    <button
      onClick={ onClick }
      className={ `button-text ${className}` }
      disabled={ disabled }
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: string.isRequired,
  children: node.isRequired,
  disabled: bool,
  onClick: func.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
