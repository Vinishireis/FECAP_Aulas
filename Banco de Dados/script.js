// Armazena as questões em um módulo separado para melhor organização
const QuizQuestions = {
  questions: [
    {
      id: "q1",
      text: "1. No Modelo Entidade-Relacionamento (MER), quando uma entidade pode assumir diferentes formas com atributos distintos (como Pessoa Física ou Jurídica), isso caracteriza:",
      options: [
        "Atributo composto",
        "Auto-relacionamento",
        "Entidade fraca",
        "Especialização",
        "Relacionamento de grau 3",
      ],
      answer: "Especialização",
      explanation:
        "Especialização é um conceito do MER que permite que uma entidade (superclasse) tenha subtipos (subclasses) com atributos específicos.",
    },
    {
      id: "q2",
      text: "2. Qual comando SQL é correto para adicionar uma nova coluna estado_federativo do tipo CHAR(2) na tabela lotacao?",
      options: [
        "UPDATE TABLE lotacao add column estado_federativo char(2);",
        "ALTER TABLE lotacao add column estado_federativo char(2);",
        "ALTER TABLE lotacao INSERT column estado_federativo char(2);",
        "UPDATE TABLE lotacao INSERT column estado_federativo char(2);",
        "ALTER TABLE lotacao where column estado_federativo char(2);",
      ],
      answer: "ALTER TABLE lotacao add column estado_federativo char(2);",
      explanation:
        "O comando correto para adicionar uma coluna é ALTER TABLE com a cláusula ADD COLUMN.",
    },
    {
      id: "q3",
      text: "3. Sobre entidades fracas no MER, marque a alternativa correta:",
      options: [
        "Não possuem atributos",
        "São representadas com elipses duplas",
        "São entidades com chave primária composta por chave estrangeira",
        "São delimitadas com linhas duplas",
        "A chave primária é sempre multivalorada",
      ],
      answer: "São delimitadas com linhas duplas",
      explanation:
        "Entidades fracas são representadas com retângulos de linhas duplas no diagrama ER.",
    },
    {
      id: "q4",
      text: "4. Qual das seguintes opções descreve corretamente um atributo multivalorado?",
      options: [
        "Pode conter valores numéricos ou literais",
        "Pode conter um conjunto de valores para a mesma instância",
        "É um campo do tipo VARCHAR",
        "É sempre um identificador",
        "Representa relacionamentos de N:N",
      ],
      answer: "Pode conter um conjunto de valores para a mesma instância",
      explanation:
        "Atributos multivalorados podem armazenar múltiplos valores para uma única entidade.",
    },
    {
      id: "q5",
      text: "5. Qual é a principal diferença entre uma Trigger e uma Stored Procedure?",
      options: [
        "A trigger é chamada manualmente, a procedure é automática",
        "A procedure roda com eventos de banco, a trigger só roda se for chamada",
        "A trigger é automática e a procedure é chamada manualmente",
        "Ambas são idênticas, só mudam de nome",
        "A procedure é usada para backups automáticos",
      ],
      answer: "A trigger é automática e a procedure é chamada manualmente",
      explanation:
        "Triggers são executadas automaticamente em resposta a eventos, enquanto procedures precisam ser chamadas explicitamente.",
    },
    {
      id: "q6",
      text: "6. A Stored Procedure é usada para:",
      options: [
        "Registrar logs automaticamente",
        "Fazer backup do banco de dados",
        "Criar índices",
        "Encapsular SQL em um bloco executável",
        "Criar visualizações automáticas",
      ],
      answer: "Encapsular SQL em um bloco executável",
      explanation:
        "Stored Procedures permitem encapsular operações SQL em rotinas que podem ser chamadas e reutilizadas.",
    },
    {
      id: "q7",
      text: "7. No relacionamento entre MECÂNICO e CARRO:\n- Um mecânico pode atender vários carros (ou nenhum)\n- Um carro deve ser atendido por pelo menos um mecânico\nQual é a cardinalidade correta?",
      options: [
        "mecânico (1,N) -------- (0,1) carro",
        "mecânico (0,N) -------- (1,N) carro",
        "mecânico (1,N) -------- (1,N) carro",
        "mecânico (0,N) -------- (0,N) carro",
        "mecânico (0,N) -------- (1,N) carro",
      ],
      answer: "mecânico (0,N) -------- (1,N) carro",
      explanation:
        "A cardinalidade (0,N) para mecânico indica que pode não atender nenhum carro, e (1,N) para carro indica que deve ter pelo menos um mecânico.",
    },
    {
      id: "q8",
      text: "8. Qual das seguintes opções representa corretamente uma entidade fraca no MER?",
      options: [
        "Possui atributo-chave próprio independente",
        "É sempre multivalorada",
        "Está ligada a outra entidade por dependência e tem retângulo de linha dupla",
        "Representa um relacionamento ternário",
        "É usada para herança de atributos",
      ],
      answer:
        "Está ligada a outra entidade por dependência e tem retângulo de linha dupla",
      explanation:
        "Entidades fracas não possuem chave própria e dependem de outra entidade. São representadas com retângulo de linha dupla.",
    },
    {
      id: "q9",
      text: "9. Sobre atributos compostos, assinale a alternativa correta:",
      options: [
        "Podem conter múltiplos valores para uma única entidade",
        "São divididos em subpartes, como “Nome Completo” em “Nome” e “Sobrenome”",
        "São utilizados para criar relacionamentos N:N",
        "São exclusivos de entidades fracas",
        "Não podem coexistir com atributos atômicos",
      ],
      answer:
        "São divididos em subpartes, como “Nome Completo” em “Nome” e “Sobrenome”",
      explanation:
        "Atributos compostos podem ser decompostos em partes menores, como endereço (rua, cidade, estado).",
    },
    {
      id: "q10",
      text: "10. A representação de um relacionamento no diagrama ER é feita por meio de:",
      options: [
        "Elipse dupla",
        "Retângulo",
        "Linha contínua",
        "Losango",
        "Triângulo",
      ],
      answer: "Losango",
      explanation:
        "Relacionamentos são representados por losangos em diagramas Entidade-Relacionamento.",
    },
    {
      id: "q11",
      text: "11. Em SQL, o comando para criar uma *view* que agrupe dados de múltiplas tabelas é:",
      options: [
        "CREATE INDEX",
        "CREATE TABLE",
        "CREATE VIEW",
        "GROUP BY VIEW",
        "CREATE PROCEDURE",
      ],
      answer: "CREATE VIEW",
      explanation:
        "`CREATE VIEW` é o comando utilizado para criar uma visão (view) que pode combinar dados de várias tabelas com `JOIN`.",
    },
    {
      id: "q12",
      text: "12. Em um DER, o relacionamento N:N entre duas entidades deve ser representado no modelo relacional por:",
      options: [
        "Um campo do tipo array",
        "Um campo multivalorado",
        "Uma tabela associativa com chaves estrangeiras de ambas as entidades",
        "Uma trigger que junta os dados dinamicamente",
        "Um campo com chave composta",
      ],
      answer:
        "Uma tabela associativa com chaves estrangeiras de ambas as entidades",
      explanation:
        "Relacionamentos muitos-para-muitos (N:N) exigem uma tabela associativa com duas FKs, formando uma chave primária composta.",
    },
    {
      id: "q13",
      text: "13. No SQL, para retornar apenas os clientes que não possuem apólices, usa-se qual tipo de JOIN?",
      options: [
        "INNER JOIN",
        "LEFT JOIN com IS NULL",
        "RIGHT JOIN",
        "FULL JOIN",
        "CROSS JOIN",
      ],
      answer: "LEFT JOIN com IS NULL",
      explanation:
        "Um LEFT JOIN com WHERE apolice IS NULL retorna os clientes que não têm apólices associadas.",
    },
    {
      id: "q14",
      text: "14. Em um banco de dados relacional, qual das opções abaixo representa uma cláusula usada para restringir o resultado de uma consulta?",
      options: ["GROUP BY", "JOIN", "WHERE", "HAVING", "SELECT"],
      answer: "WHERE",
      explanation:
        "A cláusula WHERE é utilizada para filtrar os registros retornados de uma consulta SQL com base em condições definidas.",
    },
    {
      id: "q15",
      text: "15. Qual comando SQL é utilizado para remover uma tabela do banco de dados permanentemente?",
      options: [
        "DELETE TABLE nome_tabela;",
        "REMOVE TABLE nome_tabela;",
        "DROP TABLE nome_tabela;",
        "ERASE TABLE nome_tabela;",
        "TRUNCATE TABLE nome_tabela;",
      ],
      answer: "DROP TABLE nome_tabela;",
      explanation:
        "DROP TABLE remove a estrutura da tabela e todos os dados armazenados nela permanentemente do banco de dados.",
    },
    {
      id: "q16",
      text: "16. Em um relacionamento 1:N entre duas entidades A e B, a chave estrangeira deve ser colocada em qual entidade?",
      options: [
        "Na entidade A",
        "Na entidade B",
        "Em ambas as entidades",
        "Em uma nova tabela intermediária",
        "Apenas se houver atributos compostos",
      ],
      answer: "Na entidade B",
      explanation:
        "Em um relacionamento 1:N, a chave estrangeira da entidade do lado 1 é inserida na tabela da entidade do lado N.",
    },
    {
      id: "q17",
      text: "17. Qual das opções representa um comando SQL usado para modificar dados existentes em uma tabela?",
      options: ["INSERT", "ALTER", "UPDATE", "CREATE", "SELECT"],
      answer: "UPDATE",
      explanation:
        "O comando UPDATE é usado para modificar registros existentes em uma tabela com base em uma condição.",
    },
    {
      id: "q18",
      text: "18. Qual tipo de atributo em um diagrama ER pode ser representado por uma elipse com uma linha tracejada?",
      options: [
        "Atributo composto",
        "Atributo identificador",
        "Atributo derivado",
        "Atributo multivalorado",
        "Atributo chave estrangeira",
      ],
      answer: "Atributo derivado",
      explanation:
        "Atributos derivados são representados com elipses tracejadas e são calculados a partir de outros atributos.",
    },
    {
      id: "q19",
      text: "19. Em SQL, o que o comando `GROUP BY` permite fazer?",
      options: [
        "Combinar colunas de diferentes tabelas",
        "Filtrar registros por condição",
        "Agrupar registros com base em um ou mais campos",
        "Ordenar os dados retornados",
        "Eliminar registros duplicados",
      ],
      answer: "Agrupar registros com base em um ou mais campos",
      explanation:
        "O comando GROUP BY agrupa os registros com base em um ou mais campos para que funções de agregação possam ser aplicadas.",
    },
    {
      id: "q20",
      text: "20. Qual das alternativas corresponde a uma boa prática de normalização em banco de dados relacional?",
      options: [
        "Repetir o máximo de dados possíveis para garantir consistência",
        "Guardar todos os dados em uma única tabela para evitar joins",
        "Eliminar dependências funcionais parciais",
        "Utilizar campos multivalorados para reduzir número de tabelas",
        "Evitar chaves estrangeiras para facilitar a inserção de dados",
      ],
      answer: "Eliminar dependências funcionais parciais",
      explanation:
        "Uma das metas da normalização é eliminar dependências funcionais parciais, especialmente na 2ª Forma Normal (2FN), para garantir integridade e evitar redundância.",
    },
  ],

  // Método para obter uma questão por ID
  getQuestionById(id) {
    return this.questions.find((q) => q.id === id);
  },

  // Método para obter o total de questões
  getTotalQuestions() {
    return this.questions.length;
  },
};

// Classe principal do Quiz
class DatabaseQuiz {
  constructor() {
    // Configurações
    this.settings = {
      totalTime: 600, // 10 minutos em segundos
      timeWarningThreshold: 60, // Alerta quando faltar 1 minuto
    };

    // Elementos DOM
    this.elements = {
      quizContainer: document.getElementById("quiz-container"),
      currentQuestion: document.getElementById("current-question"),
      totalQuestions: document.getElementById("total-questions"),
      progressFill: document.getElementById("progress-fill"),
      timer: document.getElementById("timer"),
      prevBtn: document.getElementById("prev-btn"),
      nextBtn: document.getElementById("next-btn"),
      checkAnswersBtn: document.getElementById("check-answers"),
      restartQuizBtn: document.getElementById("restart-quiz"),
      resultModal: document.getElementById("result-modal"),
      resultContent: document.getElementById("result-content"),
      modalClose: document.querySelector(".modal__close"),
    };

    // Estado do quiz
    this.state = {
      currentQuestionIndex: 0,
      userAnswers: {},
      timeLeft: this.settings.totalTime,
      timerInterval: null,
      quizCompleted: false,
    };

    // Inicialização
    this.init();
  }

  init() {
    this.elements.totalQuestions.textContent =
      QuizQuestions.getTotalQuestions();
    this.setupEventListeners();
    this.startTimer();
    this.renderQuestion();
  }

  renderQuestion() {
    const question = QuizQuestions.questions[this.state.currentQuestionIndex];
    this.elements.currentQuestion.textContent =
      this.state.currentQuestionIndex + 1;

    // Verifica se a questão já foi respondida
    const userAnswer = this.state.userAnswers[question.id];
    const feedback = this.getFeedbackForQuestion(question.id);

    this.elements.quizContainer.innerHTML = `
      <div class="question" data-id="${question.id}">
        <p>${question.text}</p>
        <div class="options">
          ${question.options
            .map(
              (option, index) => `
            <label class="option 
              ${userAnswer === option ? "selected" : ""} 
              ${
                this.state.quizCompleted && option === question.answer
                  ? "correct-answer"
                  : ""
              }">
              <input 
                type="radio" 
                name="${question.id}" 
                value="${option}" 
                ${userAnswer === option ? "checked" : ""}
                ${this.state.quizCompleted ? "disabled" : ""}
                data-index="${index}"
              >
              <span class="option-text">${option}</span>
              <span class="checkmark"></span>
            </label>
          `
            )
            .join("")}
        </div>
        ${
          feedback
            ? `<div class="feedback ${feedback.class}">${feedback.text}</div>`
            : ""
        }
        ${
          this.state.quizCompleted && question.explanation
            ? `<div class="explanation">📚 Explicação: ${question.explanation}</div>`
            : ""
        }
      </div>
    `;

    this.updateNavigationButtons();
    this.updateProgressBar();
  }

  getFeedbackForQuestion(questionId) {
    if (!this.state.quizCompleted) return null;

    const question = QuizQuestions.getQuestionById(questionId);
    const userAnswer = this.state.userAnswers[questionId];

    if (!userAnswer) {
      return {
        text: "❌ Você não selecionou uma resposta",
        class: "incorrect",
      };
    }

    if (userAnswer === question.answer) {
      return {
        text: "✅ Correto!",
        class: "correct",
      };
    }

    return {
      text: `❌ Incorreto. Resposta correta: ${question.answer}`,
      class: "incorrect",
    };
  }

  updateNavigationButtons() {
    this.elements.prevBtn.disabled = this.state.currentQuestionIndex === 0;
    this.elements.nextBtn.disabled =
      this.state.currentQuestionIndex === QuizQuestions.getTotalQuestions() - 1;
  }

  updateProgressBar() {
    const progress =
      ((this.state.currentQuestionIndex + 1) /
        QuizQuestions.getTotalQuestions()) *
      100;
    this.elements.progressFill.style.width = `${progress}%`;
  }

  startTimer() {
    clearInterval(this.state.timerInterval);
    this.updateTimerDisplay();

    this.state.timerInterval = setInterval(() => {
      this.state.timeLeft--;
      this.updateTimerDisplay();

      if (this.state.timeLeft <= 0) {
        clearInterval(this.state.timerInterval);
        this.checkAnswers();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;
    this.elements.timer.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Alerta visual quando o tempo estiver acabando
    if (this.state.timeLeft <= this.settings.timeWarningThreshold) {
      this.elements.timer.classList.add("warning");
    }
  }

  setupEventListeners() {
    // Navegação entre questões
    this.elements.prevBtn.addEventListener("click", () =>
      this.navigateToPreviousQuestion()
    );
    this.elements.nextBtn.addEventListener("click", () =>
      this.navigateToNextQuestion()
    );

    // Seleção de respostas
    this.elements.quizContainer.addEventListener("change", (e) =>
      this.handleAnswerSelection(e)
    );

    // Verificação de respostas
    this.elements.checkAnswersBtn.addEventListener("click", () =>
      this.checkAnswers()
    );

    // Modal
    this.elements.modalClose.addEventListener("click", () =>
      this.closeResultModal()
    );
    this.elements.restartQuizBtn.addEventListener("click", () =>
      this.restartQuiz()
    );

    // Fecha modal ao clicar fora
    window.addEventListener("click", (e) => {
      if (e.target === this.elements.resultModal) {
        this.closeResultModal();
      }
    });
  }

  navigateToPreviousQuestion() {
    if (this.state.currentQuestionIndex > 0) {
      this.state.currentQuestionIndex--;
      this.renderQuestion();
    }
  }

  navigateToNextQuestion() {
    if (
      this.state.currentQuestionIndex <
      QuizQuestions.getTotalQuestions() - 1
    ) {
      this.state.currentQuestionIndex++;
      this.renderQuestion();
    }
  }

  handleAnswerSelection(event) {
    if (event.target.type === "radio") {
      const questionId = event.target.name;
      this.state.userAnswers[questionId] = event.target.value;

      // Atualiza visualmente a seleção
      const labels = document.querySelectorAll(
        `.question[data-id="${questionId}"] .option`
      );
      labels.forEach((label) => label.classList.remove("selected"));
      event.target.closest("label").classList.add("selected");
    }
  }

  checkAnswers() {
    clearInterval(this.state.timerInterval);
    this.state.quizCompleted = true;

    const score = this.calculateScore();
    this.showResults(score);
    this.renderQuestion(); // Re-renderiza para mostrar feedback
  }

  calculateScore() {
    return QuizQuestions.questions.reduce((acc, question) => {
      return (
        acc + (this.state.userAnswers[question.id] === question.answer ? 1 : 0)
      );
    }, 0);
  }

  showResults(score) {
    const totalQuestions = QuizQuestions.getTotalQuestions();
    const percentage = Math.round((score / totalQuestions) * 100);

    this.elements.resultContent.innerHTML = `
      <div class="result-summary">
        <h3>Você acertou ${score} de ${totalQuestions} questões</h3>
        <div class="score-circle" style="--percentage: ${percentage}">
          <span>${percentage}%</span>
        </div>
        <p>${this.getPerformanceMessage(percentage)}</p>
      </div>
      <div class="result-details">
        <h4>Detalhes das respostas:</h4>
        <ul>
          ${QuizQuestions.questions
            .map((question, index) => {
              const userAnswer = this.state.userAnswers[question.id];
              const isCorrect = userAnswer === question.answer;

              return `
              <li class="${isCorrect ? "correct" : "incorrect"}">
                <strong>Questão ${index + 1}:</strong> ${question.text}
                <div class="user-answer">Sua resposta: ${
                  userAnswer || "Nenhuma"
                }</div>
                ${
                  !isCorrect
                    ? `<div class="correct-answer">Resposta correta: ${question.answer}</div>`
                    : ""
                }
                ${
                  question.explanation
                    ? `<div class="explanation">📚 Explicação: ${question.explanation}</div>`
                    : ""
                }
              </li>
            `;
            })
            .join("")}
        </ul>
      </div>
    `;

    this.elements.resultModal.style.display = "block";
  }

  getPerformanceMessage(percentage) {
    if (percentage >= 90)
      return "Excelente! Você domina o assunto de Banco de Dados!";
    if (percentage >= 70)
      return "Bom trabalho! Seus conhecimentos em BD são sólidos!";
    if (percentage >= 50)
      return "Você está no caminho certo! Revise os conceitos para melhorar.";
    return "Recomendamos estudar mais os fundamentos de Banco de Dados antes de tentar novamente.";
  }

  closeResultModal() {
    this.elements.resultModal.style.display = "none";
  }

  restartQuiz() {
    this.state = {
      currentQuestionIndex: 0,
      userAnswers: {},
      timeLeft: this.settings.totalTime,
      timerInterval: null,
      quizCompleted: false,
    };

    this.closeResultModal();
    this.elements.timer.classList.remove("warning");
    this.init();
  }
}

// Inicia o quiz quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new DatabaseQuiz();
});
