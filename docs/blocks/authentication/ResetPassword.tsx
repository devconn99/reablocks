import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Input } from '../../../src/form/Input';
import { Stack } from '../../../src/layout/Stack';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col justify-center grow sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card
        className="w-full h-full grow p-12"
        contentClassName="w-full h-full grow flex flex-col"
      >
        <Stack justifyContent="spaceBetween">
          <img src={logo} alt="Logo" className="h-11" />
          <a href="#" className="text-lg text-primary font-semibold">
            Create an account
          </a>
        </Stack>
        <div className="w-full flex flex-col grow items-center justify-center text-center pt-2 mb-14">
          <div className="p-3 border border-panel-secondary-content rounded mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M7.33333 11.9999H8.66667V10.6666H7.33333V11.9999ZM8 1.33325C4.32 1.33325 1.33333 4.31992 1.33333 7.99992C1.33333 11.6799 4.32 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM8 13.3333C5.06 13.3333 2.66667 10.9399 2.66667 7.99992C2.66667 5.05992 5.06 2.66659 8 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8 13.3333ZM8 3.99992C6.52667 3.99992 5.33333 5.19325 5.33333 6.66658H6.66667C6.66667 5.93325 7.26667 5.33325 8 5.33325C8.73333 5.33325 9.33333 5.93325 9.33333 6.66658C9.33333 7.99992 7.33333 7.83325 7.33333 9.99992H8.66667C8.66667 8.49992 10.6667 8.33325 10.6667 6.66658C10.6667 5.19325 9.47333 3.99992 8 3.99992Z" />
            </svg>
          </div>
          <h4 className="text-2xl font-sans font-bold mb-0">Reset Password?</h4>
          <span className="text-base text-panel-secondary-content font-sans">
            Forgot your password? No worries! Simply enter your email address
            below, and we'll send you instructions on how to reset it.
          </span>
          <form
            onSubmit={handleSubmit(values => console.log('values', values))}
            className="w-full text-left mt-7"
          >
            <Block labelClassName="text-sm font-medium mb-1" label="Email">
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    name="email"
                    disabled={isSubmitting}
                    placeholder="user@goodcode.us"
                    end={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M7.99999 1.33325C4.32402 1.33325 1.33333 4.32394 1.33333 7.99992C1.33333 11.6759 4.32402 14.6666 7.99999 14.6666C11.676 14.6666 14.6667 11.6759 14.6667 7.99992C14.6667 4.32394 11.676 1.33325 7.99999 1.33325ZM7.99999 2.33325C11.1355 2.33325 13.6667 4.86438 13.6667 7.99992C13.6667 11.1355 11.1355 13.6666 7.99999 13.6666C4.86446 13.6666 2.33333 11.1355 2.33333 7.99992C2.33333 4.86438 4.86446 2.33325 7.99999 2.33325ZM7.99999 3.33325C5.42848 3.33325 3.33333 5.4284 3.33333 7.99992C3.33333 10.5714 5.42848 12.6666 7.99999 12.6666C8.5757 12.6666 9.12942 12.5621 9.63997 12.3704C9.70217 12.3478 9.75929 12.3132 9.808 12.2684C9.85672 12.2236 9.89607 12.1697 9.92377 12.1096C9.95147 12.0495 9.96698 11.9845 9.96938 11.9184C9.97179 11.8523 9.96106 11.7863 9.9378 11.7244C9.91454 11.6625 9.87922 11.6058 9.83389 11.5576C9.78856 11.5094 9.73411 11.4707 9.67371 11.4437C9.61331 11.4167 9.54815 11.4019 9.48201 11.4003C9.41587 11.3987 9.35007 11.4102 9.28841 11.4342C8.88829 11.5844 8.45496 11.6666 7.99999 11.6666C5.96884 11.6666 4.33333 10.0311 4.33333 7.99992C4.33333 5.96877 5.96884 4.33325 7.99999 4.33325C10.0311 4.33325 11.6667 5.96877 11.6667 7.99992V8.49992C11.6667 8.96599 11.2994 9.33325 10.8333 9.33325C10.3673 9.33325 9.99999 8.96599 9.99999 8.49992V6.16658C10.001 6.04378 9.95671 5.92492 9.87567 5.83264C9.79463 5.74037 9.68247 5.68115 9.56057 5.66626C9.43867 5.65138 9.31555 5.68187 9.21469 5.75193C9.11383 5.82199 9.04227 5.92671 9.01367 6.04614C8.67621 5.80801 8.27256 5.66658 7.83333 5.66658C6.61606 5.66658 5.66666 6.74241 5.66666 7.99992C5.66666 9.25743 6.61606 10.3333 7.83333 10.3333C8.45024 10.3333 8.99742 10.056 9.38801 9.61971C9.7245 10.0519 10.2477 10.3333 10.8333 10.3333C11.8399 10.3333 12.6667 9.50651 12.6667 8.49992V7.99992C12.6667 5.4284 10.5715 3.33325 7.99999 3.33325ZM7.83333 6.66658C8.45406 6.66658 8.99999 7.23543 8.99999 7.99992C8.99999 8.76441 8.45406 9.33325 7.83333 9.33325C7.2126 9.33325 6.66666 8.76441 6.66666 7.99992C6.66666 7.23543 7.2126 6.66658 7.83333 6.66658Z" />
                      </svg>
                    }
                    value={value}
                    type="email"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </Block>
            <Button
              type="submit"
              variant="filled"
              color="primary"
              className="my-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
              disabled={isSubmitting}
              fullWidth
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 2.66675V0.666748L5.33333 3.33341L8 6.00008V4.00008C10.2067 4.00008 12 5.79342 12 8.00008C12 8.67342 11.8333 9.31342 11.5333 9.86675L12.5067 10.8401C13.0267 10.0201 13.3333 9.04675 13.3333 8.00008C13.3333 5.05341 10.9467 2.66675 8 2.66675ZM8 12.0001C5.79333 12.0001 4 10.2067 4 8.00008C4 7.32675 4.16667 6.68675 4.46667 6.13341L3.49333 5.16008C2.97333 5.98008 2.66667 6.95341 2.66667 8.00008C2.66667 10.9467 5.05333 13.3334 8 13.3334V15.3334L10.6667 12.6667L8 10.0001V12.0001Z" />
              </svg>
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </Button>
            <Stack
              className="w-full text-primary"
              justifyContent="center"
              dense
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M13.3333 7.33342H5.22L8.94667 3.60675L8 2.66675L2.66667 8.00008L8 13.3334L8.94 12.3934L5.22 8.66675H13.3333V7.33342Z" />
              </svg>
              <a
                href="#"
                className="inline-flex items-center text-lg font-semibold"
              >
                Back to log in
              </a>
            </Stack>
          </form>
        </div>
        <Stack justifyContent="center">
          <div className="h-[4px] w-[60px] bg-primary rounded" />
          <div className="h-[4px] w-[60px] bg-surface-disabled rounded" />
          <div className="h-[4px] w-[60px] bg-surface-disabled rounded" />
          <div className="h-[4px] w-[60px] bg-surface-disabled rounded" />
        </Stack>
      </Card>
    </motion.div>
  );
};
