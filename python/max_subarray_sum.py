"""
    given an array of integers, find the continuuous subarray (containing at 
    least one number) that has the largest sum and return its sum.
"""
def max_subarr_sum(nums):
    if not nums:
        return 0
    
    max_sum = nums[0]
    curr_sum = nums[0];
    
    for num in nums[1:]:
        curr_sum = max(num, curr_sum + num)
        max_sum = max(max_sum, curr_sum);
    
    return max_sum