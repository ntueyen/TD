const qaItems = [
  {
    id: 1,
    category: "background",
    question: "為何 108 課綱要新增科技領域？",
    summary:
      "科技素養已成為現代國民的重要基本素養。過去生活科技與資訊科技在不同教育階段分散於其他領域或議題中，容易被邊緣化；108 課綱將科技領域獨立設立，目的在於落實生活科技與資訊科技課程，強化學生面對未來生活與產業變遷所需的能力。",
    takeaway: "科技領域的設立，是為了讓科技素養、動手實作與資訊能力成為正式且連貫的學習內容。"
  },
  {
    id: 2,
    category: "curriculum",
    question: "科技領域課綱的修訂理念為何？",
    summary:
      "科技領域由生活科技與資訊科技共同構成。生活科技依教育階段逐步從生活應用、創意設計到工程設計；資訊科技則以運算思維為主軸，透過資訊科技設計與實作，培養解決問題、合作與創新思考能力。",
    takeaway: "生活科技重視設計與實作，資訊科技重視運算思維與資訊應用，兩者共同培養科技素養。"
  },
  {
    id: 3,
    category: "curriculum",
    question: "科技領域課綱的修訂原則是什麼？",
    summary:
      "課綱研修強調以研究為基礎、課程連貫統整、保有彈性、適性學習與完整配套。生活科技重視縱向連貫、橫向連結與可行性；資訊科技則強調務本、前瞻、彈性、具體與實踐。",
    takeaway: "課綱不是只增加內容，而是要讓學習有連貫性、可實施性與未來導向。"
  },
  {
    id: 4,
    category: "life-tech",
    question: "生活科技課綱的修訂重點為何？",
    summary:
      "生活科技強調學生「做、用、想」的能力，透過材料、工具、設計與製作任務，培養創意設計、問題解決與科技應用能力。高中階段進一步導入工程設計與跨學科整合。",
    takeaway: "生活科技不是只做作品，而是從實作中理解科技系統、設計流程與問題解決。"
  },
  {
    id: 5,
    category: "info-tech",
    question: "資訊科技課綱的修訂重點為何？",
    summary:
      "資訊科技重點在培養運算思維，並讓學生有效運用資訊科技解決問題、溝通表達與合作共創。國中階段著重資訊科技整合與創作，高中階段則進一步探索資訊科學概念與應用。",
    takeaway: "資訊科技的核心不是單純操作工具，而是用運算思維分析問題並設計解法。"
  },
  {
    id: 6,
    category: "revision",
    question: "科技領域課綱有哪些人參與修訂？",
    summary:
      "課綱研修委員依程序遴聘，包含學者專家、中小學教師、學科中心教師、社會團體與技職代表等。這樣的組成使課綱能兼顧學術基礎、教學現場與社會需求。",
    takeaway: "課綱修訂需要跨角色參與，才能兼顧理論、實務與學生學習需要。"
  },
  {
    id: 7,
    category: "revision",
    question: "科技領域課綱是如何進行修訂的？",
    summary:
      "修訂過程參考總綱、課程發展建議書、國內外課程綱要、素養研究與課程實施現況，並透過分組會議、全體委員會議與區域諮詢會議逐步形成共識。",
    takeaway: "課綱修訂是一個結合研究、專家討論與現場諮詢的歷程。"
  },
  {
    id: 8,
    category: "curriculum",
    question: "科技領域課綱研修重點為何？",
    summary:
      "生活科技依「做、用、想」規劃科技知識、科技態度、操作技能與統合能力；資訊科技則透過資訊科技概念、原則與方法，逐步培養運算思維與數位公民責任。",
    takeaway: "科技領域同時重視實作能力、概念理解、態度責任與跨領域問題解決。"
  },
  {
    id: 9,
    category: "life-tech",
    question: "生活科技課綱與過去課綱有何差異？",
    summary:
      "生活科技從過去自然與生活科技或生活領域中獨立出來，與資訊科技共同組成科技領域。108 課綱更明確規範學習表現與學習內容，並強化國中階段生活科技的必修學習。",
    takeaway: "生活科技在 108 課綱中有更清楚的領域定位、學習內容與教學責任。"
  },
  {
    id: 10,
    category: "info-tech",
    question: "資訊科技課綱與過去課綱有何差異？",
    summary:
      "資訊科技從過去較偏議題或工具使用的定位，轉為科技領域中的正式課程。課程焦點更強調資訊科學基礎、運算思維、問題解決、創作應用與資訊社會責任。",
    takeaway: "資訊科技在 108 課綱中從工具使用提升為以運算思維為核心的正式學習。"
  }
];

const quizItems = [
  {
    question: "「學生能運用程序化方法分析問題並設計解法」最接近哪一項課綱重點？",
    options: ["運算思維", "工程設計", "科技態度"],
    answer: "運算思維",
    feedback: "運算思維強調將問題拆解、建立步驟與設計可執行的解決方法。"
  },
  {
    question: "「從材料、工具與製作歷程中完成作品並改善方案」最接近哪一項學習取向？",
    options: ["生活科技實作", "資訊社會責任", "課綱審議程序"],
    answer: "生活科技實作",
    feedback: "生活科技強調透過動手做、設計與測試，培養問題解決與科技應用能力。"
  },
  {
    question: "科技領域獨立設立的主要目的之一是什麼？",
    options: ["落實科技素養教育", "取消自然科學課程", "只訓練軟體工程師"],
    answer: "落實科技素養教育",
    feedback: "科技領域的設立是為了讓學生能連貫學習生活科技與資訊科技，培養現代公民所需的科技素養。"
  }
];

const qaList = document.querySelector("#qa-list");
const progressCount = document.querySelector("#progress-count");
const filterButtons = document.querySelectorAll(".filter-button");
const completedItems = new Set();
let currentQuizIndex = 0;

function renderQaList(filter = "all") {
  qaList.innerHTML = "";

  qaItems
    .filter((item) => filter === "all" || item.category === filter)
    .forEach((item) => {
      const card = document.createElement("article");
      card.className = "qa-card";
      card.innerHTML = `
        <button class="qa-question" type="button" aria-expanded="false">
          <span>Q${item.id}</span>
          ${item.question}
        </button>
        <div class="qa-answer" hidden>
          <p>${item.summary}</p>
          <div class="takeaway">
            <strong>學習重點</strong>
            <p>${item.takeaway}</p>
          </div>
          <button class="understood-button" type="button" data-id="${item.id}">
            我已理解
          </button>
        </div>
      `;
      qaList.appendChild(card);
    });
}

function updateProgress() {
  progressCount.textContent = `${completedItems.size} / ${qaItems.length}`;
}

qaList.addEventListener("click", (event) => {
  const questionButton = event.target.closest(".qa-question");
  const understoodButton = event.target.closest(".understood-button");

  if (questionButton) {
    const answer = questionButton.nextElementSibling;
    const isOpen = questionButton.getAttribute("aria-expanded") === "true";
    questionButton.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
  }

  if (understoodButton) {
    completedItems.add(Number(understoodButton.dataset.id));
    understoodButton.textContent = "已完成";
    understoodButton.disabled = true;
    updateProgress();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderQaList(button.dataset.filter);
  });
});

function renderQuiz() {
  const item = quizItems[currentQuizIndex];
  const question = document.querySelector("#quiz-question");
  const options = document.querySelector("#quiz-options");
  const feedback = document.querySelector("#quiz-feedback");

  question.textContent = item.question;
  options.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "quiz-feedback";

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      const correct = option === item.answer;
      feedback.textContent = correct ? `答對了。${item.feedback}` : `再想想。${item.feedback}`;
      feedback.className = correct ? "quiz-feedback correct" : "quiz-feedback incorrect";
    });
    options.appendChild(button);
  });
}

document.querySelector("#next-question").addEventListener("click", () => {
  currentQuizIndex = (currentQuizIndex + 1) % quizItems.length;
  renderQuiz();
});

renderQaList();
renderQuiz();
updateProgress();
