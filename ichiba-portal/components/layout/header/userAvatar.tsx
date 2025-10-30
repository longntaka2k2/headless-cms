import { getShortUserName } from "@/utils/utils";
import Image from "next/image";

export const UserAvatar = ({
  fullName,
  avatarUrl,
  width = 24,
  height = 24,
}: {
  fullName: string;
  avatarUrl?: string | null;
  width?: number;
  height?: number;
}) => {
  return (
    <>
      {avatarUrl ? (
        <div
          className="tw-rounded-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden"
          style={{ width, height }}
        >
          <Image
            src={avatarUrl}
            alt="user"
            className="tw-w-full tw-h-full"
            width={width}
            height={height}
          />
        </div>
      ) : (
        <div
          className="tw-rounded-full tw-bg-primary-6 tw-flex tw-justify-center tw-items-center"
          style={{ width, height }}
        >
          <div className="tw-text-white tw-text-xs">
            {getShortUserName(fullName)}
          </div>
        </div>
      )}
    </>
  );
};
