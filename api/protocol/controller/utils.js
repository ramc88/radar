const distance = ({y, x}) => {
    // considering us as the point (0, 0)
    return Math.abs(Math.sqrt(x * x + y * y));
};

export default distance;