import React from 'react';
import PropTypes from 'prop-types';

class FormError extends React.Component {
  render() {
    const { formError } = this.props;
    return (
      <div>
        {Object.keys(formError)
          .filter((fieldName) => formError[fieldName].length > 0)
          .map((fieldName, i) => (
            <p key={ i }>
              {fieldName}
              {formError[fieldName]}
            </p>
          ))}
      </div>
    );
  }
}

FormError.propTypes = {
  formError: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FormError;
