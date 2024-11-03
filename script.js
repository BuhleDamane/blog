
const articles = [
    { id: 1, title: "Article 1", category: "LAW", date: "2024-11-01", description: "Short description 1", image: "image1.jpg" },
    { id: 2, title: "Article 2", category: "TECHNOLOGY", date: "2024-10-28", description: "Short description 2", image: "image2.jpg" },
  
  ];
  
 
  function displayArticles(category = "ALL") {
    const articleGrid = document.getElementById("articleGrid");
    articleGrid.innerHTML = ""; 
  
 
    const filteredArticles = category === "ALL" ? articles : articles.filter(article => article.category === category);
 
    filteredArticles.forEach(article => {
      const articleCard = document.createElement("div");
      articleCard.classList.add("article-card");
      articleCard.innerHTML = `
        <img src="${article.image}" alt="${article.title}" />
        <p class="date">${article.date}</p>
        <h3 class="title">${article.title}</h3>
        <p class="description">${article.description}</p>
        <button onclick="viewArticle(${article.id})">Read More</button>
      `;
      articleGrid.appendChild(articleCard);
    });
  }

  function filterArticles(category) {
    displayArticles(category);
  }

  function viewArticle(id) {
    const selectedArticle = articles.find(article => article.id === id);
    localStorage.setItem("selectedArticle", JSON.stringify(selectedArticle));
    window.location.href = "article.html";
  }

  function loadArticleDetail() {
    const article = JSON.parse(localStorage.getItem("selectedArticle"));
    if (article) {
      document.querySelector(".title").innerText = article.title;
      document.querySelector(".date").innerText = article.date;
      document.querySelector(".description").innerText = article.description;
      document.querySelector(".main-image").src = article.image;

    }
  }

  function goBackToPortal() {
    window.location.href = "index.html";
  }

  function signOut() {
    alert("You have signed out.");

  }
  
  displayArticles();
  