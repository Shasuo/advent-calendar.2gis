import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Footer, Popups } from "@/components/main/public";
import { AuthControl } from "./authControl";
import { ChangePageMutations } from "./changePageMutations";

export const Layout = ({
  children,
  ...props
}: MainLayoutProps): JSX.Element => {
  return (
    <div {...props}>
      <AuthControl />
      <ChangePageMutations />
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
