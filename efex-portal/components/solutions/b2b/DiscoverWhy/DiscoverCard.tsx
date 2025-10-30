export interface DiscoverCardProps {
  amount: string;
  description: string;
}
export const DiscoverCard = ({ amount, description }: DiscoverCardProps) => {
  return (
    <div className="rounded-2xl flex items-center py-2 lg:py-4 lg:w-[320px] lg:h-[120px]">
      <div>
        <div className="w-1 h-15 rounded bg-[linear-gradient(207deg,_#537CD7_41.34%,_rgba(83,124,215,0.00)_136.97%)] lg:w-[6px]" />
      </div>
      <div className="ml-3">
        <p className="text-xl font-bold lg:text-[30px] lg:leading-[38px]">
          {amount}
        </p>
        <p className="text-sm font-medium lg:text-base">{description}</p>
      </div>
    </div>
  );
};
