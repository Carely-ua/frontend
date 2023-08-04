import { ReactNode, FC } from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import { Input, InputProps } from '@/ui-kit';
import styles from './SmsCodeInput.module.scss';

const SMS_CODE_MASK = '99-99';

export const SmsCodeInput: FC<InputProps & { name: string }> = props => {
  const [, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <InputMask
      mask={SMS_CODE_MASK}
      alwaysShowMask
      value={value}
      onChange={event => setValue(event.target.value)}>
      {(() => <Input {...props} className={styles.input} />) as unknown as ReactNode}
    </InputMask>
  );
};
