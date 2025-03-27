'use client';

import type { ComponentPropsWithoutRef } from 'react';
import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

import { ImageUpload } from './ImageUpload';
import { Input } from './Input';
import { TextArea } from './TextArea';

interface FormProps<T extends FieldValues>
  extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

function Form<T extends FieldValues>({
  form: { handleSubmit },
  onSubmit,
  children,
  className = '',
  ...props
}: FormProps<T>) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`} {...props}>
      {children}
    </form>
  );
}

Form.Input = Input;
Form.TextArea = TextArea;
Form.ImageUpload = ImageUpload;



export { Form };
