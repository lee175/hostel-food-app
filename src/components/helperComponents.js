export const windowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return [
        width,
        height
    ];
}