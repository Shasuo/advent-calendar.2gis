import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Footer, Popups } from "@/components/main/public";

export const Layout = ({
  children,
  ...props
}: MainLayoutProps): JSX.Element => {
  return (
    <div {...props}>
      <Popups />
      {children}
      <Footer />
    </div>
  );
};

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
