import dataclasses

@dataclasses
class animal(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
class dog(animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def speak(self):
        print("bow wow")
        

class cat(animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    