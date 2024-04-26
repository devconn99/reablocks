import { Block } from '../../../src/layout/Block';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Divider } from '../../../src/layout';
import { Input } from '../../../src/form/Input';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/reaviz.svg';

export const RegisterV2 = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-[600px]"
    >
      <Card className="w-full p-12">
        <div className="flex flex-col items-center justify-center pt-2 mb-5">
          <img src={logo} alt="Logo" className="h-11 w-auto mb-2" />
          <h4 className="text-2xl font-sans font-bold mb-0">
            Welcome to Reablocks
          </h4>
          <p className="text-base text-panel-secondary-content font-sans text-center">
            Welcome! Let's get started by creating your account. Please provide
            your email address and choose a secure password to begin accessing
            our platform's features.
          </p>
        </div>
        <form
          className="text-sm"
          onSubmit={handleSubmit(values => console.log('values', values))}
        >
          <div className="grid grid-cols-2 gap-2.5">
            <Block label="First Name">
              <Controller
                name="firstName"
                control={control}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    name="firstName"
                    disabled={isSubmitting}
                    placeholder="enter first name"
                    value={value}
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                  />
                )}
              />
            </Block>
            <Block label="Last Name">
              <Controller
                name="lastName"
                control={control}
                render={({ field: { value, onBlur, onChange } }) => (
                  <Input
                    name="lastName"
                    disabled={isSubmitting}
                    placeholder="enter last name"
                    value={value}
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                  />
                )}
              />
            </Block>
          </div>
          <Block label="Email">
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="email"
                  disabled={isSubmitting}
                  placeholder="jon@goodcode.us"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Password">
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="password"
                  disabled={isSubmitting}
                  placeholder="enter password"
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Block label="Confirm Password">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <Input
                  name="confirmPassword"
                  disabled={isSubmitting}
                  placeholder="re-enter password"
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </Block>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            color="primary"
            className="mt-5 mb-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Account →'}
          </Button>
          <div className="mt-5 text-sm text-panel-secondary-content flex items-center justify-center gap-2">
            By signing in, you agree to our
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              terms of service
            </a>
            and
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              privacy policy
            </a>
          </div>
          <Divider className="mt-5 mb-5" variant="secondary" />
          <div className="mt-5 text-panel-secondary-content text-sm flex items-center justify-center gap-2">
            Already have an account?
            <a
              href="#"
              className="text-primary hover:text-primary-hover text-lg"
            >
              Sign in
            </a>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};
