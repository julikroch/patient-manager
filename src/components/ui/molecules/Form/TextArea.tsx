'use client';

import { type ComponentPropsWithoutRef } from 'react';
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface TextAreaProps<T extends FieldValues = FieldValues>
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'ref'> {
  label: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  name: Path<T>;
  registerOptions?: RegisterOptions<T>;
  rows?: number;
  isRequired?: boolean;
}

export const TextArea = <T extends FieldValues>({
  label,
  error,
  register,
  name,
  registerOptions,
  rows = 4,
  isRequired,
  ...props
}: TextAreaProps<T>) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
    <textarea
      {...register(name, registerOptions)}
      className="mt-1 w-full rounded-md border border-gray-300 text-gray-900 p-2 resize-none"
      aria-required={isRequired}
      rows={rows}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

TextArea.displayName = 'Form.TextArea';
