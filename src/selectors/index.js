import { createSelector } from 'reselect';

const getTasks = (state) => state.tasks;
const getPa = (state, props) => state.pas[props.id];

export const getVisibleTasksByPa = createSelector(
	[getPa, getTasks],
	(pa, tasks) => pa.tasks.map(t => tasks[t]).filter(t => !t.isRemoved)
);