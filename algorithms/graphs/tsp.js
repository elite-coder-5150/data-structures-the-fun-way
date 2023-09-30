const calcDistance = (a, b) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
}

const permute = (cities) => {
    const permutations = [];
    let n = cities.length;

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const generate = (cities, n) => {
        if (n === 1) {
            permutations.push([...cities]);
            return;
        }

        for (let i = 0; i < n; i++) {
            generate(cities, n - 1);

            if (n % 2 === 0) {
                swap(cities, i, n - 1);
            } else {
                swap(cities, 0, n - 1);
            }
        }
    }

    generate(cities, n);
    return permutations;
}

const bf_traveling_sailes_person = (cities) => {
    const n = cities.length;

    if (n < 2) {
        return {route: cities, distance: 0 };
    }

    const permutations = permute(cities);
    let shortestDistance = Infinity;
    let shortestRoute = [];

    for (const perm of permutations) {
        let totalDistance = 0;

        for (let i = 0; i < n - 1; i++) {
            totalDistance += calcDistance(perm[i], perm[0]);
        }

        totalDistance += calcDistance(perm[n - 1], perm[0]);

        if (totalDistance < shortestDistance) {
            shortestDistance = totalDistance;
            shortestRoute = perm;
        }
    }

    return { shortestRoute, shortestDistance };
}