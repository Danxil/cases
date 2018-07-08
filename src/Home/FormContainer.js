import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'

const FormContainer = ({ children , classes}) => {
    return (
      <div className={classes.form}>
        {children}
      </div>
    )
}

const styles = {
  form: {
    'width': '250px',
    '& button': {
      width: '100%',
    }
  },
};

export default injectSheet(styles)(FormContainer);

FormContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
