class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}

    def get_score(self, person):
        if person in self.scores:
            print('Essa "score" já foi calculada!')
            return self.scores[person]

        this_score = 1

        if person in self.subordinates:
            for subordinate in self.subordinates[person]:
                this_score += self.get_score(subordinate)
        self.scores[person] = this_score

        return this_score
    # Complexidade O(n)

    def add_subordinate(self, person, subordinate):
        if person in self.subordinates:
            self.subordinates[person].append(subordinate)
        else:
            self.subordinates[person] = [subordinate]

        self.update_scores(person)
    # Complexidade O(n)

    def update_scores(self, person):
        if person not in self.subordinates:
            return

        for subordinate in self.subordinates[person]:
            self.update_scores(subordinate)

        self.scores.pop(person, None)
        self.get_score(person)
    # Complexidade O(n)


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    hierarchy = Hierarchy(subordinates)

    print(hierarchy.get_score(1))
    print(hierarchy.get_score(2))
    print(hierarchy.get_score(3))
    print(hierarchy.get_score(4))
    print(hierarchy.get_score(5))
    print(hierarchy.get_score(6))
    print(hierarchy.get_score(7))

    hierarchy.add_subordinate(4, 8)

    print(hierarchy.get_score(4))
    print(hierarchy.get_score(8))
