def get_day_of_week(day_number):
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if 1 <= day_number <= 7:
        return days_of_week[day_number - 1];

    else:
        return "invalid day number"
    


print(get_day_of_week(0)) # output "Sunday"
print(get_day_of_week(1)) # output "Monday"
print(get_day_of_week(2)) # output "Tuesday"
print(get_day_of_week(3)) # output "Wednesday"
print(get_day_of_week(4)) # output "Thursday"
print(get_day_of_week(5)) # output "Friday"
print(get_day_of_week(6)) # output "Saturday"
print(get_day_of_week(8)) # output invalid date nnumber