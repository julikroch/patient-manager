'use client';

import { type ComponentPropsWithoutRef } from 'react';
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface InputProps<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  name: Path<T>;
  registerOptions?: RegisterOptions<T>;
  isRequired?: boolean;
}

export const Input = <T extends FieldValues>({
  label,
  error,
  register,
  name,
  registerOptions,
  type = 'text',
  isRequired,
  ...props
}: InputProps<T>) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      {...register(name, registerOptions)}
      type={type}
      className="mt-1 w-full rounded-md border border-gray-300 p-2 text-gray-900 bg-white"
      aria-required={isRequired}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

Input.displayName = 'Form.Input';
