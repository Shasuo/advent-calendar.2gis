export const Indicator = ({
  completeTasksCount,
}: {
  completeTasksCount: number;
}) => {
  const percent = Math.round((completeTasksCount / 14) * 100);
  return (
    <div
      className={
        "relative w-[51px] h-[51px] rounded-[50%] flex items-center justify-center"
      }
      style={{
        background: `conic-gradient( #1ca91e ${percent}%, #d5d5d5 ${percent}%)`,
      }}
    >
      <div
        className={
          "leading-4 text-sm font-semibold w-[41px] h-[41px] bg-white rounded-[50%] flex items-center justify-center box-border pt-[3px]"
        }
      >
        {percent}%
      </div>
    </div>
  );
};
