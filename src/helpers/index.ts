const WHITESPACE_LIST = new Set([" ", "\t", "\n", "\r"]);

export function removeNewLines(input: TemplateStringsArray): string {
	const text = input.join("");

	const arr: string[] = [];
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		const char = text[i];

		if (char === undefined) {
			continue;
		}

		if (WHITESPACE_LIST.has(char)) {
			if (count === 0) {
				arr.push(" ");
			}

			count++;
		} else {
			arr.push(char);
			count = 0;
		}
	}

	return arr.join("");
}
