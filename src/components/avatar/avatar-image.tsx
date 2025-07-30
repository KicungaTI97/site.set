import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
type AvatarSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "width" | "height"> & {
  size?: AvatarSize;  
  }

const AvatarSize ={
  xs: "h-5 w-5",
  sm: "h-9 w-9",
}
export const AvatarImage = ({
	src,
	alt,
  size = "xs",
	...rest
}: AvatarImageProps) => {
	return (
    <div
      className={cn("relative overflow-hidden rounded-full border-blue-200 border-[1px]", 
        AvatarSize[size]
      )}
    >
      <Image src={src} alt={alt} {...rest} fill />
    </div>
  );
};
