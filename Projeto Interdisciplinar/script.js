// Armazena as questões em um módulo separado para melhor organização
const QuizQuestions = {
  questions: [
    {
      id: "q1",
      text: "1. Qual foi o principal objetivo inicial da ARPANET, precursora da internet moderna?",
      options: [
        "Criar uma rede social global",
        "Estabelecer comunicação militar resistente a ataques",
        "Desenvolver comércio eletrônico",
        "Transmitir programas de televisão",
        "Substituir o sistema telefônico",
      ],
      answer: "Estabelecer comunicação militar resistente a ataques",
      explanation:
        "A ARPANET foi criada em 1969 pela Advanced Research Projects Agency (ARPA) dos EUA com fins militares e acadêmicos, visando uma rede de comunicação segura durante a Guerra Fria.",
    },
    {
      id: "q2",
      text: "2. Qual a diferença fundamental entre 'Internet' e 'World Wide Web' (WWW)?",
      options: [
        "Internet é para negócios, WWW para entretenimento",
        "Internet é a infraestrutura física, WWW é um serviço que roda sobre ela",
        "São termos sinônimos",
        "Internet usa cabos, WWW é wireless",
        "WWW é mais antiga que a Internet",
      ],
      answer:
        "Internet é a infraestrutura física, WWW é um serviço que roda sobre ela",
      explanation:
        "A Internet é a rede global de computadores (hardware), enquanto a WWW é um sistema de informação que utiliza essa rede através de protocolos como HTTP.",
    },
    {
      id: "q3",
      text: "3. No desenvolvimento de um dashboard interativo, qual desses NÃO é um requisito funcional típico?",
      options: [
        "Exportar relatórios em PDF",
        "Tempo de carregamento menor que 2 segundos",
        "Filtrar dados por período",
        "Exibir gráficos em tempo real",
        "Integrar com Google Agenda",
      ],
      answer: "Tempo de carregamento menor que 2 segundos",
      explanation:
        "Tempo de carregamento é um requisito não funcional (desempenho), enquanto os outros são funcionais (ações que o sistema executa).",
    },
    {
      id: "q4",
      text: "4. Na jornada de Lucas para criar um dashboard, qual foi a solução adotada para atender necessidades diferentes de gerentes?",
      options: [
        "Dashboard único padronizado",
        "Interface principal simples + módulos específicos",
        "Relatórios manuais personalizados",
        "Apenas gráficos básicos",
        "Sistema sem filtros",
      ],
      answer: "Interface principal simples + módulos específicos",
      explanation:
        "Lucas optou por um design híbrido: uma interface principal com KPIs gerais e módulos complementares para necessidades específicas de cada gerente.",
    },
    {
      id: "q5",
      text: "5. Qual princípio de Arquitetura da Informação se refere a 'utilizar rótulos compreensíveis para os usuários'?",
      options: ["Organização", "Navegação", "Busca", "Rotulagem", "Hierarquia"],
      answer: "Rotulagem",
      explanation:
        "A Rotulagem é um dos 4 princípios da Arquitetura da Informação, focando em usar termos familiares aos usuários para identificar conteúdos/funcionalidades.",
    },
    {
      id: "q6",
      text: "6. Qual heurística de Nielsen recomenda 'oferecer opções como Desfazer para corrigir ações acidentais'?",
      options: [
        "Visibilidade do estado do sistema",
        "Liberdade e controle do usuário",
        "Consistência e padrões",
        "Prevenção de erros",
        "Reconhecimento em vez de recordação",
      ],
      answer: "Liberdade e controle do usuário",
      explanation:
        "Essa heurística garante que usuários possam reverter ações indesejadas, dando-lhes controle sobre o sistema.",
    },
    {
      id: "q7",
      text: "7. No Scrum, qual artefato contém a lista priorizada de funcionalidades a serem desenvolvidas?",
      options: [
        "Sprint Backlog",
        "Product Backlog",
        "Incremento",
        "Burndown Chart",
        "Canvas",
      ],
      answer: "Product Backlog",
      explanation:
        "O Product Backlog é a lista dinâmica e priorizada de todos os requisitos do produto, mantida pelo Product Owner.",
    },
    {
      id: "q8",
      text: "8. Qual prática do livro 'Não me faça pensar' recomenda evitar carrosséis e sliders em interfaces?",
      options: [
        "Focar no usuário",
        "Simplicidade",
        "Navegabilidade",
        "Feedback",
        "Objetividade",
      ],
      answer: "Simplicidade",
      explanation:
        "Elementos como carrosséis muitas vezes complicam a experiência. A simplicidade prioriza designs diretos e fáceis de usar.",
    },
    {
      id: "q9",
      text: "9. Para um dashboard eficaz, qual dessas NÃO é uma característica recomendada?",
      options: [
        "Atualização em tempo real",
        "Excesso de métricas na mesma tela",
        "Visualizações intuitivas",
        "Filtros interativos",
        "Layout limpo",
      ],
      answer: "Excesso de métricas na mesma tela",
      explanation:
        "Dashboards devem focar em métricas-chave (menos é mais). Poluição visual prejudica a usabilidade.",
    },
    {
      id: "q10",
      text: "10. Qual cerimônia do Scrum tem como objetivo identificar melhorias para a próxima iteração?",
      options: [
        "Daily Scrum",
        "Planejamento da Sprint",
        "Revisão da Sprint",
        "Retrospectiva",
        "Refinamento do Backlog",
      ],
      answer: "Retrospectiva",
      explanation:
        "A Retrospectiva ocorre ao final de cada sprint para analisar o que funcionou bem e o que pode ser melhorado.",
    },
    {
      id: "q11",
      text: "11. Qual foi o primeiro navegador a popularizar a internet comercial em 1995?",
      options: [
        "Internet Explorer",
        "Google Chrome",
        "Netscape Navigator",
        "Mozilla Firefox",
        "Opera",
      ],
      answer: "Netscape Navigator",
      explanation:
        "O Netscape Navigator foi lançado em 1994 e se tornou o primeiro navegador popular, impulsionando o uso comercial da internet.",
    },
    {
      id: "q12",
      text: "12. No caso de Lara e Aline, qual tecnologia a Aline menciona como base da internet moderna?",
      options: ["HTTP", "HTML", "TCP/IP", "CSS", "JavaScript"],
      answer: "TCP/IP",
      explanation:
        "Aline explica que a ARPANET evoluiu para a internet moderna através do protocolo TCP/IP, que ainda é usado hoje.",
    },
    {
      id: "q13",
      text: "13. Qual destes NÃO é um componente essencial de um dashboard interativo?",
      options: [
        "Gráficos dinâmicos",
        "KPIs em tempo real",
        "Editor de código embutido",
        "Filtros interativos",
        "Integração com fontes de dados",
      ],
      answer: "Editor de código embutido",
      explanation:
        "Editores de código não são componentes típicos de dashboards, que focam em visualização e análise de dados.",
    },
    {
      id: "q14",
      text: "14. Qual heurística de Nielsen é violada quando um sistema exibe mensagens de erro como 'Erro 404: Exceção não tratada'?",
      options: [
        "Correspondência com o mundo real",
        "Prevenção de erros",
        "Recuperação de erros",
        "Ajuda e documentação",
        "Visibilidade do estado do sistema",
      ],
      answer: "Correspondência com o mundo real",
      explanation:
        "Mensagens técnicas não correspondem à linguagem cotidiana dos usuários, violando o princípio de usar conceitos familiares.",
    },
    {
      id: "q15",
      text: "15. Na Arquitetura da Informação, qual fase envolve testes com usuários reais?",
      options: ["Pesquisa", "Análise", "Desenho", "Implementação", "Avaliação"],
      answer: "Avaliação",
      explanation:
        "A fase de avaliação testa a eficácia da estrutura com usuários reais para identificar melhorias.",
    },
    {
      id: "q16",
      text: "16. Qual era a principal preocupação do Gerente C no dashboard de Lucas?",
      options: [
        "Eficiência da produção",
        "Qualidade dos pneus",
        "Redução de custos",
        "Gestão de estoque",
        "Satisfação dos clientes",
      ],
      answer: "Redução de custos",
      explanation:
        "O Gerente C focava em indicadores como consumo de matéria-prima e custos operacionais.",
    },
    {
      id: "q17",
      text: "17. Qual destes é um requisito não funcional típico para sistemas web?",
      options: [
        "Cadastrar usuários",
        "Gerar relatórios em PDF",
        "Suportar 10.000 acessos simultâneos",
        "Integrar com redes sociais",
        "Permitir agendamento de posts",
      ],
      answer: "Suportar 10.000 acessos simultâneos",
      explanation:
        "Requisitos não funcionais definem COMO o sistema opera (desempenho, segurança), não O QUE ele faz.",
    },
    {
      id: "q18",
      text: "18. Qual princípio do livro 'Não me faça pensar' justifica evitar jargões técnicos?",
      options: [
        "Foco no usuário",
        "Simplicidade",
        "Navegabilidade",
        "Feedback",
        "Hierarquia visual",
      ],
      answer: "Foco no usuário",
      explanation:
        "Usar linguagem acessível demonstra foco nas necessidades reais do usuário final, não em termos técnicos.",
    },
    {
      id: "q19",
      text: "19. No Scrum, quem é responsável por priorizar o Product Backlog?",
      options: [
        "Scrum Master",
        "Product Owner",
        "Time de Desenvolvimento",
        "Stakeholders",
        "CEO",
      ],
      answer: "Product Owner",
      explanation:
        "O Product Owner (PO) é o responsável por maximizar o valor do produto e priorizar o backlog.",
    },
    {
      id: "q20",
      text: "20. Qual evento histórico permitiu que Tim Berners-Lee criasse a WWW em 1989?",
      options: [
        "Invenção do primeiro computador",
        "Existência prévia da ARPANET e TCP/IP",
        "Lançamento do Windows 95",
        "Popularização dos smartphones",
        "Crise econômica de 2008",
      ],
      answer: "Existência prévia da ARPANET e TCP/IP",
      explanation:
        "Berners-Lee aproveitou a infraestrutura existente (ARPANET/TCP/IP) para desenvolver a WWW no CERN.",
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
      totalTime: 1200, // 20 minutos em segundos
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
      return "Excelente! Você domina os conceitos de Projeto Interdisciplinar! 👏";
    if (percentage >= 70)
      return "Bom trabalho! Seu entendimento sobre integração de disciplinas está muito bom!";
    if (percentage >= 50)
      return "Você está no caminho certo! Revise os casos práticos (como o dashboard de Lucas) para melhorar.";
    return "Recomendamos revisar os materiais das aulas interdisciplinares antes de tentar novamente. Foque em: Scrum, Arquitetura da Informação e levantamento de requisitos.";
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
