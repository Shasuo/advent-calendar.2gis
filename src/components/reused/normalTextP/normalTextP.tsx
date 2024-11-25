export const NormalTextP = ({
  text,
  mt,
  mxAuto,
  maxW,
}: {
  text: string;
  mt?: number;
  mxAuto?: boolean;
  maxW?: number;
}) => (
  <p
    className={`text-sm leading-5 font-normal ${mxAuto ? "mx-auto" : undefined} ${maxW ? `max-w-[${maxW}px]` : undefined}`}
    style={{ marginTop: mt ? `${mt}px` : undefined }}
  >
    {text}
  </p>
);
