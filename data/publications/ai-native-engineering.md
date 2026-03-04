# Ingeniería AI Nativa

## Brief Overview
Esta nota cubre Ingeniería de IA y fue creada a partir del video de YouTube: **From Writing Code to Managing Agents. Most Engineers Aren't Ready | Stanford University, Mihail Eric**.

Aborda la transición de programar a gestionar agentes, la brecha de habilidades para ingenieros junior, estrategias de orquestación incremental, y la visión de organizaciones AI-nativas.

### Key Points
* Definición y competencias clave de un Ingeniero AI nativo.
* Situación actual y retos de los ingenieros junior ante la adopción masiva de IA.
* Enfoques paso a paso para orquestar agentes y manejar el contexto entre ellos.
* Perspectiva de las organizaciones AI-nativas y la colaboración entre agentes.

---

## Ingeniero AI nativo

**Definición:** Un Ingeniero AI nativo es aquel que combina una sólida base en programación tradicional, diseño de sistemas y pensamiento algorítmico con la competencia para crear y gestionar flujos de trabajo basados en agentes de IA.

* Domina lenguajes y herramientas convencionales.
* Maneja agentes como una "nueva lengua" del desarrollo.
* Puede actuar como gestor de múltiples agentes, no solo como desarrollador individual.

---

## Situación actual de los ingenieros junior

**Problema:** La combinación de sobreoferta de graduados en CS, recortes masivos de personal y la adopción acelerada de IA ha reducido notablemente las oportunidades para ingenieros recién graduados.

* **2021:** Gran oleada de contrataciones seguida de un despido del 20-30% de la fuerza laboral.
* **Crecimiento de graduados:** El número de titulados en CS se ha duplicado o triplicado en la última década.
* **Impacto de la IA:** Las empresas prefieren contratar pocos talentos AI-nativos que cubran más funciones, desplazando a candidatos con solo conocimientos tradicionales.

---

## Orquestación de agentes por ingenieros top 1%

### 1. Enfoque incremental
* Comenzar con un agente que realice una tarea completa y fiable.
* Añadir agentes secundarios solo cuando el primero esté estable y la nueva tarea sea aislada (p. ej., actualizar un logo, modificar el copy del encabezado).
* Progresar paso a paso: $1 \rightarrow 2 \rightarrow 3$ agentes, verificando la calidad en cada fase.

### 2. Cambio de contexto
* **Habilidad clave:** *Switching* de contexto entre varios agentes, manteniendo la memoria de la tarea previa y la dirección clara para avanzar.
* Monitorear la salida de cada agente en la terminal o IDE.
* Documentar cuál agente está trabajando en qué sub-tarea.
* Aplicar técnicas de gestión humana al manejo de agentes.

### 3. Código amigable a agentes

| Característica | Descripción |
| :--- | :--- |
| **Contratos de prueba** | Tests que actúan como contratos de corretitud; los agentes solo operan sobre código con cobertura suficiente. |
| **Coherencia README-código** | Evitar desalineaciones entre documentación y código; los agentes deben recibir una única fuente de verdad. |
| **Patrones de diseño uniformes** | Uso consistente de APIs y patrones evita confusión al agente sobre qué implementación elegir. |
| **Linting y formato** | Garantiza estilo y estructura uniformes, facilitando la interpretación del agente. |

* **Prevención de errores compuestos:** Un malentendido en la primera iteración puede multiplicarse; por eso el primer vistazo del agente debe ser a un código robusto y bien testeado.

---

## Software funcional vs. software "increíble"

| Aspecto | Software funcional | Software "increíble" |
| :--- | :--- | :--- |
| **Enfoque** | Cumple los requisitos definidos y pasa los tests. | Busca excelencia estética y de experiencia más allá del requerimiento básico. |
| **Motivación** | Satisfacer la especificación mínima. | Ir más allá por sabor, extra credit, o visión de producto propio. |
| **Resultado típico** | Producto estable y utilizable. | Producto con features adicionales, a menudo usado como base para startups o proyectos personales. |
| **Ejemplo de estudiante** | Completar cinco flujos obligatorios. | Añadir flujos extra, refactorizar, lanzar una versión comercial. |

* **Taste (gusto) del software:** Se desarrolla con práctica y la voluntad de ir más allá del puntaje máximo.
* **Experimentación:** Crucial para pasar de "funcional" a "increíble"; implica iterar, recibir feedback y rehacer.

---

## Por qué sigue siendo necesario contar con ingenieros junior
* **Actitud de esponja:** Los recién llegados no están "marcados" por experiencias negativas y están dispuestos a intentar soluciones nuevas.
* **Adaptabilidad:** Aprenden rápidamente herramientas AI y pueden aplicar habilidades emergentes con mayor agilidad que seniores reacios al cambio.
* **Pensamiento de ruptura:** Su *naïveté* les permite abordar problemas complejos sin preconcepciones.
* **Base conceptual:** La educación CS provee la mentalidad de descomposición y solución algorítmica.

---

## Visión de organizaciones AI-nativas
**Concepto:** Una organización AI-nativa integra la IA directamente en el producto, eliminando al humano de la mayoría de los bucles de interacción con el cliente.

* **Asignación de inteligencia:** No solo usar IA como herramienta, sino embeberla para que realice el trabajo con el usuario.
* **Colaboración entre IAs:** Preguntas abiertas sobre cómo los agentes pueden comunicarse y cooperar, potencialmente creando empresas de valor trillón al responder ese desafío.