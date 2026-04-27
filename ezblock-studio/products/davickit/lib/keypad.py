
KEYS = ["1","2","3","A",
        "4","5","6","B",
        "7","8","9","C",
        "*","0","#","D"]

def key_read(rowspins, colspins):
    pressed_keys = []
    for i, row in enumerate(rowspins):
        row.high()
        for j, col in enumerate(colspins):
            index = i * len(colspins) + j
            if (col.value() == 1):
                pressed_keys.append(KEYS[index])
        row.low()
    return pressed_keys
 