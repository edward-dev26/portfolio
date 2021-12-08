import React, { HTMLInputTypeAttribute } from 'react';
import { Field, FieldProps } from 'formik';
import FieldWrapper from './FieldWrapper/FieldWrapper';

type PropsType = {
  name: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  wrapperClassName?: string;
};

const withFormikField = (
  WrappedField: React.ComponentType
): React.FC<PropsType> => {
  // eslint-disable-next-line react/display-name
  return ({ name, wrapperClassName, ...props }) => {
    return (
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <FieldWrapper
            invalid={meta.touched && !!meta.error}
            invalidText={meta.error}
            className={wrapperClassName}
          >
            <WrappedField {...props} {...field} />
          </FieldWrapper>
        )}
      </Field>
    );
  };
};

export default withFormikField;
