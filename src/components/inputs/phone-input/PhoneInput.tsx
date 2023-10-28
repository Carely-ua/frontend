import { ReactNode, FC } from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import { Input, InputProps } from '@/ui-kit';
import { useSendCode } from '@/services/account/send-code';

const PHONE_MASK = '+380\\(99)999-9999';

export const PhoneInput: FC<InputProps & { name: string }> = props => {
  const [, meta, helpers] = useField(props.name);
  const { sendCode } = useSendCode();

  const { value } = meta;
  const { setValue } = helpers;

  const onButtonPress = () => {
    sendCode(value);
  };

  return (
    <InputMask
      mask={PHONE_MASK}
      alwaysShowMask
      value={value}
      onChange={event => setValue(event.target.value)}>
      {
        (() => (
          <Input {...props} buttonText="Отримати SMS" onButtonPress={onButtonPress} />
        )) as unknown as ReactNode
      }
    </InputMask>
  );
};
