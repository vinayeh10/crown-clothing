import { createSelector } from "reselect";

export const selectDiectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDiectory],
    directory => directory.sections
);
