// Armazena as questões em um módulo separado para melhor organização
const QuizQuestions = {
  questions: [
    {
      id: "q1",
      text: "1. A empresa 'TravelNow' está migrando seu site para React e quer evitar manipulação direta do DOM. Qual conceito do React permite descrever a UI de forma declarativa, enquanto o framework gerencia as atualizações?",
      options: [
        "Virtual DOM",
        "JSX",
        "Componentes de Classe",
        "Prop Drilling",
        "Redux",
      ],
      answer: "Virtual DOM",
      explanation:
        "O Virtual DOM é uma representação em memória do DOM real. React compara (diffing) as versões anteriores e atualiza apenas o necessário, otimizando performance.",
    },
    {
      id: "q2",
      text: "2. Ao criar um formulário de login, você precisa armazenar o estado do campo de senha. Qual hook do React é mais adequado?",
      options: ["useEffect", "useContext", "useState", "useReducer", "useMemo"],
      answer: "useState",
      explanation:
        "useState gerencia estados locais em componentes funcionais (ex: const [password, setPassword] = useState('')).",
    },
    {
      id: "q3",
      text: "3. A 'ShopFast' precisa criar uma API RESTful para seu e-commerce. Qual método HTTP deve ser usado para atualizar parcialmente um produto no banco de dados?",
      options: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      answer: "PATCH",
      explanation:
        "PATCH atualiza recursos parcialmente, enquanto PUT substitui o recurso inteiro.",
    },
    {
      id: "q4",
      text: "4. Qual middleware do Express.js é usado para parsear corpos de requisições em JSON?",
      options: [
        "express.static()",
        "express.json()",
        "cors()",
        "helmet()",
        "morgan()",
      ],
      answer: "express.json()",
      explanation:
        "app.use(express.json()) habilita o parse de JSON em requisições.",
    },
    {
      id: "q5",
      text: "5. A 'HealthTrack' quer armazenar dados de usuários com relacionamentos complexos (ex: pacientes → consultas → médicos). Qual banco de dados é mais adequado?",
      options: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "SQLite"],
      answer: "PostgreSQL",
      explanation:
        "PostgreSQL é um banco relacional (SQL) que suporta joins e ACID, ideal para dados estruturados com relacionamentos.",
    },
    {
      id: "q6",
      text: "6. Qual comando SQL NÃO é válido para consultar dados?",
      options: [
        "SELECT * FROM users WHERE age > 18;",
        "INSERT INTO users (name) VALUES ('Ana');",
        "UPDATE users SET name = 'Carlos' WHERE id = 1;",
        "DELETE FROM users WHERE id = 2;",
        "FILTER users BY status = 'active';",
      ],
      answer: "FILTER users BY status = 'active';",
      explanation:
        "FILTER não é um comando SQL válido. O correto seria SELECT * FROM users WHERE status = 'active'.",
    },
    {
      id: "q7",
      text: "7. Qual ferramenta é usada para versionamento de código e colaboração em equipe?",
      options: ["Docker", "Git", "Webpack", "Postman", "Nginx"],
      answer: "Git",
      explanation:
        "Git (e plataformas como GitHub/GitLab) gerencia versões do código e permite colaboração via branches e merges.",
    },
    {
      id: "q8",
      text: "8. Ao dockerizar uma aplicação Node.js, qual arquivo define as dependências e configurações do container?",
      options: [
        "package.json",
        "Dockerfile",
        "docker-compose.yml",
        ".env",
        "nginx.conf",
      ],
      answer: "Dockerfile",
      explanation:
        "O Dockerfile contém instruções para construir a imagem do container (ex: FROM node:alpine).",
    },
    {
      id: "q9",
      text: "9. Qual prática previne ataques de SQL Injection em uma API Node.js?",
      options: [
        "Usar localStorage para tokens JWT",
        "Validar inputs com expressões regulares",
        "Utilizar queries parametrizadas (ex: pg.query('SELECT * FROM users WHERE id = $1', [id]))",
        "Desativar CORS",
        "Armazenar senhas em texto plano",
      ],
      answer:
        "Utilizar queries parametrizadas (ex: pg.query('SELECT * FROM users WHERE id = $1', [id]))",
      explanation:
        "Parâmetros escapam caracteres maliciosos, evitando injeção de SQL.",
    },
    {
      id: "q10",
      text: "10. Qual header HTTP é usado para habilitar CORS em uma API?",
      options: [
        "Content-Type",
        "Access-Control-Allow-Origin",
        "Authorization",
        "Cache-Control",
        "Accept-Encoding",
      ],
      answer: "Access-Control-Allow-Origin",
      explanation:
        "Define quais domínios podem acessar a API (ex: * para todos ou https://seusite.com).",
    },
    {
      id: "q11",
      text: "11. Qual hook do React é usado para gerenciar efeitos colaterais (ex: chamadas API)?",
      options: ["useState", "useEffect", "useContext", "useRef"],
      answer: "useEffect",
      explanation:
        "useEffect(() => { fetchData() }, [deps]) executa código após renderização.",
    },
    {
      id: "q12",
      text: "12. Qual comando do Git desfaz commits locais não enviados ao repositório remoto?",
      options: [
        "git revert",
        "git reset --hard HEAD~1",
        "git clone",
        "git pull",
      ],
      answer: "git reset --hard HEAD~1",
      explanation:
        "Remove o último commit local (cuidado: os changes são perdidos).",
    },
    {
      id: "q13",
      text: "13. Qual método de array JavaScript é usado para transformar elementos de um array sem alterar o original?",
      options: ["push()", "map()", "splice()", "forEach()"],
      answer: "map()",
      explanation:
        "map() cria um novo array com os resultados de uma função aplicada a cada elemento.",
    },
    {
      id: "q14",
      text: "14. Qual hook do React é ideal para compartilhar dados entre componentes sem prop drilling?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: "useContext",
      explanation:
        "useContext + createContext permite compartilhar dados globalmente na árvore de componentes.",
    },
    {
      id: "q15",
      text: "15. Qual comando npm instala um pacote como dependência de desenvolvimento?",
      options: [
        "npm install",
        "npm install --save",
        "npm install --save-dev",
        "npm uninstall",
      ],
      answer: "npm install --save-dev",
      explanation:
        "--save-dev adiciona o pacote em devDependencies (ex: testes, bundlers).",
    },
    {
      id: "q16",
      text: "16. Qual método HTTP deve ser usado para criar um novo recurso no RESTful API?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "POST",
      explanation:
        "POST é usado para criar novos recursos, enquanto PUT para substituir um recurso existente.",
    },
    {
      id: "q17",
      text: "17. Qual estratégia do CSS evita conflitos de nomes de classes em grandes aplicações React?",
      options: ["Inline Styles", "CSS Modules", "!important", "IDs"],
      answer: "CSS Modules",
      explanation:
        "CSS Modules gera classes com nomes únicos (ex: .Button_hashedX123).",
    },
    {
      id: "q18",
      text: "18. Qual comando do Docker inicia um container a partir de uma imagem?",
      options: ["docker build", "docker run", "docker compose", "docker ps"],
      answer: "docker run",
      explanation:
        "docker run -d -p 3000:3000 minha-imagem inicia um container.",
    },
    {
      id: "q19",
      text: "19. Qual método JavaScript converte um objeto em uma string JSON?",
      options: ["JSON.parse()", "JSON.stringify()", "toString()", "toJSON()"],
      answer: "JSON.stringify()",
      explanation:
        "Converte objetos/séries em strings JSON (ex: JSON.stringify({ nome: 'Ana' })).",
    },
    {
      id: "q20",
      text: "20. Qual ferramenta é usada para fazer deploy de aplicações Node.js em nuvem?",
      options: ["Webpack", "Vercel", "ESLint", "Jest"],
      answer: "Vercel",
      explanation:
        "Plataformas como Vercel, Heroku ou AWS são usadas para deploy em produção.",
    },
    {
      id: "q21",
      text: "Como otimizar performance em listas grandes no React?",
      options: [
        "React.memo + virtualização (react-window)",
        "Usar apenas componentes de classe",
        "Renderizar tudo de uma vez",
        "Desabilitar StrictMode",
      ],
      answer: "React.memo + virtualização (react-window)",
      explanation:
        "React.memo evita re-renders desnecessários, e a virtualização renderiza apenas itens visíveis.",
    },
    {
      id: "q22",
      text: "O que faz o hook useCallback?",
      options: [
        "Memoriza funções entre renders",
        "Substitui useEffect",
        "Gera callbacks automáticos",
        "Nada, não é um hook válido",
      ],
      answer: "Memoriza funções entre renders",
      explanation:
        "useCallback retorna a mesma função (por referência) até que as dependências mudem.",
    },
    {
      id: "q23",
      text: "Qual padrão evita prop drilling sem usar Context?",
      options: [
        "Component Composition",
        "Higher-Order Components",
        "Render Props",
        "Todos os acima",
      ],
      answer: "Todos os acima",
      explanation:
        "Composition (children), HOCs e render props são alternativas ao Context.",
    },
    {
      id: "q24",
      text: "Como implementar code-splitting no React?",
      options: [
        "React.lazy + Suspense",
        "Usar apenas um bundle.js",
        "Importar tudo no App.js",
        "Não é possível em React",
      ],
      answer: "React.lazy + Suspense",
      explanation:
        "React.lazy permite carregar componentes dinamicamente com lazy loading.",
    },
    {
      id: "q25",
      text: "O que é Server-Side Rendering (SSR)?",
      options: [
        "Renderizar React no servidor e enviar HTML pronto",
        "Usar apenas APIs REST",
        "Não usar JavaScript no frontend",
        "Renderizar tudo no client-side",
      ],
      answer: "Renderizar React no servidor e enviar HTML pronto",
      explanation: "SSR melhora SEO e performance inicial (ex: Next.js).",
    },
    {
      id: "q26",
      text: "Qual vantagem do CSS-in-JS?",
      options: [
        "Estilos dinâmicos baseados em props",
        "Menor tamanho de bundle",
        "Não requer JavaScript",
        "Mais rápido que CSS puro",
      ],
      answer: "Estilos dinâmicos baseados em props",
      explanation:
        "Bibliotecas como styled-components permitem estilos condicionais via props.",
    },
    {
      id: "q27",
      text: "Como testar componentes React?",
      options: [
        "Jest + Testing Library",
        "Enzyme (obsoleto)",
        "Cypress para unit tests",
        "Não testar componentes",
      ],
      answer: "Jest + Testing Library",
      explanation:
        "React Testing Library é a solução recomendada para testes de integração.",
    },
    {
      id: "q28",
      text: "O que faz o hook useRef?",
      options: [
        "Persiste valores entre renders sem causar re-render",
        "Substitui useState",
        "Cria referências a bancos de dados",
        "Nada, é um hook obsoleto",
      ],
      answer: "Persiste valores entre renders sem causar re-render",
      explanation: "useRef é útil para acessar DOM nodes ou valores mutáveis.",
    },
    {
      id: "q29",
      text: "Qual ferramenta analisa bundle size?",
      options: [
        "Webpack Bundle Analyzer",
        "ESLint",
        "Prettier",
        "React DevTools",
      ],
      answer: "Webpack Bundle Analyzer",
      explanation:
        "Mostra visualmente o tamanho de cada dependência no bundle.",
    },
    {
      id: "q30",
      text: "Como melhorar SEO em SPAs?",
      options: [
        "SSR ou Static Generation (Next.js)",
        "Usar apenas client-side rendering",
        "Não indexar o site",
        "Usar apenas divs",
      ],
      answer: "SSR ou Static Generation (Next.js)",
      explanation:
        "Frameworks como Next.js geram HTML no servidor para indexação por crawlers.",
    },

    // ========== DEVOPS & PRODUÇÃO (31-40) ==========
    {
      id: "q31",
      text: "O que faz um CDN?",
      options: [
        "Distribui conteúdo geograficamente próximo aos usuários",
        "Substitui bancos de dados",
        "Minifica JavaScript automaticamente",
        "Nada, é um conceito obsoleto",
      ],
      answer: "Distribui conteúdo geograficamente próximo aos usuários",
      explanation:
        "CDNs melhoram performance com caching em edge locations (ex: Cloudflare).",
    },
    {
      id: "q32",
      text: "Qual comando npm instala pacotes exatamente como na package-lock.json?",
      options: ["npm ci", "npm install", "npm update", "npm audit fix"],
      answer: "npm ci",
      explanation:
        "npm ci (clean install) é mais rápido e rigoroso que npm install.",
    },
    {
      id: "q33",
      text: "Para que serve um arquivo .env?",
      options: [
        "Armazenar variáveis de ambiente sensíveis",
        "Configurar regras de ESLint",
        "Definir estilos globais",
        "Substituir o package.json",
      ],
      answer: "Armazenar variáveis de ambiente sensíveis",
      explanation:
        ".env armazena secrets como API keys (usado com dotenv em Node.js).",
    },
    {
      id: "q34",
      text: "O que é Continuous Integration?",
      options: [
        "Automatizar testes e builds a cada commit",
        "Integrar React com Node.js manualmente",
        "Mesclar branches manualmente",
        "Nada, é um conceito antigo",
      ],
      answer: "Automatizar testes e builds a cada commit",
      explanation:
        "CI (ex: GitHub Actions) valida mudanças antes de merge para a main.",
    },
    {
      id: "q35",
      text: "Qual serviço é usado para deploy de aplicações serverless?",
      options: ["Vercel", "Webpack", "Redux", "Jest"],
      answer: "Vercel",
      explanation:
        "Vercel, AWS Lambda e Netlify Functions são plataformas serverless populares.",
    },
    {
      id: "q36",
      text: "Como proteger cookies contra ataques CSRF?",
      options: [
        "SameSite=Lax/Strict + HttpOnly",
        "Armazenar em localStorage",
        "Usar JWT em URLs",
        "Não usar cookies",
      ],
      answer: "SameSite=Lax/Strict + HttpOnly",
      explanation:
        "SameSite restringe envio de cookies entre domínios diferentes.",
    },
    {
      id: "q37",
      text: "O que faz o comando git cherry-pick?",
      options: [
        "Aplica um commit específico para o branch atual",
        "Remove todos os commits recentes",
        "Mescla dois branches",
        "Nada, não é um comando válido",
      ],
      answer: "Aplica um commit específico para o branch atual",
      explanation: "Útil para trazer commits específicos sem merge completo.",
    },
    {
      id: "q38",
      text: "Qual ferramenta analisa vulnerabilidades em dependências?",
      options: ["npm audit", "ESLint", "Prettier", "React DevTools"],
      answer: "npm audit",
      explanation:
        "npm audit verifica pacotes contra o banco de dados de vulnerabilidades.",
    },
    {
      id: "q39",
      text: "O que é um Dockerfile?",
      options: [
        "Script para construir imagens Docker",
        "Configuração do React",
        "Arquivo de estilos",
        "Nada, é um conceito obsoleto",
      ],
      answer: "Script para construir imagens Docker",
      explanation:
        "Define camadas da imagem (ex: FROM node:alpine, COPY, RUN npm install).",
    },
    {
      id: "q40",
      text: "Como implementar feature flags em React?",
      options: [
        "Context API + configuração dinâmica",
        "Modificar manualmente o código",
        "Usar apenas branches Git",
        "Não é possível",
      ],
      answer: "Context API + configuração dinâmica",
      explanation:
        "Feature flags permitem ativar/desativar funcionalidades sem novo deploy.",
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
      totalTime: 3000, // 50 minutos em segundos
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
      return "Excelente! Você demonstra domínio completo de Desenvolvimento Web Full Stack e Dinâmica Organizacional! 👏";
    if (percentage >= 70)
      return "Bom trabalho! Seu entendimento sobre os processos organizacionais e gestão é muito sólido!";
    if (percentage >= 50)
      return "Você está no caminho certo! Revise tópicos como estrutura organizacional e cultura empresarial para melhorar.";
    return "Recomendamos revisar os fundamentos de Desenvolvimento Web Full Stack (estruturas, estratégias e dinâmicas) antes de tentar novamente.";
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
