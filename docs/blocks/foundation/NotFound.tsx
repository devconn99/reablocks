import React from 'react';
import { Input } from '../../../src/form/Input';
import { Button } from '../../../src/elements/Button';

export const NotFound = () => (
  <div className="flex flex-row justify-center w-full min-h-[600px] relative dark:bg-black-pearl">
    <div className="text-center">
      <div className="absolute top-0 left-0 z-0 w-full leading-[600px] text-center text-transparent bg-clip-text text-[400px] opacity-30 bg-gradient-to-r from-waterloo to-charade font-bold">
        404
      </div>
      <div className="absolute top-0 left-0 w-full h-full dark:bg-[radial-gradient(circle,rgba(36,36,66,0.3)_2%,rgba(2,2,15,1)_80%)] light:bg-[radial-gradient(circle,rgba(224,224,232,0.3)_2%,rgba(247,247,250,1)_80%)]" />
      <div className="flex flex-col gap-3 h-full justify-center">
        <div className="grow" />
        <div className="text-surface-content z-10 relative font-bold !text-5xl">
          We lost this page
        </div>
        <div className="dark:text-waterloo light:text-charade opacity-80 z-10 relative">
          The page you are looking for doesnt exist or has been moved.
        </div>
        <Input
          placeholder="Search our site..."
          fullWidth
          className="z-10"
          startAdornment={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path
                  fill="#242433"
                  d="M10.503 9.503h-.526l-.187-.18a4.314 4.314 0 0 0 1.047-2.82 4.333 4.333 0 1 0-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334Zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          }
        />
        <div className="grow flex flex-col justify-center">
          <Button
            color="primary"
            className="z-10 mx-auto relative rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors font-semibold"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  </div>
);
