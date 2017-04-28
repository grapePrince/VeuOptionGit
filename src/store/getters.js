export const viewMain = state => {
	if (state.view == "main") {
		return true;
	} else {
		return false;
	}
};

export const viewMailbox = state => {
	if (state.view == "mailbox") {
		return true;
	} else {
		return false;
	}
};
