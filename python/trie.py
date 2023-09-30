from trie_node import trie_node

class trie:
    def __init__(self):
        self.root = trie_node()
        
    def _char_index(self, char):
        if char.isupper():
            return ord(char) - ord('A')
        
        else:
            return ord(char) - ord('a')
        
    def insert(self, string):
        pointer = self.root
        
        for character in string:
            index = self._char_index(character)
            
            if not pointer.children[index]:
                return False
            
            pointer = pointer.children[index]
            
        return pointer and pointer.end_of_word
    
    def search(self, string):
        pointer = self.root
        
        for character in string:
            index = self._char_index(character)
            
            if not pointer.children[index]:
                return False
            
            pointer = pointer.children[index]
    
        return pointer and pointer.end_of_word