a = 1


def change():
  global a
  a = 5
  b=6

  def c():
    nonlocal b
    b = 7


print(a)
change()
print(a)
