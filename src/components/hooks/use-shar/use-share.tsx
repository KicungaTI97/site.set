import { useCallback, useMemo } from "react";
import {
	type ShareConfig,
	SOCIAL_PROVIDER,
	type SocialProvider,
} from "./social-providers";
import { UseClipboard } from "../use-clipboard";
import { Link } from "lucide-react";

type UseShareProps = ShareConfig & {
	clipboardTime?: number;
};
export const useShare = ({
	url,
	text,
	title,
	clipboardTime = 2000,
}: UseShareProps) => {
	const { isCopied, handleCopy } = UseClipboard({ time: clipboardTime });
	const shareConfig = useMemo(
		() => ({
			url,
			...(title && { title }),
			...(text && { text }),
		}),
		[text, title, url],
	);

	const share = useCallback(
		async (provider: SocialProvider) => {
			try {
				if (provider === "clipboard") {
					return await handleCopy(shareConfig.url);
				}

				const providerConfig = SOCIAL_PROVIDER[provider];
				if (!providerConfig) {
					throw new Error(`Provider não suportado: ${provider}`);
				}

				const shareUrl = providerConfig.shareUrl(shareConfig);
				const shareWindow = window.open(
					shareUrl,
					"_blank",
					"noopener,noreferrer",
				);
				return !!shareWindow;
			} catch (error) {
				console.error(error);
				return false;
			}
		},
		[shareConfig, handleCopy],
	);

	const shareButtons = useMemo(
		() => [
			...Object.entries(SOCIAL_PROVIDER).map(([Key, provider]) => ({
				provider: Key,
				name: provider.name,
				icon: provider.icon,
				action: () => share(Key as SocialProvider),
			})),
			{
				provider: "clipboard",
				name: isCopied ? "Link copiado!" : "Copiar link",
				icon: <Link className="w-4 h-4" />,
				action: () => share("clipboard"),
			},
		],
		[isCopied, share],
	);
	return {
		shareButtons,
	};
};
