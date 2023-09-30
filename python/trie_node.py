class trie_node:
    def __init__(self):
        self.children = [None] * 26
        self.end_of_word = False
        
    