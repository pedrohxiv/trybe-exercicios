def count_students_in_library(entries, exits, target_instant):
    students_present = 0
    for i in range(len(entries)):
        if entries[i] <= target_instant and target_instant <= exits[i]:
            students_present += 1
    return students_present

# Complexidade de Tempo: O(n)
