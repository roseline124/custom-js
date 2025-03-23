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

  .rorocustom-table-of-contents-heading-darktheme > div {
    background-color: rgba(255, 255, 255, 0.13) !important;
  }

  .rorocustom-table-of-contents-label-darktheme {
    color: white;
  }
    
  .rorocustom-table-of-contents-active-darktheme > div {
    background-color: rgb(211, 211, 211) !important;
    box-shadow: rgb(211, 211, 211) 0px 0px 3px !important;
  }

  .rorocustom-table-of-contents-dialog {
    z-index: 9001 !important;
  }
  
  .rorocustom-table-of-contents-dialog-heading {
    display: block;
    color: rgb(120, 119, 116);
    text-decoration: none;
    user-select: none;
    transition: color 0.15s;
    cursor: pointer;
    fill: inherit;
    width: 100%;
  }

  .rorocustom-table-of-contents-dialog-heading:hover {
    display: flex;
    align-items: center;
    background: rgba(84, 72, 49, 0.08);
    border-radius: 4px;
    color: rgb(29, 27, 22);
  }

  .rorocustom-table-of-contents-dialog-heading-darktheme:hover {
    background: rgba(255, 255, 255, 0.055) !important;
    color: rgb(225, 225, 225) !important;
  }

  .rorocustom-table-of-contents-dialog-heading-H1 {
    display: flex;
    align-items: center;
    margin-left: 0px;
  }

  .rorocustom-table-of-contents-dialog-heading-H2 {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .rorocustom-table-of-contents-dialog-heading-H3 {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }

  .rorocustom-table-of-contents-dialog-heading-active {
    color: rgb(35, 131, 226) !important;
  }

  .rorocustom-table-of-contents-dialog-heading-label {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .rorocustom-dialog-hidden {
    display: none;
  }

  .rorocustom-table-of-contents-dialog-content-wrapper-parent {
    width: 242px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 12px 0px;
    margin-right: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px -6px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px,
      rgba(84, 72, 49, 0.08) 0px 0px 0px 1px;
    border-radius: 14px;
    position: relative;
    overflow-y: auto;
  }

  .rorocustom-table-of-contents-dialog-content-wrapper-parent-darktheme {
    background-color: rgb(25, 25, 25);
  }
}
@media (max-width: 480px) {
  .rorocustom-table-of-contents {
    display: none;
  }
}

`;
const tocHtmlContent = `
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

const dialogHtmlContent = `
<div
  class="rorocustom-table-of-contents-dialog rorocustom-dialog-hidden"
  data-overlay="true"
  style="pointer-events: auto; position: relative; z-index: 0"
>
  <div style="display: contents">
    <div>
      <div
        style="position: fixed; right: 0px; top: 174px; pointer-events: none"
      >
        <div style="width: 56px; height: 334px"></div>
        <div
          style="
            position: absolute;
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
          "
        >
          <div style="position: relative; right: 0; pointer-events: auto">
            <div
              style="
                display: flex;
                align-items: center;
                position: relative;
                flex-direction: row;
                transform-origin: right 0%;
                right: 0px;
                top: 0px;
                transition-duration: 200ms;
                transition-timing-function: ease;
                transition-property: none;
              "
            >
              <div
                role="dialog"
                style="
                  border-radius: 10px;
                  backdrop-filter: none;
                  position: relative;
                  max-width: calc(-24px + 100vw);
                  margin-top: -10px;
                "
              >
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 258px;
                    padding-left: 16px;
                    cursor: default;
                    opacity: 1;
                    transform: translateX(0px);
                    transition-duration: 200ms;
                    transition-timing-function: ease;
                    transition-property: opacity, transform;
                  "
                >
                  <div class="rorocustom-table-of-contents-dialog-content-wrapper-parent">
                    <div
                      class="rorocustom-table-of-contents-dialog-content-wrapper"
                      style="
                        padding: 6px;
                        max-width: 500px;
                        max-height: 524px;
                        width: 100%;
                        cursor: default;
                      "
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const dialogHeadingHtmlContent = `
<div class="rorocustom-table-of-contents-dialog-heading">
  <div style="display: flex; align-items: center; margin-left: 0px">
    <div
      style="
        padding: 4px;
        font-size: 13px;
        line-height: 1.3;
        display: flex;
        align-items: center;
      "
    >
      <span class="notranslate rorocustom-table-of-contents-dialog-heading-label"></span>
    </div>
  </div>
</div>
`;
const tagToClass = {
  H2: "rorocustom-table-of-contents-heading1",
  H3: "rorocustom-table-of-contents-heading2",
  H4: "rorocustom-table-of-contents-heading3",
};
const dialogTagToClass = {
  H2: "rorocustom-table-of-contents-dialog-heading-H1",
  H3: "rorocustom-table-of-contents-dialog-heading-H2",
  H4: "rorocustom-table-of-contents-dialog-heading-H3",
};

let scrollSpyFlag = true;
let activeClassNameByTheme = "rorocustom-table-of-contents-active";
let dialogActiveClassNameByTheme =
  "rorocustom-table-of-contents-dialog-heading-active";
// let dialogHoverClassNameByTheme =
//   "rorocustom-table-of-contents-dialog-heading-active";
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
  wrapper.outerHTML = tocHtmlContent;

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

    headingElement.classList.add("rorocustom-table-of-contents-heading");
    headingElement.classList.add(tagToClass[heading.tagName]);

    if (isDarkTheme) {
      headingElement.classList.add(
        "rorocustom-table-of-contents-heading-darktheme"
      );
      activeClassNameByTheme = "rorocustom-table-of-contents-active-darktheme";
    }

    // top 조정
    const notionScrollerChild = document.querySelector(
      ".notion-scroller > div"
    );

    if (notionScrollerChild) {
      const transitionWrapper = document.querySelector(
        ".rorocustom-table-of-contents-transition"
      );
      transitionWrapper.style.top = `${notionScrollerChild.clientHeight}px`;
    }

    headingElement.appendChild(headingElementInner);
    floatingTableContentsWrapperPadding.appendChild(headingElement);
  });

  return extractedHeadings;
}

function showDialog(extractedHeadings) {
  // insert dialog container
  const dialogContainer = document.createElement("div");
  document.body.appendChild(dialogContainer);
  document.body.style.position = "relative";
  dialogContainer.outerHTML = dialogHtmlContent;

  // check dark theme
  const isDarkTheme = document.body.classList.contains("dark");
  const dialogContentWrapperParent = document.querySelector(
    ".rorocustom-table-of-contents-dialog-content-wrapper-parent"
  );
  if (isDarkTheme) {
    dialogContentWrapperParent.classList.add(
      "rorocustom-table-of-contents-dialog-content-wrapper-parent-darktheme"
    );
  }

  // insert dialog content
  const dialogContentWrapper = document.querySelector(
    ".rorocustom-table-of-contents-dialog-content-wrapper"
  );

  if (!dialogContentWrapper) return;

  extractedHeadings.forEach((heading, index) => {
    let headingElement = document.createElement("div");
    dialogContentWrapper.appendChild(headingElement);
    headingElement.outerHTML = dialogHeadingHtmlContent;
    headingElement = document.querySelector(
      `.rorocustom-table-of-contents-dialog-content-wrapper > div:nth-child(${
        index + 1
      })`
    ); // update headingElement
    headingElement.classList.add(dialogTagToClass[heading.tagName]);

    if (isDarkTheme) {
      headingElement.classList.add(
        "rorocustom-table-of-contents-dialog-heading-darktheme"
      );
    }

    // label 삽입
    const labelEl = headingElement.querySelector(
      ".rorocustom-table-of-contents-dialog-heading-label"
    );
    labelEl.textContent = heading.textContent;

    // scroll to heading
    headingElement.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      scrollSpyFlag = false; // 스크롤 이동하는 동안은 spy에서 업데이트 비활성화하기

      // toc update
      const currentActive = document.querySelector(
        `.${activeClassNameByTheme}`
      );
      if (currentActive) {
        currentActive.classList.remove(activeClassNameByTheme);
      }

      document
        .querySelector(
          `.rorocustom-table-of-contents-wrapper-padding > div:nth-child(${
            index + 1
          })`
        )
        .classList.add(activeClassNameByTheme);

      // popover update
      const currentActiveDialogLabel = document.querySelector(
        `.${dialogActiveClassNameByTheme}`
      );
      if (currentActiveDialogLabel) {
        currentActiveDialogLabel.classList.remove(dialogActiveClassNameByTheme);
      }
      labelEl.classList.add(dialogActiveClassNameByTheme);
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        scrollSpyFlag = true;
      }, 1000);
    });
  });

  /**
   * hover 이벤트 처리
   */
  const contentWrapper = document.querySelector(
    ".rorocustom-table-of-contents-wrapper"
  );
  const dialogWrapper = document.querySelector(
    ".rorocustom-table-of-contents-dialog"
  );
  if (contentWrapper) {
    contentWrapper.addEventListener("mouseenter", () => {
      dialogWrapper.classList.remove("rorocustom-dialog-hidden");
    });
    dialogContentWrapperParent.addEventListener("mouseleave", () => {
      dialogWrapper.classList.add("rorocustom-dialog-hidden");
    });
  }
}

function checkContentLoaded() {
  const content = document.querySelector(".notion-page-content");
  if (!content) return false;

  // 스타일 삽입
  const style = document.createElement("style");
  style.textContent = styleContent;
  document.head.appendChild(style);

  // JS 로직 실행
  const extractedHeadings = insertTableOfContents();
  setupScrollSpy(extractedHeadings);
  showDialog(extractedHeadings);
  return true;
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
  if (window.location.pathname === "/") {
    return;
  }
  waitForContentLoaded();
})();
