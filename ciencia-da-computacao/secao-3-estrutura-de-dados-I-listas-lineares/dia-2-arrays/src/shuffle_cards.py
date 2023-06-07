def shuffle_cards(cards):
    shuffled_cards = []
    mid_index = len(cards) // 2
    for index in range(mid_index):
        shuffled_cards.extend(cards[index::mid_index])
    return shuffled_cards

# Complexidade de Tempo: O(n)
