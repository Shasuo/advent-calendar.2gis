import Link from "next/link";
import { Anchor } from "@/scripts/public";
export interface YellowButtonType {
  text: string;
  href?: string;
  mt?: number;
  anchorTargetId?: string;
  onClick?: () => void;
}
export const YellowButton = ({
  text,
  href,
  mt,
  anchorTargetId,
  onClick,
}: YellowButtonType) => {
  const commonClasses =
    "bg-[#FFB500] rounded-[16px] box-border max-w-[288px] max-h-[48px] no-underline text-[#1A1A1A] w-full font-semibold block mx-auto text-base py-4 px-7 text-center leading-[20px]";

  const customStyles = { marginTop: mt ? `${mt}px` : undefined };

  if (href) {
    return (
      <Link href={href} className={commonClasses} style={customStyles}>
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className={commonClasses}
        style={customStyles}
        onClick={() => {
          if (anchorTargetId) {
            Anchor(anchorTargetId);
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        {text}
      </button>
    );
  }
};
