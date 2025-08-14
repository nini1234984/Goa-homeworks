# 2) მოიძიეთ for ციკლზე ინფორმაცია და შეასრულეთ რამოდენიმე მაგალითი
#for ციკლი გამოიყენება იმ დროს როცა ერთი და იგივე ტექსტის ბევრჯერ დაბეჭვდა გვინდა მაგ:
name= "malxazi"
for i in range(5):
    print(name)#ეს დაბეჭდავს ცვლადს 5ჯერ
# 3) for loop-ის გამოყენებით დაბეჭდეთ თქვენი სახელი 10-ჯერ
name1="nini"
for i in range(10):
    print(name1)

# 4) მომხმარებელს შემოატანინეთ 5 რიცხვი for loop-ის გამოყენებით გაიგეთ მათი საშუალო არითმეტიკული
# user=int(input("enter numbers:"))
# for i in range(2):
#     if user % 2 == 0:
#         print() ეს ვერ გავიგე მას

# 5) ივარჯიშეთ if/elif/else-ებზე და გააკეთეთ რამოდენიმე მაგალითი მათზეც
name2="lika"
if name == "nini":
    print("your name is nini")
elif name == "saba":
    print("your name is saba")
else:
    print("i do not know your name")

temp=int(input("what temp is today:"))
if temp > 10:
    print("today is sunny day")
elif temp == 10:
    print("The temp is normal today")
else:
    print("the temp is cold today")