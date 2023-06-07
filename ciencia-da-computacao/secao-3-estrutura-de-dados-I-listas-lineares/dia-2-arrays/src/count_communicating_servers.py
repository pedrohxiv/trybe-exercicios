def count_communicating_servers(servers):
    rows = len(servers)
    cols = len(servers[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_cols = [0 for _ in range(cols)]
    count = 0
    for i in range(rows):
        for j in range(cols):
            if servers[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_cols[j] += 1
    for i in range(rows):
        for j in range(cols):
            if servers[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_cols[j] > 1
            ):
                count += 1
    return count

# Complexidade de Tempo: O(n * m)
