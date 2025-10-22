# 1) მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ თუ ის არის დადებითი დაბეჭდეთ The number is
# positive, სხვა შემთხვეაში თუ რიცხვი არის უარყოფითი დაბეჭდეთ 
# The number is negative, ხოლო სხვა შემთხვევაში დაბეჭდეთ The number is zero

num=int(input("Enter your age"))
if num > 0:
    print("the number is positive")
elif num < 0:
    print("the number is negative")
else:
    print("the number is zero")

numbers=[100, 50, 70, 90, 10]
print(numbers[0:5:2])