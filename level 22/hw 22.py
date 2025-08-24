# 2) გადახედეთ შემდეგ კოდს და ახსენით თითოეული მოქმედება კომენტარებით:

number = 5 # პირველ რიგში ვამატებთ ცვლადს
attempt = 3 # შემდეგ ვამატებთ მცდელობების რაოდენობას
user_input = "" # შემდეგ ვაკეთებთ ცარიელ ცვლადს

while user_input != number and attempt > 0: #მესამე ნაბიჯზე ვამატებთ while loopს და ვეუბნებით რომ გამოიცნოს user მა 
#1 დან 10 ამდე ჩაფიქრებული რიცხვი
    user_input = int(input("Guess the number between 1-10: "))
    attempt -= 1 #მეოთხე ეტაპზე ვუწერთ თუ რამდენი მცდელობა დაკარგა
    
    if user_input == number:
        print("You win!")  # მეხუთე ეტაპზე ვამატებთ if elif  და else  თუ userმა ის ჩაფიქრებული რიცხვი სწორად გამოიცნო 
    #მაშინ if  გამოუტანს პასუხს "you win" ხოლო თ ვერა მაშინ else დაიბეწდება
    elif attempt == 0:
        print("You lose!")
    else:
        print("Wrong number!")
        print("You still have " + str(attempt) + " tries")