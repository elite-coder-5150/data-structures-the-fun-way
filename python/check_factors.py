    """
    TODO: fix this error in th emorning
    """
def checkFactors(n):
    ev_count = od_count = 0
    
    for i in range(1, int(pow(n, 1 / 2)) + 1:
        if n % i == 0:
            if i % 2 == 0:
                ev_count += 1
            else:
                od_count += 1
            if (n / i) % 2 == 0:
                ev_count += 1
            else:
                od_count += 1
        else:
            if (i % 2 == 0):
                ev_count += 1
            else:
                od_count += 1
                
            if ((n / i) % 2 == 0):
                ev_count += 1
            else:
                od_count += 1
                
    if (ev_count % 2 == 0 and od_count % 2 == 0):
         print("Yes" + "")
    else:
        print("No" + "")
        
        
if __name__ == "__main__":
    n = 36
    checkFactors(n);