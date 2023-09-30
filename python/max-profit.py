###############################################################################
# you are given a list of integers representing stock prices over a number of
# days. write a python function to find the best time to buy and sell stocks
# to maximize profit. you may complete as many transactions as you like, but
# you must sell the stock before you buy again.

def fimd_max_profite(prices):
    if not prices:
        return 0
    
    max_profit = 0
    
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            max_profit += prices[i] - prices[i - 1]
    
    return max_profit