a, b, i = 0, 1, 0
# 循环语句
# while (i < 10):
#     i += 1
#     print(b,end=' -> ')
#     a, b = b, a+b
    
# for i in range(100):
#     if i%5 == 0:
#         print(i)

# 判断语句
# num = 11
# if (num <5):
#     print("num < 5")
# elif (num < 10):
#     print("num < 10")
# else:
#     print("num >= 10")
        
# 迭代器
# list = [2,5,2,5,4]
# listIter = iter(list)
# for x in range(len(list)):
#     print(next(listIter))

# print(repr('\n hello world'))
# str(232)

# 字符串格式化
# print("Hello Mr.{name},good {time}!".format(name='Xue',time='morning'))


# 函数传参
# def prt (arg,*args) :
#   print(arg)
#   print(args)
# prt(1,4,5)

# 引入包
# from sys import path
# prt(path)

# 文件读写
# f = open("./1.tx","r")
# str = f.readlines()
# print(str)
# f.close()

# os对象
import os,sys
# print(os.mkdir("abc"))
print(sys.argv)