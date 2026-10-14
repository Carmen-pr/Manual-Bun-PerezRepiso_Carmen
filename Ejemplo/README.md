# Manual de Bun

Manual de arranque de **Bun**, un entorno de ejecución de JavaScript y TypeScript que incluye también gestor de paquetes y ejecutor de tests. Este repositorio contiene el manual y el código del ejemplo que lo acompaña.

- **Autora:** Carmen Pérez Repiso
- **Curso:** 2.º DAW
- **Módulo:** OPT
- **Fecha:** 13 de octubre de 2026

## Qué hay en el repositorio

```
manual-bun-perez/
├── README.md                  <- este archivo
├── manual-bun-perez.pdf       <- el manual completo
└── ejemplo/
    ├── tarea.ts               <- el programa de ejemplo
    ├── index.ts               <- archivo de prueba que crea "bun init"
    ├── package.json
    ├── tsconfig.json
    ├── bun.lock
    └── .gitignore
```

## Qué hace el ejemplo

`tarea.ts` es un programa muy sencillo: tiene una lista con tres tecnologías (Node.js, Deno y Bun) y escribe un mensaje por cada una en la terminal. Al final muestra la versión de Bun que lo está ejecutando. Sirve para comprobar que Bun ejecuta TypeScript directamente, sin compilar nada antes.

## Cómo ejecutarlo

Solo necesitas una terminal y conexión a internet. No hace falta tener Node.js instalado ni crearse ninguna cuenta.

### 1. Instalar Bun

En **Windows** (PowerShell):

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

En **macOS o Linux**:

```bash
curl -fsSL https://bun.sh/install | bash
```

Cuando termine, cierra la terminal y ábrela otra vez. Comprueba que Bun funciona:

```bash
bun --version
```

Debería salir un número de versión (yo usé la 1.4.3). Si dice que no reconoce el comando `bun`, cierra la terminal y vuelve a abrirla; si sigue igual, repite la instalación.

### 2. Descargar el repositorio

```bash
git clone https://github.com/TU-USUARIO/manual-bun-perez.git
cd manual-bun-perez/ejemplo
```

Si no usas Git, también puedes descargar el repositorio como ZIP desde GitHub (botón verde **Code**, opción **Download ZIP**), descomprimirlo y abrir una terminal dentro de la carpeta `ejemplo`.

### 3. (Opcional) Instalar las dependencias

El ejemplo no necesita ninguna librería para funcionar, pero el proyecto lleva dos paquetes de ayuda para el editor (`@types/bun` y `typescript`). Si quieres instalarlos:

```bash
bun install
```

### 4. Ejecutar el programa

```bash
bun run tarea.ts
```

## Qué debería salir

```
--- PROBANDO LA VELOCIDAD DE BUN ---
1. Aprendiendo a usar: Node.js
2. Aprendiendo a usar: Deno
3. Aprendiendo a usar: Bun
-------------------------------------
¡Prueba completada con éxito usando Bun v1.4.3!
```

La última línea muestra la versión de Bun que tengas instalada, así que el número puede ser distinto del de este ejemplo.

Para comprobar que funciona de verdad, abre `tarea.ts`, cambia uno de los nombres de la lista, guarda y vuelve a ejecutar el comando: el mensaje cambia.

## Si algo falla

| Problema | Qué hacer |
|---|---|
| `bun` no se reconoce como comando | Cierra la terminal y ábrela de nuevo. Si sigue igual, vuelve a ejecutar el comando de instalación. |
| `No such file` o `Module not found` | Comprueba que estás dentro de la carpeta `ejemplo` (`cd ejemplo`) antes de ejecutar `bun run tarea.ts`. |
| La instalación no descarga nada | Revisa tu conexión a internet y que la terminal no esté bloqueada por un proxy o un antivirus. |

## Enlaces útiles

- Web oficial de Bun: https://bun.sh
- Documentación oficial: https://bun.sh/docs
- Guía de instalación: https://bun.sh/docs/installation
- Repositorio de Bun: https://github.com/oven-sh/bun
