const styleContent = `
@media (min-width: 481px) {
  .rorocustom-table-of-contents {
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: fixed;
    top: 0px;
    width: 100%;
    height: calc(-44px + 100vh);
    display: flex;
    flex-direction: column;
    pointer-events: none;
    z-index: 9000;
  }
  .rorocustom-table-of-contents-transition {
    max-height: 355px;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 299px;
    right: 0px;
    overflow-y: hidden;
    opacity: 1;
    transition-duration: 200ms;
    transition-timing-function: ease;
    transition-property: opacity;
  }
  .rorocustom-table-of-contents-container {
    max-height: 355px;
    margin-bottom: 60px;
    pointer-events: auto;
  }
  .rorocustom-table-of-contents-wrapper {
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 12px;
    padding-right: 8px;
  }
  .rorocustom-table-of-contents-wrapper-padding {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 54px;
    padding-top: 12px;
    padding-bottom: 12px;
    height: 100%;
  }
  .rorocustom-table-of-contents-heading {
    position: relative;
    cursor: pointer;
    width: fit-content;
  }
  .rorocustom-table-of-contents-heading > div {
    height: 2px;
    transition: background 0.2s, box-shadow 0.2s;
    border-radius: 2px;
    background-color: rgba(84, 72, 49, 0.15);
    box-shadow: none;
  }
  .rorocustom-table-of-contents-heading1 > div {
    width: 16px;
    margin-left: 0px;
  }
  .rorocustom-table-of-contents-heading2 > div {
    width: 12px;
    margin-left: 4px;
  }
  .rorocustom-table-of-contents-heading3 > div {
    width: 8px;
    margin-left: 8px;
  }
  .rorocustom-table-of-contents-active > div {
    background-color: rgb(50, 48, 44) !important;
  }

  .rorocustom-table-of-contents-label {
    position: absolute;
    left: -55px;
    color: black;
    font-size: 12px;
    padding: 6px 8px;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    top: -24px;
    transition: opacity 0.2s ease;
    z-index: 100;
    background-color: transparent !important;
    width: 65px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .rorocustom-table-of-contents-heading:hover
    .rorocustom-table-of-contents-label {
    background-color: transparent !important;
    opacity: 1;
  }

  .rorocustom-table-of-contents-heading-darktheme {
    background-color: rgba(255, 255, 255, 0.13) !important;
  }

  .rorocustom-table-of-contents-label-darktheme {
    color: white;
  }
    
  .rorocustom-table-of-contents-active-darktheme {
    background-color: rgb(211, 211, 211) !important;
    box-shadow: rgb(211, 211, 211) 0px 0px 3px !important;
  }
}

@media (max-width: 480px) {
  .rorocustom-table-of-contents {
    display: none;
  }
}

`;
const htmlContent = `
    <div class="rorocustom-table-of-contents">
        <div style="display: flex">
            <div contenteditable="false" style="width: 100%">
            <div class="rorocustom-table-of-contents-container">
                <div class="rorocustom-table-of-contents-transition">
                <div class="rorocustom-table-of-contents-wrapper">
                    <div class="rorocustom-table-of-contents-wrapper-padding"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
const tagToClass = {
  H2: "rorocustom-table-of-contents-heading1",
  H3: "rorocustom-table-of-contents-heading2",
  H4: "rorocustom-table-of-contents-heading3",
};

let scrollSpyFlag = true;
let activeClassNameByTheme = "rorocustom-table-of-contents-active";
function setupScrollSpy(extractedHeadings) {
  const indicators = Array.from(
    document.querySelectorAll(".rorocustom-table-of-contents-heading")
  );

  function getCurrentActiveIndex() {
    const thresholdPosition = window.scrollY + 20;
    let currentIndex = 0;

    for (let i = 0; i < extractedHeadings.length; i++) {
      const headingTop =
        extractedHeadings[i].getBoundingClientRect().top + window.scrollY;

      if (headingTop <= thresholdPosition) {
        currentIndex = i;
      } else {
        break;
      }
    }

    return currentIndex;
  }

  function updateActiveIndicator() {
    if (!scrollSpyFlag) return;
    const currentIndex = getCurrentActiveIndex();

    indicators.forEach((el, i) => {
      if (i === currentIndex) {
        el.classList.add(activeClassNameByTheme);
      } else {
        el.classList.remove(activeClassNameByTheme);
      }
    });
  }

  window.addEventListener("scroll", updateActiveIndicator);
  updateActiveIndicator(); // 초기 실행
}

function getFlatHeadings(selector) {
  if (typeof selector !== "string") return [];

  const parent = document.querySelector(selector);
  if (!parent) return [];

  const flatHeadings = [];
  parent.querySelectorAll("h2, h3, h4").forEach((heading) => {
    flatHeadings.push(heading);
  });
  return flatHeadings;
}

function insertTableOfContents() {
  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  document.body.style.position = "relative";
  wrapper.outerHTML = htmlContent;

  const floatingTableContents = document.querySelector(
    ".rorocustom-table-of-contents"
  );

  if (!floatingTableContents) return [];

  /*
        insert table of contents
    */
  const extractedHeadings = getFlatHeadings(".notion-page-content");
  const floatingTableContentsWrapperPadding = document.querySelector(
    ".rorocustom-table-of-contents-wrapper-padding"
  );

  if (!floatingTableContentsWrapperPadding) return [];

  const isDarkTheme = document.body.classList.contains("dark");
  /** content element 삽입 */
  extractedHeadings.forEach((heading) => {
    const headingElement = document.createElement("div");
    const headingElementInner = document.createElement("div");
    const headingLabel = document.createElement("p");

    headingElement.classList.add("rorocustom-table-of-contents-heading");
    headingElement.classList.add(tagToClass[heading.tagName]);

    // label 삽입
    headingLabel.classList.add("rorocustom-table-of-contents-label");
    headingLabel.textContent = heading.textContent;

    if (isDarkTheme) {
      headingElement.classList.add(
        "rorocustom-table-of-contents-heading-darktheme"
      );
      headingLabel.classList.add(
        "rorocustom-table-of-contents-label-darktheme"
      );
      activeClassNameByTheme = "rorocustom-table-of-contents-active-darktheme";
    }

    // scroll to heading
    headingElement.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      scrollSpyFlag = false; // 스크롤 이동하는 동안은 spy에서 업데이트 비활성화하기
      const currentActive = document.querySelector(
        `.${activeClassNameByTheme}`
      );
      if (currentActive) {
        currentActive.classList.remove(activeClassNameByTheme);
      }
      headingElement.classList.add(activeClassNameByTheme);
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        scrollSpyFlag = true;
      }, 1000);
    });

    headingElement.appendChild(headingLabel);
    headingElement.appendChild(headingElementInner);
    floatingTableContentsWrapperPadding.appendChild(headingElement);
  });

  console.log("init: insert rorocustom table of contents!");
  return extractedHeadings;
}

function checkContentLoaded() {
  const content = document.querySelector(".notion-page-content");
  if (content) {
    // 스타일 삽입
    const style = document.createElement("style");
    style.textContent = styleContent;
    document.head.appendChild(style);

    // JS 로직 실행
    const extractedHeadings = insertTableOfContents();
    setupScrollSpy(extractedHeadings);
    return true;
  }
  return false;
}

function waitForContentLoaded() {
  const interval = setInterval(() => {
    const success = checkContentLoaded();
    if (success) {
      clearInterval(interval);
    }
  }, 500);
}
(function () {
  waitForContentLoaded();
})();
