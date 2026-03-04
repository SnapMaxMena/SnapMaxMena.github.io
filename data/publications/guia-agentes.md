
# Guia sobre agentes

### Puntos clave
* La estructura básica de un archivo AGENTS.md. 
* Requisitos de estilo, como tipo de hints y CamelCase (requisitos de estilo). 
* Ejemplos de código correcto e incorrecto para reforzar las normas. 
* Directrices de seguridad para evitar comandos peligrosos (seguridad). 

---

## Visión general de Agents MD
**Agents MD** es un formato abierto en Markdown para guiar a los agentes de IA (especialmente agentes de codificación) sin importar la herramienta o proveedor que se utilice. , 

* **Vendor-agnostic**: funciona con Cursor, Claude, Gemini, etc. 
* Permite definir reglas y contexto centralizado que los agentes respetarán en cada conversación. 

### Qué es Agents MD y cómo se diferencia de no usarlo

| Sin Agents MD | Con Agents MD |
| :--- | :--- |
| Se pasa solo el archivo objetivo (ej. utils.py).  | Se crea agents.md que contiene reglas reutilizables.  |
| El agente no conoce estilo ni herramientas específicas (ej. uso de uv).  | Las reglas dictan type hints, camelCase, comandos correctos, etc.  |
| Cada conversación requiere volver a especificar el contexto.  | Un único archivo provee contexto implícito en todas las interacciones.  |
| Mayor probabilidad de generar código inconsistente o erróneo.  | Consistencia y cumplimiento de normas de proyecto.  |

---

## Ejemplo de proyecto sample-project
* **Framework**: Django (Python 3.12+). 
* **Comando de inicio**: `uv run manage.py runserver` , 
* **Módulos clave**: `mathematics/`, `utils.py` con funciones matemáticas como: 
    * Cálculo del n-ésimo número de Fibonacci $F_{n}$ 
    * Exportación de resultados a PDF. 

### Implementación de una función sin reglas (sin agents.md)
**Prompt al modelo**: "Implementa una función que calcule el n-ésimo número de Lucas $L_{n}$". 
**Resultado**: función creada sin type hints ni estilo acordado. 

```python
def lucas (n):
    # implementación...
    return result

```



---

## Uso de Agents MD para imponer type hints y estilo

1. Crear **agents.md** en el directorio raíz. 


2. Añadir regla básica: **Regla: Siempre usar type hints, especialmente en archivos utils.py.** 


3. Ejecutar el mismo prompt (sin volver a cargar agents.md). 


4. El agente genera: 



```python
def lucas (n: int) -> int:
    # implementación....
    return result

```



**Observación**: aunque el archivo agents.md no se pasa explícitamente como contexto, el agente lo reconoce automáticamente. 

---

## Buenas prácticas para Agents MD

* **Regla 1**: Colocar comandos al inicio del archivo. ß

* **Regla 2**: Usar ejemplos (código correcto e incorrecto) en lugar de descripciones largas. ß

* **Regla 3**: Especificar versiones exactas del stack (Python 3.12+, UV, SQLite 3, etc.). ß

* **Regla 4**: Incluir la estructura del proyecto (árbol de archivos). ß

* **Regla 5**: Definir límites de seguridad (no usar rm, prohibir comandos Git). ß


### Tabla resumida

| Categoría | Recomendación | Ejemplo |
| --- | --- | --- |
| Comandos | Listar al comienzo | <br>`uv run manage.py migrate` |
| Estilo | Mostrar buen/malo ejemplo | <br>`def calcular_suma(a: int, b: int)` |
| Stack | Versiones precisas | Python > 3.12, UV 0.4.0 |
| Estructura | Incluir tree (2 niveles) | <br>`project/app1/ utils.py` |
| Seguridad | Prohibir rm, git | "Never execute rm or any Git command." |

---

## Estructura típica de un archivo agents.md

# Agents MD

## Project Overview

**Stack**: Python 3.12+, UV, Django, SQLite 3 **Commands**: All commands must be prefixed with `uv run` 

## Coding Conventions

* **Type hints** mandatory in `utils.py` 

* **CamelCase** for function names 

* Blank line between each statement 



## Examples

### Correct

```python
def calcularFactorial (n: int) -> int:
    if n == 0:
        return 1
    return n * calcularFactorial(n - 1)

```



### Incorrect

```python
def calcularfactorial(n):
    if n==0: return 1
    return n*calcularfactorial(n-1)

```



### Boundaries

* No `rm` commands 


* No Git operations 



---

## Combinar varios agents.md

* **Archivo raíz**: reglas generales (type hints, camelCase). 

* **Archivo específico** (ej. `mathematics/agents.md`): reglas más granulares, por ejemplo: *No usar type hints en este sub-directorio*. 



El agente evalúa ambas fuentes, priorizando las reglas más locales. 

## Límites y seguridad

Incluir directrices explícitas para evitar acciones peligrosas: 

* "**Never delete files** with rm." 


* "**Never execute Git commands** (commit, push, pull)." 



> 
> *Nota*: Los agentes pueden ignorar estos límites si la petición directa los contradice, pero sirven como recordatorio. 
> 
> 

---

## Casos de uso comunes

* **Configuraciones de Docker** y **UV** con versiones exactas. 

* **Integración de Tailwind** en proyectos Vite + React (especificar versiones y comandos de instalación). 

* **Pruebas automáticas** y guías de contribución (archivos `contribution.md`). 

## Resumen de conceptos clave

* **Agents MD**: archivo Markdown que centraliza reglas para agentes de IA. 

* **Vendor-agnostic**: funciona con cualquier herramienta de IA. 

* **Reglas**: estilo de código, comandos, versiones, límites de seguridad. 

* **Ejemplos vs. Descripciones**: los ejemplos son más efectivos para que el agente aprenda. 

* **Combinar archivos**: permite reglas globales y locales según el directorio. 
