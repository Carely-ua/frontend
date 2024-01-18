import { ReactNode, FC, useState, useEffect } from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import { useSnackbar } from 'notistack';
import { Input, InputProps } from '@/ui-kit';
import { useSendCode } from '@/services/account/send-code';

const PHONE_MASK = '+380\\(99)999-9999';
const timeForCodeVerification = 60;

export const PhoneInput: FC<InputProps & { name: string }> = props => {
  const [, meta, helpers] = useField(props.name);
  const { sendCode } = useSendCode();
  const { enqueueSnackbar } = useSnackbar();
  const [timerValue, setTimerValue] = useState(timeForCodeVerification);
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timer>();
  const [error, setError] = useState('');

  const { value } = meta;
  const { setValue } = helpers;

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimerValue(prev => {
        if (prev === 0) {
          return timeForCodeVerification;
        } else if (prev === 1) {
          clearInterval(intervalId);
          setTimeInterval(undefined);
          return timeForCodeVerification;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    setTimeInterval(intervalId);
  };

  const onButtonPress = async () => {
    if (!value || value.includes('_')) {
      setError('Невірний формат номера телефону');
    } else {
      setError('');
      await sendCode(value);
      startTimer();
      enqueueSnackbar('Код підтвердження надіслано ', { variant: 'snackbar' });
    }
  };

  useEffect(() => {
    return () => clearInterval(timeInterval);
  }, [timeInterval]);

  return (
    <InputMask
      mask={PHONE_MASK}
      alwaysShowMask
      value={value}
      onChange={event => setValue(event.target.value)}>
      {
        (() => (
          <Input
            {...props}
            buttonDisabled={!!timeInterval}
            buttonText={timeInterval ? `${timerValue.toString()} сек` : 'Отримати SMS'}
            onButtonPress={onButtonPress}
            inputError={error}
          />
        )) as unknown as ReactNode
      }
    </InputMask>
  );
};
