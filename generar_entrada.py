from datetime import datetime

titulo = input("Título de la entrada: ")
contenido = input("Contenido (simulado por IA): ")

fecha = datetime.today().strftime("%Y-%m-%d")
nombre_archivo = f"_posts/{fecha}-{titulo.lower().replace(' ', '-')}.md"

with open(nombre_archivo, "w") as f:
    f.write(f"""---
layout: default
title: "{titulo}"
date: {fecha}
---

{contenido}
""")

print(f"Entrada creada: {nombre_archivo}")
