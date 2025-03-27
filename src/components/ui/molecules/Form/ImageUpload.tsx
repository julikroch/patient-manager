'use client';

import { type ComponentPropsWithoutRef } from 'react';
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface ImageUploadProps<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  name: Path<T>;
  registerOptions?: RegisterOptions<T>;
}

export const ImageUpload = <T extends FieldValues>({
  label,
  error,
  register,
  name,
  registerOptions,
  ...props
}: ImageUploadProps<T>) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        {...register(name, registerOptions)}
        type="file"
        accept="image/*"
        className="hidden"
        id={name}
        {...props}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition-colors text-sm"
      >
        Choose Image
      </label>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

ImageUpload.displayName = 'Form.ImageUpload';
