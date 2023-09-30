#include <bits/stdc++.h>
using namespace std;
const int n = 5;

/**
 * simple function that check whether or not a path exists
*/
bool ham_path(vector<vector<int>>& adj, int n) {
    int dp[n][(1 << n)];

    /** initialize the table*/
    memset(dp, 0, sizeof());

    // set all dp[i][(n << i)] to true
    for (int i = 0; i < n; i++) {
        dp[i][(1 << i)] = true;
    }

    /** iterate over each subset of nodes */
    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {

            /** if the jth node is included in the current subset */
            if (i & (1 << j)) {

                /** 
                 * find k, neighbor of j also present in 
                 * the current subset 
                 */
                for (int k = 0; k < n; k++) {
                    if (i & (i << k) && adj[k][j] &&
                        j != k && dp[k][i ^ (i << j]) {
                        /**
                         * update [j][i] to true
                         */
                        dp[j][i] = true;
                        break;
                    }
                }
            }
        }
    }

    /** traverse the nodes*/
    for (int i = 0; i < n; i++) {
        /** a path exists */
        if (dp[i][(1 << n) - 1]) {
            return true;
        }
    }

    /**
     * path does not exist
    */
    return false;
}

int main() {
    vector<vector<int>> adj = {
        { 0, 1, 1, 1, 0},
        { 1, 0, 1, 0, 1},
        { 1, 1, 0, 1, 1},
        { 1, 0, 1, 0, 0}};

    int n = adj.size();

    if (ham_path(adj, n))
        std::cout << 'yes, there is a path';

    else
        std::cout << "no, there is no path";

    return 0;
}