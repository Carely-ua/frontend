import { ReactNode, FC } from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import { Input, InputProps } from '@/ui-kit';

const PHONE_MASK = '+380\\(99)999-9999';

export const PhoneInput: FC<InputProps & { name: string }> = props => {
  const [, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <InputMask
      mask={PHONE_MASK}
      alwaysShowMask
      value={value}
      onChange={event => setValue(event.target.value)}>
      {(() => <Input {...props} />) as unknown as ReactNode}
    </InputMask>
  );
};
