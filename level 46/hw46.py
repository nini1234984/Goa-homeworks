def count_numbers():
    count = 0

    for i in range(1, 101):
        if (i % 3 == 0 or i % 5 == 0) and not (i % 3 == 0 and i % 5 == 0):
            count += 1

    return count

print(count_numbers())


N = int(input("შეიყვანე რიცხვი N: "))

for num in range(2, N + 1):
    is_prime = True

    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        print(num)



even_sum = 0
odd_sum = 0

for i in range(50, 151):
    if i % 2 == 0:
        even_sum += i
    else:
        odd_sum += i

print("ლუწი რიცხვების ჯამი:", even_sum)
print("კენტი რიცხვების ჯამი:", odd_sum)




def get_names():
    names = []

    for i in range(5):
        name = input("შეიყვანე სახელი: ")
        names.append(name)

    return names

result = get_names()
print(result)
