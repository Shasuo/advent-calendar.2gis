import Link from "next/link";
import { Anchor } from "@/scripts/public";
export interface YellowButtonType {
  text: string;
  href?: string;
  mt?: number;
  anchorTargetId?: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
  readRules?: boolean;
}
export const YellowButton = ({
  text,
  href,
  mt,
  anchorTargetId,
  onClick,
  bg,
  color,
}: YellowButtonType) => {
  const commonClasses =
    "bg-[#FFB500] rounded-[16px] box-border max-w-[288px] pt-[17px] pb-[15px] box-border no-underline text-[#1A1A1A] w-full font-semibold block mx-auto text-base py-4 px-7 text-center leading-[16px]";

  const customStyles = {
    marginTop: mt ? `${mt}px` : undefined,
    background: bg ? bg : undefined,
    color: color ? color : undefined,
  };

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
