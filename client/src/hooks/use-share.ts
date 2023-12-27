import { useEffect, useState } from "react";

export const useShare = (text: string) => {
	const [hasShared, setHasShared] = useState<boolean | null>(null);

	const [hasError, setHasError] = useState(false);
	const [hasCopiedShared, setHasCopiedShared] = useState(false);

	const share = async (value: string) => {
		setHasShared(false);

		try {
			await navigator.share({
				text: value,
			});
		} catch {
			try {
				await navigator.clipboard.writeText(value);

				setHasCopiedShared(true);
			} catch {
				setHasError(true);
			}
		} finally {
			setHasShared(true);
		}
	};

	const handleShare = () => {
		void share(text);
	};

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		if (hasShared) {
			timeout = setTimeout(() => {
				setHasShared(null);
				setHasCopiedShared(false);
				setHasError(false);
			}, 2000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [hasShared]);

	return [
		handleShare,
		{
			hasShared,
			hasError,
			hasCopiedShared,
		},
	] as const;
};
