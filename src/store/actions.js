export const changeView = ({commit}, view) => {
	commit('CHANGE_VIEW', view);
};
export const changeDefaultbox = ({dispatch}, mailbox) => {
	dispatch('CHANGE_DEFAULTBOX', mailbox);
}
export const changeSenderName = ({dispatch}, name) => {
	dispatch('CHANGE_SENDERNAME', name);
}