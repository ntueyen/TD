const sourceFilters = document.querySelectorAll(".source-filter");
const sourceItems = document.querySelectorAll(".source-item");
const sourceSearch = document.querySelector("#source-search");

function applySourceFilters() {
  const activeFilter = document.querySelector(".source-filter.active")?.dataset.filter || "all";
  const keyword = sourceSearch.value.trim().toLowerCase();

  sourceItems.forEach((item) => {
    const matchesFilter = activeFilter === "all" || item.dataset.group === activeFilter;
    const matchesKeyword = item.textContent.toLowerCase().includes(keyword);
    item.hidden = !(matchesFilter && matchesKeyword);
  });
}

sourceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    sourceFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applySourceFilters();
  });
});

sourceSearch.addEventListener("input", applySourceFilters);
