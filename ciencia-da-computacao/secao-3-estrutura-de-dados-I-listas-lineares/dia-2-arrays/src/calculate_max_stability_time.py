def calculate_max_stability_time(collected_values):
    max_stability_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_stability_time:
            max_stability_time = current_time
    return max_stability_time

# Complexidade de Tempo: O(n)
