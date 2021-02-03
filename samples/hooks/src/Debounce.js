import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const getNewValue = (extract, e) =>
  (typeof extract === 'string'
    ? {
        value: (e) => e.value,
        'target.value': (e) => e.target.value,
        e: (e) => e,
      }[extract]
    : extract)(e);

const Debounce = ({
  children,
  value,
  onChange,
  valueField = 'value',
  changeEvent = 'onChange',
  extract = 'target.value',
  debounceWait = 500,
}) => {
  const debouncedOnChange = useMemo(() => _.debounce(onChange, debounceWait), [
    onChange,
    debounceWait,
  ]);
  const elementOnChange = useCallback(
    (e) => {
      const newVal = getNewValue(extract, e);
      debouncedOnChange(newVal);
    },
    [extract, debouncedOnChange]
  );

  return React.cloneElement(children, {
    [changeEvent]: elementOnChange,
    [valueField]: value,
  });
};

Debounce.propTypes = {
  debounceWait: PropTypes.number,
  valueField: PropTypes.string,
  changeEvent: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  extract: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.element,
};

export default Debounce;
