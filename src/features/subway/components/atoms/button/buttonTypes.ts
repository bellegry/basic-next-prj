export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonSize = "sm" | "md";

export interface ButtonProps extends BaseProps {
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}
