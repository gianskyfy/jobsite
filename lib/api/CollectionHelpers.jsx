export const getUtcDate = () => {
    return new Date(new Date().toUTCString().substr(0, 25));
};