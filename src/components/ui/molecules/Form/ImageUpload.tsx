'use client';

import Image from 'next/image';
import { type ComponentPropsWithoutRef, useState } from 'react';

const DEFAULT_AVATAR = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

import type {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

interface ImageUploadProps<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  registerOptions?: RegisterOptions<T>;
  defaultImage?: string;
  isRequired?: boolean;
}

export const ImageUpload = <T extends FieldValues>({
  label,
  error,
  register,
  setValue,
  name,
  registerOptions,
  defaultImage,
  isRequired,
  ...props
}: ImageUploadProps<T>): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(defaultImage || DEFAULT_AVATAR);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setIsLoading(true);

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      setValue(name, base64 as PathValue<T, Path<T>>);
      setPreviewUrl(base64);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error converting image:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative flex items-center justify-between">
        <input
          {...register(name, registerOptions)}
          type="file"
          accept="image/*"
          className="hidden"
          id={name}
          onChange={handleFileChange}
          {...props}
        />
        <label
          htmlFor={name}
          className="flex items-center justify-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition-colors text-sm"
        >
          {isLoading ? 'Loading...' : 'Choose Image'}
        </label>
        {previewUrl && (
          <div className="mt-2">
            <Image
              src={previewUrl}
              alt="Preview"
              width={80}
              height={80}
              className="object-cover rounded-full"
              onError={() => setPreviewUrl(DEFAULT_AVATAR)}
            />
          </div>
        )}
      </div>
      {error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default ImageUpload;
