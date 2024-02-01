import React from 'react';

export const Checkbox = React.forwardRef((values, ref) => {
  const { indeterminate, name, length, ...rest } = values;
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    // resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type="checkbox" ref={ref} {...rest} />
    </>
  );
});
