#!/usr/bin/python3

# def change(a):
#     print(id(a))   # 指向的是同一个对象
#     a=10
#     print(id(a))   # 一个新对象
 
# a=1
# print(id(a))
# change(a)
 

# def fn (a,**args):
#   print(a);
#   print(args);
  
# a = 4;
# fn(1,b=4)

# import test;
# test.fn(4);
# print(test.c)

# from test import *;
# import test;

# import sys;
# print(dir())

# f = open("./test.py","r+");
# print(11)
# # print(f.read())
# with open("./test.py","r+") as f:
#   print(f.read())
#   f.write("\n\ndef abc(a):\n  print(a)\n")

class FuckingError(Exception):
  def __init__(self,value):
    self.value = value
  def __str__(self):
    return repr(self.value)

try:
  a = 0/0
except:
  raise FuckingError("fuck off")