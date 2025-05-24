#P1:
firstName = input("First name: ")
lastName = input("Last name: ")
print(f"Your full name is {firstName} {lastName}")

input = input("Your input: ")
print(input.upper())

num = int(input("Input a number: "))
print(num**2)


#P2:
for i in range (3,13):
     print(i)

rangeNum = int(input("Input a number: "))
for i in range (rangeNum+1):
     print(i)

oddNum = int(input("Input a number: "))
for i in range (1, oddNum + 1):
    if i % 2 != 0:
         print(i)

#P3:
randomNum = int(input("Input a number: "))
if randomNum < 13:
    print("This number is not larger than 13")
else: 
    print("This number is larger than 13")

evenCheck = int(input("Input a number: "))
if evenCheck % 2 == 0:
    print("This number is even")
else: 
    print("This number is not even")

daysOfMonth = int(input("Input a month: "))
if daysOfMonth in [1,3,5,7,8,10,12]:
   print("This month has 31 days")
elif daysOfMonth in [4,6,9,11]:
   print("This month has 30 days")
elif daysOfMonth == 2:
   print("This month has 28 or 29 days")
else:
   print("This is not a month")


#P4:
userName = input("Username: ")

passWord = input("Password: ")
repeatPass = input("Repeat password: ")
while repeatPass != passWord:
    print("Passwords not match. Please input again")
    repeatPass = input("Repeat password: ")


def checkEmail(email):
   if len(email) < 8:
        return False
   if "@" not in email or "." not in email:
        return False
       
    words = any(c.isalpha() for c in email)
    n = any(c.isdigit() for c in email)
    if not (words and n):
       return False
    return True

while True:
    email = input("Email: ")
    if checkEmail(email):
        print("Registered successfully")
        break
    else:
        print("Invalid email. Please input again")


#P5:
import random

def generateQuestion():
    #may tu chon random dau 
    marks = ['+','-','*','/']
    randomMarks = random.choice(marks)

    a = random.randint(1,20) #may tu chon random so tu range minh cho
    b = random.randint(1,20)

    if randomMarks == '/':
        a = a*b #de ket qua chia la so nguyen

    if randomMarks == '+':
        realResult = a + b
    elif randomMarks == '-':
        realResult = a - b
    elif randomMarks == '*':
        realResult = a*b
    elif randomMarks == '/':
        realResult = a // b 
    
    error = random.choice([-2,-1,0,1,2])
    showResult = realResult + error #thay doi ket qua de ra ket qua sai

    isCorrect = (showResult == realResult) 

    question = f"{a} {randomMarks} {b} = {showResult}"
    return question, isCorrect

score = 0 
print("FREAKING MATH CONSOLE")
print("Give correct answers to get scores.")

while True:
    question, isCorrect = generateQuestion()
    print(question)
    answer = input("1 for True, 0 for False: ")

    if (answer == '1' and isCorrect) or (answer == '0' and not isCorrect):
        score += 1
        print(f"Score: {score}")
    else:
        print("Incorrect.")
        print("GAME OVER")
        print(f"Your total score is {score}")
        break
