const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-colors'

const variants = {
  solid: 'bg-text text-page hover:bg-lime hover:text-on-lime',
  lime: 'bg-lime text-on-lime hover:bg-white',
  outline: 'border-2 border-text bg-transparent text-text hover:bg-text hover:text-page',
} as const

const sizes = {
  sm: 'px-4 py-2.5 text-sm sm:px-5 sm:text-base',
  lg: 'px-8 py-4 text-lg',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

export const buttonClasses = (variant: ButtonVariant = 'solid', size: ButtonSize = 'lg') =>
  `${base} ${variants[variant]} ${sizes[size]}`
