# 1) შექმენით 5 ელემენტიანი მანქანების სია და დაბეჭდეთ
cars=["Lamborghini", "Ferari", "Mercedes", "BMW", "Porshe"]
print(cars)

print()
# 2) შექმნილი სიიდან დაბეჭდეთ, მე-3 ელემენტი
cars=["Lamborghini", "Ferari", "Mercedes", "BMW", "Porshe"]
print(cars[2])

print()
# 3) იგივე სიიდან დაბეჭდეთ მე-3 ინდექსზე მდგომი ელემენტი
cars=["Lamborghini", "Ferari", "Mercedes", "BMW", "Porshe"]
print(cars[3])
print()
# 4) შექმენით 7 ელემენტიანი სახელების სია და შეცვალეთ მასში 1-ლი და მე-5 ინდექსზე მყოფი ელემენტები სხვა ნებისმიერი სახელით.

# შემდეგ დაბეჭდეთ განახლებული სია.
names=["nini", "lika", "saba", "petre", "pavle", "shavlego", "lizi"]
print(names)
names[1]="mariami"
names[5]="nika"
print(names)
print()
# 5) ამ სიაში რომელიმე ორ ელემენტს გაუცვალეთ ადგილები
names=["nini", "lika", "saba", "petre", "pavle", "shavlego", "lizi"]
print(names)
names[4], names[6]=names[6], names[5]
print(names)