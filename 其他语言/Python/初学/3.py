def age_dog2human(age):
  print("I guess that ", end="")
  age = int(age)
  if (age == 0):
    print("she/he is a baby.")
  elif (age == 1):
    print("she/he is about 14.")
  elif (age == 2):
    print("she/he is about 22.")
  else:
    print("she/he is about %d" % (22 + 5 * int(age)))

  return "Program running"


a = 555
print(age_dog2human(input("Input your pet's age:")))
