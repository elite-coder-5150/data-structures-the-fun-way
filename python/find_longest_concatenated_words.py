def find_longest_concatenated_word(words):
    def can_form_word(word, word_set):
        if word in word_set:
            return True
        
        for i in range(1, len(word)):
            prefix = word[:i]
            suffix = word[i:]
            
            if prefix in word_set and can_form_word(suffix, word_set):
                return True
            
        return False
    def search(self, word):
        pass
    # words.sort(key={search} x: len(x), reverse=True))
    
    word_set = set(words);
    result = [];
    
    for word in words:
        word_set.remove(word)
        
        if can_form_word(word, word_set):
            result.append(word)
        word_set.add(word)
    return result
    
    