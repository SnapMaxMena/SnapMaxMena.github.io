# AI Native Engineering

## Brief Overview
This note covers AI Engineering and was created from the YouTube video: **From Writing Code to Managing Agents. Most Engineers Aren't Ready | Stanford University, Mihail Eric**.

It addresses the transition from programming to managing agents, the skills gap for junior engineers, incremental orchestration strategies, and the vision of AI-native organizations.

### Key Points
* Definition and key competencies of an AI native engineer.
* Current situation and challenges for junior engineers facing massive AI adoption.
* Step-by-step approaches to orchestrate agents and manage context between them.
* Perspective of AI-native organizations and agent collaboration.

---

## AI Native Engineer

**Definition:** An AI native engineer is one who combines a solid foundation in traditional programming, systems design, and algorithmic thinking with the competence to create and manage AI agent-based workflows.

* Masters conventional languages and tools.
* Handles agents as a "new language" of development.
* Can act as a manager of multiple agents, not just an individual developer.

---

## Current situation of junior engineers

**Problem:** The combination of oversupply of CS graduates, massive workforce layoffs, and accelerated AI adoption has notably reduced opportunities for newly graduated engineers.

* **2021:** Major wave of hiring followed by 20-30% workforce layoffs.
* **Graduate growth:** The number of CS graduates has doubled or tripled in the last decade.
* **AI impact:** Companies prefer to hire few AI-native talents who cover more functions, displacing candidates with only traditional knowledge.

---

## Agent orchestration by top 1% engineers

### 1. Incremental approach
* Start with one agent that performs a complete and reliable task.
* Add secondary agents only when the first is stable and the new task is isolated (e.g., updating a logo, modifying header copy).
* Progress step by step: $1 \rightarrow 2 \rightarrow 3$ agents, verifying quality at each phase.

### 2. Context switching
* **Key skill:** *Switching* context between multiple agents, maintaining memory of the previous task and clear direction to move forward.
* Monitor output from each agent in the terminal or IDE.
* Document which agent is working on which sub-task.
* Apply human management techniques to agent handling.

### 3. Agent-friendly code

| Feature | Description |
| :--- | :--- |
| **Test contracts** | Tests that act as correctness contracts; agents only operate on code with sufficient coverage. |
| **README-code coherence** | Avoid misalignments between documentation and code; agents should receive a single source of truth. |
| **Uniform design patterns** | Consistent use of APIs and patterns avoids agent confusion about which implementation to choose. |
| **Linting and formatting** | Guarantees uniform style and structure, facilitating agent interpretation. |

* **Prevention of compound errors:** A misunderstanding in the first iteration can multiply; that's why the agent's first look should be at robust, well-tested code.

---

## Functional software vs. "incredible" software

| Aspect | Functional software | "Incredible" software |
| :--- | :--- | :--- |
| **Approach** | Meets defined requirements and passes tests. | Seeks aesthetic and experiential excellence beyond basic requirement. |
| **Motivation** | Satisfy the minimum specification. | Go beyond for taste, extra credit, or own product vision. |
| **Typical result** | Stable and usable product. | Product with additional features, often used as basis for startups or personal projects. |
| **Student example** | Complete five mandatory flows. | Add extra flows, refactor, launch a commercial version. |

* **Software taste:** Develops with practice and willingness to go beyond perfect score.
* **Experimentation:** Crucial to move from "functional" to "incredible"; involves iteration, feedback, and reworking.

---

## Why junior engineers are still necessary
* **Sponge mentality:** Newcomers aren't "marked" by negative experiences and are willing to try new solutions.
* **Adaptability:** Learn AI tools quickly and can apply emerging skills with greater agility than seniors resistant to change.
* **Breakthrough thinking:** Their *naïveté* allows them to tackle complex problems without preconceptions.
* **Conceptual foundation:** CS education provides decomposition and algorithmic problem-solving mindset.

---

## Vision of AI-native organizations
**Concept:** An AI-native organization integrates AI directly into the product, removing humans from most customer interaction loops.

* **Intelligence allocation:** Not just use AI as a tool, but embed it to do the work with the user.
* **Collaboration between AIs:** Open questions about how agents can communicate and cooperate, potentially creating trillion-dollar companies by answering that challenge.