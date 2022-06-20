import time

scale = 100

print("Program running...")

for i in range(1, scale+1):
  print("\r %s%%[%s->%s]" % (str(i) + "%", "*" * i, "." * (scale - i)),end="");
  time.sleep(0.02)

print("\nComplete.")