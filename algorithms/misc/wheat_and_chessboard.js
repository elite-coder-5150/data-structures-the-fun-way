const calcGrainOnSquare = (square) => {
    return Math.pow(2, square - 1);
}

calcTotalGrain = () => {
    let totalGrain = 0;
    const grainOnEachSquare = [];

    for (let square = 1; square <= 64; square++) {
        const grains = calcGrainOnSquare(square);
        grainOnEachSquare.push({square, grain});
        totalGrain += grains;
    }

    return { totalGrain, grainOnEachSquare };
}

const {totalGrain, grainOnEachSquare} = calcGrainOnSquare(totalGrain);