const findSteps = (n) => {
     if (n === 0) {
         return 1;
     } else if (n < 0) {
         return 0;
     } else {
         return findSteps(n - 1) + findSteps(n - 2) + findSteps(n - 3);
     }
};
