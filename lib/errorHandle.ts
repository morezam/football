interface ErrorObj {
	[key: string]: string;
}
export const errorExist = (thing: ErrorObj) => {
	if (Object.entries(thing).length > 0) {
		return thing;
	}
	return null;
};

export const errorMessage = (errorObj: ErrorObj) => {
	const err = Object.entries(errorObj);
	return `${err[0][1]}`;
};
