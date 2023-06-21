def match_score(choices, guesses):
    return max(choices.difference(guesses))
# Complexidade O(len(s))


def score_reducer(choices, guesses):
    return min(choices.difference(guesses))
# Complexidade O(len(s))


def individual_score(choices, guesses):
    return match_score(
        set(choices), set(guesses)
    ) - score_reducer(
        set(choices), set(guesses)
    )
# Complexidade O(len(s) + len(t))


def who_won_bluff(plays):
    players = list(plays.keys())

    first_score = individual_score(
        plays[players[0]], plays[players[1]]
    )
    second_score = individual_score(
        plays[players[1]], plays[players[0]]
    )

    if first_score > second_score:
        return players[0]
    elif first_score < second_score:
        return players[1]
    else:
        return None
# Complexidade O(len(s) + len(t))


input_data = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

winner = who_won_bluff(input_data)

if winner:
    print(f"The winner is: {winner} ")
else:
    print("It's a tie")
