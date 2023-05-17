export const validateHex = (hex: string): boolean => {
	const hex_rule = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;
	const is_valid = hex_rule.test(hex);
	return is_valid;
};
