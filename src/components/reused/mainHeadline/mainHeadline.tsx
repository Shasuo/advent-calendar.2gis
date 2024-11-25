export const MainHeadline = ({ text, mt }: { text: string; mt?: number }) => (
  <h3
    className={"text-[22px] font-semibold leading-7"}
    style={{ marginTop: mt ? `${mt}px` : undefined }}
  >
    {text}
  </h3>
);
