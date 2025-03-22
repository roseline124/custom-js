const styleContent=`
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

`,htmlContent=`
<div class=rorocustom-table-of-contents>
  <div style=display:flex>
  <div contenteditable=false style=width:100%>
  <div class=rorocustom-table-of-contents-container>
  <div class=rorocustom-table-of-contents-transition>
  <div class=rorocustom-table-of-contents-wrapper>
  <div class=rorocustom-table-of-contents-wrapper-padding></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
    `,tagToClass={H2:"rorocustom-table-of-contents-heading1",H3:"rorocustom-table-of-contents-heading2",H4:"rorocustom-table-of-contents-heading3"};let scrollSpyFlag=!0,activeClassNameByTheme="rorocustom-table-of-contents-active";function setupScrollSpy(t){let o=Array.from(document.querySelectorAll(".rorocustom-table-of-contents-heading"));function e(){if(!scrollSpyFlag)return;let e=function o(){let e=window.scrollY+20,n=0;for(let a=0;a<t.length;a++){let r=t[a].getBoundingClientRect().top+window.scrollY;if(r<=e)n=a;else break}return n}();o.forEach((t,o)=>{o===e?t.classList.add(activeClassNameByTheme):t.classList.remove(activeClassNameByTheme)})}window.addEventListener("scroll",e),e()}function getFlatHeadings(t){if("string"!=typeof t)return[];let o=document.querySelector(t);if(!o)return[];let e=[];return o.querySelectorAll("h2, h3, h4").forEach(t=>{e.push(t)}),e}function insertTableOfContents(){let t=document.createElement("div");document.body.appendChild(t),document.body.style.position="relative",t.outerHTML=htmlContent;let o=document.querySelector(".rorocustom-table-of-contents");if(!o)return[];let e=getFlatHeadings(".notion-page-content"),n=document.querySelector(".rorocustom-table-of-contents-wrapper-padding");if(!n)return[];let a=document.body.classList.contains("dark");return e.forEach(t=>{let o=document.createElement("div"),e=document.createElement("div"),r=document.createElement("p");o.classList.add("rorocustom-table-of-contents-heading"),o.classList.add(tagToClass[t.tagName]),r.classList.add("rorocustom-table-of-contents-label"),r.textContent=t.textContent,a&&(o.classList.add("rorocustom-table-of-contents-heading-darktheme"),r.classList.add("rorocustom-table-of-contents-label-darktheme"),activeClassNameByTheme="rorocustom-table-of-contents-active-darktheme"),o.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),scrollSpyFlag=!1;let n=document.querySelector(`.${activeClassNameByTheme}`);n&&n.classList.remove(activeClassNameByTheme),o.classList.add(activeClassNameByTheme),t.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{scrollSpyFlag=!0},1e3)}),o.appendChild(r),o.appendChild(e),n.appendChild(o)}),console.log("init: insert rorocustom table of contents!"),e}!function(){let t=document.createElement("style");t.textContent=styleContent,document.head.appendChild(t);let o=insertTableOfContents();setupScrollSpy(o)}();