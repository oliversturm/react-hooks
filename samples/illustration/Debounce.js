import React from 'react';
import _ from 'lodash/fp';
import PropTypes from 'prop-types';

import {
  setPropTypes,
  withState,
  compose,
  defaultProps,
  lifecycle,
  onlyUpdateForPropTypes,
  withPropsOnChange,
  withHandlers,
} from 'recompose';

const Debounce = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    debounceWait: PropTypes.number,
    valueField: PropTypes.string,
    changeEvent: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    extract: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.element,
  }),
  defaultProps({
    debounceWait: 500,
    valueField: 'value',
    changeEvent: 'onChange',
    extract: 'target.value',
  }),
  withState('viewValue', 'setViewValue', ({ value }) => value),
  withPropsOnChange(
    ['debounceWait', 'onChange'],
    ({ debounceWait, onChange }) => ({
      onChangeFunc: _.debounce(debounceWait)(onChange),
    })
  ),
  withPropsOnChange(['extract'], ({ extract }) => ({
    extractFunc:
      typeof extract === 'string'
        ? {
            value: (e) => e.value,
            'target.value': (e) => e.target.value,
            e: (e) => e,
          }[extract]
        : extract,
  })),
  withHandlers({
    childChange: (props) => (e) => {
      const newVal = props.extractFunc(e);
      props.setViewValue(newVal);
      props.onChangeFunc(newVal);
    },
  }),
  lifecycle({
    componentWillReceiveProps(np) {
      // It is possible that the value prop changes in some way other than
      // through the event handler. If this happens, *and* the new value is
      // different from what we're holding in internal state, we need to
      // copy that new value.
      // For some reason, the recompose project is not interested in other
      // solutions for this scenario: https://github.com/acdlite/recompose/pull/555
      if (np.value !== this.props.value && np.value !== this.props.viewValue)
        this.props.setViewValue(np.value);
    },
  })
)(({ children, valueField, changeEvent, viewValue, childChange }) => {
  return React.cloneElement(children, {
    [valueField]: viewValue,
    [changeEvent]: childChange,
  });
});

export { Debounce };
