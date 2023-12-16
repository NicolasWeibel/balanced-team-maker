from itertools import combinations

# Lista de personas numeradas del 1 al 10
personas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Generar todas las combinaciones de equipos de 5 personas
combinaciones = list(combinations(personas, 5))

# Imprimir las primeras 10 combinaciones como ejemplo
for i in range(255):
    print(f"Combinación {i+1}: {combinaciones[i]}")
