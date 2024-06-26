import { useState } from 'react';
import { Button } from '../../../src/elements/Button';
import { Card } from '../../../src/layout/Card';
import { Chip } from '../../../src/elements/Chip';
import { cn } from '../../../src/utils/Theme/helpers';
import { Divider } from '../../../src/layout/Divider';
import { List, ListItem } from '../../../src/layout/List';
import { MotionGroup, MotionItem } from '../../../src/layout/Motion';
import { Stack } from '../../../src/layout/Stack';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M5.86333 10.5833L3.08333 7.80333L2.13667 8.74333L5.86333 12.47L13.8633 4.47L12.9233 3.53L5.86333 10.5833Z"
      fill="#105EFF"
    />
  </svg>
);

export const Pricing = () => {
  const [selected, setSelected] = useState('free');

  return (
    <MotionGroup className="w-full grid grid-cols-3 gap-2.5">
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:dark:bg-[#1E1E2E]': selected !== 'free',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'free'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <Stack justifyContent="spaceBetween" className="w-full">
              <h6 className="text-lg font-semibold">Free</h6>
              <Chip
                color="primary"
                className="rounded-full px-3 text-sm dark:bg-blue-950 light:bg-blue-100 dark:text-athens-gray light:text-vulcan"
              >
                Current Plan
              </Chip>
            </Stack>
            <span className="dark:text-waterloo light:text-charade">
              For small teams
            </span>
            <Stack>
              <h1 className="text-3xl font-semibold">$0</h1>
              <span className="font-bold dark:text-waterloo light:text-charade">
                /Month
              </span>
            </Stack>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  10 members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'free' ? 'filled' : 'outline'}
              color={selected === 'free' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'free',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'free'
                }
              )}
              onClick={() => setSelected('free')}
              fullWidth
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.66667 2.66669L7.72667 3.60669L11.4467 7.33335H3.33334V8.66669H11.4467L7.72667 12.3934L8.66667 13.3334L14 8.00002L8.66667 2.66669Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:bg-[#1E1E2E]': selected !== 'starter',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'starter'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <Stack justifyContent="spaceBetween" className="w-full">
              <h6 className="text-lg font-semibold">Starter</h6>
              <Chip
                color="success"
                className="rounded-full px-3 text-sm dark:bg-green-950 light:bg-green-100 dark:text-athens-gray light:text-vulcan"
              >
                Recommended
              </Chip>
            </Stack>
            <span className="dark:text-waterloo light:text-charade">
              For a broad set of teams
            </span>
            <Stack>
              <h1 className="text-3xl font-semibold">$1,000</h1>
              <span className="font-bold dark:text-waterloo light:text-charade">
                /Month
              </span>
            </Stack>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Unlimited members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Storybook support
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'starter' ? 'filled' : 'outline'}
              color={selected === 'starter' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'starter',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'starter'
                }
              )}
              onClick={() => setSelected('starter')}
              fullWidth
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M8.66667 2.66669L7.72667 3.60669L11.4467 7.33335H3.33334V8.66669H11.4467L7.72667 12.3934L8.66667 13.3334L14 8.00002L8.66667 2.66669Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
      <MotionItem>
        <Card
          className={cn('w-full h-[515px] rounded transition-colors', {
            'dark:bg-[#1E1E2E]': selected !== 'custom',
            'light:border-primary-active light:bg-athens-gray':
              selected === 'custom'
          })}
          contentClassName="w-full h-full"
        >
          <Stack direction="column" alignItems="start" className="h-full">
            <h6 className="text-lg font-semibold leading-[31px]">Enterprise</h6>
            <span className="dark:text-waterloo light:text-charade">
              For all custom needs
            </span>
            <h1 className="text-3xl font-semibold">Custom</h1>
            <Divider className="mt-0" variant="secondary" />
            <Stack direction="column" alignItems="start" className="grow">
              <List>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Unlimited members
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Integration support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Figma support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Storybook support
                </ListItem>
                <ListItem
                  start={<CheckIcon />}
                  className="dark:text-waterloo light:text-charade"
                >
                  Everything else
                </ListItem>
              </List>
            </Stack>
            <Button
              variant={selected === 'custom' ? 'filled' : 'outline'}
              color={selected === 'custom' ? 'primary' : 'default'}
              className={cn(
                'px-4 py-2 flex items-center gap-2 self-stretch !text-lg rounded-sm focus:outline-none transition-colors',
                {
                  'bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover':
                    selected === 'custom',
                  'dark:border-[#3D3D4D] focus:border-waterloo/75 hover:!border-waterloo':
                    selected !== 'custom'
                }
              )}
              onClick={() => setSelected('custom')}
              fullWidth
            >
              Contact Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentColor"
              >
                <path d="M13.6666 11.4466L12.8866 10.6666H2.9999V2.66665H13.6666V11.4466ZM13.6666 1.33331H2.9999C2.26656 1.33331 1.66656 1.93331 1.66656 2.66665V10.6666C1.66656 11.4 2.26656 12 2.9999 12H12.3332L14.9999 14.6666V2.66665C14.9999 1.93331 14.3999 1.33331 13.6666 1.33331Z" />
              </svg>
            </Button>
          </Stack>
        </Card>
      </MotionItem>
    </MotionGroup>
  );
};
