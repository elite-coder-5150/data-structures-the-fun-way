class Perso:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def greet(self, message):
        return f"Hello my name is {self.name} and I am {self.age} years old"
    
    
def square(x):
    return x * x