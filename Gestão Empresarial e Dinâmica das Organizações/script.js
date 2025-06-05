// Armazena as questões em um módulo separado para melhor organização
const QuizQuestions = {
  questions: [
    {
      id: "q1",
      text: "1. A empresa 'Logística Rápida' está enfrentando atrasos na entrega devido a falhas na comunicação entre fornecedores e transportadoras. Qual conceito de gestão poderia resolver esse problema ao integrar todos os elos desde a matéria-prima até o consumidor final?",
      options: [
        "Cadeia de Suprimentos",
        "Marketing Digital",
        "Estrutura Matricial",
        "Gestão por Competências",
        "Plano Tático"
      ],
      answer: "Cadeia de Suprimentos",
      explanation: "A Cadeia de Suprimentos (Supply Chain) gerencia o fluxo integrado de materiais, informações e finanças desde os fornecedores até o cliente final, otimizando processos e reduzindo custos."
    },
    {
      id: "q2",
      text: "2. A 'Marca X' lançou um novo produto mas não está conseguindo atingir seu público-alvo. Qual estratégia de marketing seria mais adequada para identificar e satisfazer as necessidades específicas desse público?",
      options: [
        "Segmentação de Mercado",
        "Reengenharia Organizacional",
        "Benchmarking",
        "Gestão por Objetivos",
        "Análise SWOT"
      ],
      answer: "Segmentação de Mercado",
      explanation: "A segmentação divide o mercado em grupos com características homogêneas, permitindo desenvolver estratégias de marketing específicas para cada público-alvo."
    },
    {
      id: "q3",
      text: "3. A empresa 'Tech Solutions' está crescendo rapidamente, mas enfrenta conflitos entre departamentos devido à falta de clareza nas responsabilidades. Qual tipo de estrutura organizacional definiria melhor as hierarquias e fluxos de comunicação?",
      options: [
        "Estrutura Funcional",
        "Cadeia de Valor",
        "Marketing Mix",
        "Plano de Carreira",
        "Balanced Scorecard"
      ],
      answer: "Estrutura Funcional",
      explanation: "A estrutura funcional organiza a empresa por especialidades (departamentos), com hierarquia clara e linhas definidas de autoridade e responsabilidade."
    },
    {
      id: "q4",
      text: "4. O RH da 'Empresa Y' identificou baixo engajamento dos colaboradores. Qual abordagem de gestão de pessoas poderia aumentar a motivação através do desenvolvimento das habilidades individuais?",
      options: [
        "Gestão por Competências",
        "Logística Integrada",
        "Pesquisa de Mercado",
        "Departamentalização",
        "Plano Estratégico"
      ],
      answer: "Gestão por Competências",
      explanation: "A Gestão por Competências alinha as habilidades dos colaboradores com as necessidades da organização, promovendo desenvolvimento profissional e aumento de produtividade."
    },
    {
      id: "q5",
      text: "5. A 'Companhia Z' precisa definir sua visão de longo prazo para os próximos 5 anos. Qual ferramenta de gestão deveria utilizar para estabelecer objetivos globais e ações para alcançá-los?",
      options: [
        "Planejamento Estratégico",
        "Gestão da Cadeia de Suprimentos",
        "Posicionamento de Mercado",
        "Organograma Hierárquico",
        "Avaliação de Desempenho"
      ],
      answer: "Planejamento Estratégico",
      explanation: "O Planejamento Estratégico define a direção de longo prazo da organização, estabelecendo missão, visão, valores e planos de ação para alcançar objetivos globais."
    },
    {
      id: "q6",
      text: "6. A 'Distribuidora A' está com altos custos de estoque. Qual técnica da cadeia de suprimentos poderia ajudar a sincronizar a produção com a demanda real, reduzindo estoques?",
      options: [
        "Just in Time",
        "Marketing de Relacionamento",
        "Estrutura em Rede",
        "Treinamento e Desenvolvimento",
        "Análise PESTEL"
      ],
      answer: "Just in Time",
      explanation: "O Just in Time (JIT) é um sistema que produz e entrega itens no momento exato em que são necessários, reduzindo estoques e custos de armazenagem."
    },
    {
      id: "q7",
      text: "7. A 'Startup B' quer entender como posicionar seu novo aplicativo no mercado competitivo. Qual conceito de marketing analisa preço, produto, praça e promoção?",
      options: [
        "4Ps do Marketing",
        "Cadeia de Suprimentos",
        "Estrutura Divisional",
        "Clima Organizacional",
        "Plano Operacional"
      ],
      answer: "4Ps do Marketing",
      explanation: "Os 4Ps (Produto, Preço, Praça e Promoção) compõem o composto de marketing, ferramenta fundamental para o posicionamento estratégico de produtos/serviços."
    },
    {
      id: "q8",
      text: "8. A multinacional 'Global Corp' opera em diversos países com produtos diferentes. Qual estrutura organizacional permite autonomia por linha de produtos ou regiões geográficas?",
      options: [
        "Estrutura Divisional",
        "Supply Chain Management",
        "Endomarketing",
        "Plano de Sucessão",
        "Análise de Cenários"
      ],
      answer: "Estrutura Divisional",
      explanation: "A estrutura divisional organiza a empresa por produtos, mercados ou regiões geográficas, dando autonomia a cada divisão para tomar decisões específicas."
    },
    {
      id: "q9",
      text: "9. O departamento de RH da 'Empresa C' quer melhorar o recrutamento. Qual método avalia as habilidades, conhecimentos e atitudes necessárias para cada cargo?",
      options: [
        "Mapeamento de Competências",
        "Logística Reversa",
        "Pesquisa de Satisfação",
        "Centralização de Decisões",
        "Missão Organizacional"
      ],
      answer: "Mapeamento de Competências",
      explanation: "O mapeamento de competências identifica as habilidades técnicas e comportamentais necessárias para cada função, auxiliando em processos seletivos mais eficientes."
    },
    {
      id: "q10",
      text: "10. A 'Indústria D' precisa alinhar seus objetivos de crescimento com as mudanças no mercado. Qual ferramenta analisa fatores políticos, econômicos, sociais e tecnológicos?",
      options: [
        "Análise PESTEL",
        "Gestão de Estoques",
        "Marketing de Conteúdo",
        "Descentralização",
        "Avaliação 360°"
      ],
      answer: "Análise PESTEL",
      explanation: "A análise PESTEL examina fatores Políticos, Econômicos, Sociais, Tecnológicos, Ambientais e Legais que impactam a organização, auxiliando no planejamento estratégico."
    },
    {
      id: "q11",
      text: "11. A 'Indústria Alpha' está implementando um sistema que conecta automaticamente os pedidos de clientes com a produção e os fornecedores. Qual tecnologia da cadeia de suprimentos permite essa integração em tempo real?",
      options: [
        "EDI (Intercâmbio Eletrônico de Dados)",
        "Pesquisa de Mercado",
        "Organograma Matricial",
        "Avaliação 180°",
        "Plano de Contingência"
      ],
      answer: "EDI (Intercâmbio Eletrônico de Dados)",
      explanation: "O EDI permite a troca automatizada de documentos entre sistemas de diferentes empresas, integrando clientes, produção e fornecedores sem intervenção manual."
    },
    {
      id: "q12",
      text: "12. A 'Marca Beta' quer criar uma conexão emocional com seus clientes. Qual estratégia de marketing foca em construir relacionamentos de longo prazo através de experiências personalizadas?",
      options: [
        "Marketing de Relacionamento",
        "Just in Time",
        "Estrutura Geográfica",
        "Recrutamento Interno",
        "Análise de Break-even"
      ],
      answer: "Marketing de Relacionamento",
      explanation: "O Marketing de Relacionamento visa fidelizar clientes através de interações personalizadas e valor agregado, indo além das transações pontuais."
    },
    {
      id: "q13",
      text: "13. A 'Empresa Gama' precisa de flexibilidade para projetos inovadores com equipes multidisciplinares. Qual estrutura organizacional combina especialistas de diferentes departamentos temporariamente?",
      options: [
        "Estrutura Matricial",
        "Cadeia de Suprimentos Linear",
        "Marketing Viral",
        "Seleção por Competências",
        "Plano de Ação"
      ],
      answer: "Estrutura Matricial",
      explanation: "A estrutura matricial combina departamentalização funcional com equipes por projetos, permitindo flexibilidade e uso otimizado de recursos humanos."
    },
    {
      id: "q14",
      text: "14. O RH da 'Companhia Delta' identificou que 40% dos líderes se aposentarão nos próximos 5 anos. Qual processo de Gestão de Pessoas prepara colaboradores para assumir cargos-chave?",
      options: [
        "Plano de Sucessão",
        "Logística Integrada",
        "Posicionamento de Marca",
        "Centralização",
        "Objetivos SMART"
      ],
      answer: "Plano de Sucessão",
      explanation: "O Plano de Sucessão identifica e desenvolve talentos internos para garantir a continuidade em cargos estratégicos, reduzindo riscos de descontinuidade."
    },
    {
      id: "q15",
      text: "15. A 'Corporação Épsilon' quer medir o desempenho além dos financeiros. Qual ferramenta de planejamento estratégico equilibra indicadores financeiros, clientes, processos e aprendizado?",
      options: [
        "Balanced Scorecard",
        "RFID na Cadeia de Suprimentos",
        "Marketing de Conteúdo",
        "Descentralização",
        "Treinamento Cross-functional"
      ],
      answer: "Balanced Scorecard",
      explanation: "O Balanced Scorecard (BSC) traduz a estratégia em objetivos mensuráveis em 4 perspectivas: financeira, clientes, processos internos e aprendizado/crescimento."
    },
    {
      id: "q16",
      text: "16. A 'Logística Omega' quer reduzir custos ambientais. Qual prática da cadeia de suprimentos recupera produtos pós-consumo para reciclagem ou descarte adequado?",
      options: [
        "Logística Reversa",
        "Brand Equity",
        "Estrutura em Rede",
        "Job Rotation",
        "Análise de SWOT"
      ],
      answer: "Logística Reversa",
      explanation: "A Logística Reversa gerencia o fluxo inverso de produtos (do consumidor para o fabricante), atendendo exigências legais e sustentabilidade corporativa."
    },
    {
      id: "q17",
      text: "17. A 'Startup Zeta' quer aumentar seu reconhecimento de marca com conteúdo relevante no LinkedIn. Qual estratégia de marketing é mais adequada?",
      options: [
        "Marketing de Conteúdo",
        "Supply Chain Collaboration",
        "Departamentalização por Produto",
        "Avaliação de Desempenho",
        "Missão e Visão"
      ],
      answer: "Marketing de Conteúdo",
      explanation: "O Marketing de Conteúdo atrai e engaja o público-alvo através da criação/distribuição de conteúdo valioso (artigos, infográficos, vídeos), estabelecendo autoridade no setor."
    },
    {
      id: "q18",
      text: "18. A multinacional 'Kappa' opera em 20 países com culturas diversas. Qual tipo de estrutura organizacional permite adaptação local mantendo coordenação global?",
      options: [
        "Estrutura Transnacional",
        "Gestão de Estoques JIT",
        "Marketing Mix",
        "Plano de Carreira",
        "Análise PESTEL"
      ],
      answer: "Estrutura Transnacional",
      explanation: "A estrutura transnacional combina padronização global com adaptação local, ideal para empresas que precisam ser globalmente eficientes e localmente responsivas."
    },
    {
      id: "q19",
      text: "19. A 'Empresa Theta' implementou um programa onde colaboradores trocam de funções periodicamente. Qual técnica de Gestão de Pessoas está sendo utilizada?",
      options: [
        "Job Rotation",
        "Cadeia de Valor",
        "Marketing de Influência",
        "Downsizing",
        "Plano de Negócios"
      ],
      answer: "Job Rotation",
      explanation: "Job Rotation é a prática de mover colaboradores entre diferentes funções para desenvolver habilidades múltiplas, aumentar engajamento e preparar para promoções."
    },
    {
      id: "q20",
      text: "20. A 'Indústria Iota' está analisar concorrentes para melhorar seus processos. Qual ferramenta de planejamento estratégico compara práticas com as melhores do mercado?",
      options: [
        "Benchmarking",
        "Cross-docking",
        "Marketing Social",
        "Organograma Horizontal",
        "Pesquisa de Clima"
      ],
      answer: "Benchmarking",
      explanation: "Benchmarking é o processo sistemático de comparar produtos, serviços e práticas com os líderes do setor para identificar oportunidades de melhoria."
    }
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
      return "Excelente! Você demonstra domínio completo de Gestão Empresarial e Dinâmica Organizacional! 👏";
    if (percentage >= 70)
      return "Bom trabalho! Seu entendimento sobre os processos organizacionais e gestão é muito sólido!";
    if (percentage >= 50)
      return "Você está no caminho certo! Revise tópicos como estrutura organizacional e cultura empresarial para melhorar.";
    return "Recomendamos revisar os fundamentos de Gestão Empresarial (estruturas, estratégias e dinâmicas) antes de tentar novamente.";
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
