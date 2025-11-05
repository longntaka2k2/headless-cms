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
          className="rounded-full flex justify-center items-center overflow-hidden"
          style={{ width, height }}
        >
          <Image
            src={avatarUrl}
            alt="user"
            className="w-full h-full"
            width={width}
            height={height}
          />
        </div>
      ) : (
        <div
          className="rounded-full bg-primary-6 flex justify-center items-center"
          style={{ width, height }}
        >
          <div className="text-white text-xs">
            {getShortUserName(fullName)}
          </div>
        </div>
      )}
    </>
  );
};
