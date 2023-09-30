#ifndef _SEARCH_H_
#define _SEARCH_H_

class Search {
public:
    int linear(int arr[], int n, int x);
    void sentinel(int arr[], int n, int key);
    int binary(int arr[], int left, int right, int x);
    int meta(vector<int> a, int key);

public:
    int ternary(int left, int right, int key, int arr[]);
    int jump(int arr[], int x, int n);
    int interpolation(int arr[], int low, int high, int x);
    int expotional(int arr[], int n, int x);
}