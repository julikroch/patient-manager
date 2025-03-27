import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const BaseButton = ({ size = 'md', className = '', children, ...props }: BaseButtonProps) => {
  const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md';

  return (
    <button className={`rounded-md transition-colors ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface PrimaryButtonProps extends Omit<BaseButtonProps, 'className' | 'children'> {
  text: string;
}

const Primary = ({ text, ...props }: PrimaryButtonProps) => (
  <BaseButton className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white" {...props}>
    {text}
  </BaseButton>
);

interface IconButtonProps extends Omit<BaseButtonProps, 'className'> {
  'aria-label': string;
}

const Icon = ({ children, ...props }: IconButtonProps) => (
  <BaseButton className="p-1 hover:bg-gray-100 rounded-full" {...props}>
    {children}
  </BaseButton>
);

export const Button = {
  Primary,
  Icon,
};
