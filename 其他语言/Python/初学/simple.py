# 题目：有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？

a = (1, 2, 3, 4)
collect = []
for x in a:
  for y in a:
    for z in a:
      if x != y and y != z and x != z:
        collect += [(x, y, z)]
print(len(collect))
print(collect)
