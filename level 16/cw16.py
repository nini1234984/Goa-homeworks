# 1) შექმენით პროგრამა, რომელიც მომხმარებელს შემოატანინებს თავის ასაკს, შეამოწმებს არის თუ არა ის 18-ზე ნაკლები და თუ ნაკლებია
#  დაბეჭდავს "You are kid", ხოლოს სხვა ნებისმიერ შემთხვევაში დაბეჭდავს "You are adult"
age=int(input("Enter your age:"))
if age < 18:
    print("you are kid")
else:
    print("you are adult")

# 2) შექმენით პროგრამა, რომელიც მომხმარებელს შემოატანინებს პაროლს და შეამოწმებს თუ ის არის "1234"-ის ტოლი მაშინ დაბეჭდავთ
#  "Password is correct", სხვა შემთხვევაში "Password is incorrect"
password=int(input("Enter your password:"))
if password == 1234:
    print("password is correct")
else:
    print("password is incorrect")
# 3) მომხმარებელს შემოატანინეთ რიცხვი, თუ ის დადებითია დაბეჭდეთ "The number is positive", სხვა შემთხვევაში არაფერს აკეთებთ
user=int(input("Enter number"))
if user > 0:
    print("The number is postive")