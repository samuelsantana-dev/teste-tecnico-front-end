import { Input } from "@heroui/react";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  type?: string;
  size?: "sm" | "md" | "lg";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  label = "Email",
  placeholder = "Enter your email",
  type = "text",
  size = "md",
  value,
  onChange,
}: InputTextProps) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      type={type}
      size={size}
      value={value}
      onChange={onChange}
    />
  );
}
