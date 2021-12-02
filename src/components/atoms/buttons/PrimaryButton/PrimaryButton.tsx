export type Props = JSX.IntrinsicElements["button"] & {
  children: React.ReactNode;
};

export const PrimaryButton: React.FC<Props> = ({ children, ...restProps }) => {
  return <button {...restProps}>{children}</button>;
};
