(() => {
  // src/lib/debounce.mjs
  function debounce(func, delay = 100) {
    let timer;
    return function(...args) {
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // src/sidebar/index.mjs
  var PAGE = {
    active: false,
    headerHeight: 45,
    elementTitle: {},
    elementTCB: {},
    elementCover: {},
    elementScroller: {},
    tcbOriginStyle: "",
    timer: () => {
    }
  };
  function getSidebarPosition() {
    const offsetX = Math.round((innerWidth - PAGE.elementTitle.offsetWidth) / 2) + PAGE.elementTitle.offsetWidth;
    const offsetY = PAGE.elementCover.height + PAGE.headerHeight + PAGE.elementTitle.offsetHeight;
    return { offsetX, offsetY };
  }
  function handleSidebarResponsiveChange() {
    console.log("resize");
    const { offsetX, offsetY } = getSidebarPosition();
    const color = PAGE.elementTCB.childNodes[0].childNodes[0]?.style?.color;
    if (offsetX - PAGE.elementTitle.offsetWidth > 150) {
      PAGE.active = true;
      PAGE.elementTCB.style.cssText = "position: absolute;";
      PAGE.elementTCB.style.cssText += `left: ${offsetX}px; top: ${offsetY}px; width: 240px;`;
      PAGE.elementTCB.style.cssText += `border-left: medium solid ${color ?? ""}; padding-left: 1rem;`;
    } else {
      PAGE.active = false;
      PAGE.elementTCB.style.cssText = "";
      PAGE.elementTCB.style.cssText += PAGE.tcbOriginStyle;
    }
  }
  function handleSidebarScrollChange() {
    console.log("scroll");
    if (!PAGE.active)
      return;
    console.log("offsetY", PAGE.elementTCB.offsetTop);
    console.log("scrollY", window.scrollY);
    if (PAGE.elementTCB.offsetTop + 128 <= window.scrollY) {
      PAGE.elementTCB.style.cssText += "position: fixed; top: 128px;";
    } else {
      const { offsetY } = getSidebarPosition();
      PAGE.elementTCB.style.cssText += `position: absolute; top: ${offsetY}px;`;
    }
  }
  function sidebar() {
    PAGE.elementTitle = document.getElementsByClassName("width")[0];
    PAGE.elementTCB = document.getElementsByClassName(
      "notion-table_of_contents-block"
    )[0];
    PAGE.elementCover = document.querySelector("img.page_cover");
    PAGE.elementScroller = document.querySelector(".notion-scroller");
    console.log("wtf");
    console.log("wtf", PAGE.elementScroller);
    PAGE.tcbOriginStyle = document.querySelector(
      ".notion-table_of_contents-block"
    ).style.cssText;
    if (PAGE.elementTCB) {
      handleSidebarResponsiveChange();
    }
    window.addEventListener("resize", debounce(handleSidebarResponsiveChange, 200));
    window.addEventListener("scroll", handleSidebarScrollChange);
  }

  // src/index.mjs
  var Config = {
    _sidebar: window.sidebar ?? true
  };
  document.addEventListener("DOMContentLoaded", function() {
    console.log("fuckyou");
    if (Config._sidebar) {
      sidebar();
    }
  });
})();
