const Cookies = require("js-cookie");

const msefilter = document.querySelector("#mse2_mfilter");

if (msefilter) {
  const headerEl = document.querySelector(".header");
  const wrapEl = msefilter.querySelector(".filters-wrap");
  const stickyEl = msefilter.querySelector(".filters-sticky");
  const formEl = msefilter.querySelector(".filters");
  const toggleEl = msefilter.querySelector(".filters-wrap__toggle");
  const toggleOnMobileEl = msefilter.querySelector(
    ".filters-wrap__toggle-on-moblie"
  );
  const isMobile = window.matchMedia("(max-width: 959px)").matches;

  let isHidden = !!Cookies.get("filterIsHidden");
  let isVisibleOnMobile = !!Cookies.get("filterIsVisibleOnMobile");

  const getStickyTop = () => {
    let stickyTop = 0;
    stickyTop = msefilter.getBoundingClientRect().top + window.scrollY;
    stickyTop -= headerEl.clientHeight;
    if (isHidden) {
      stickyTop += stickyEl.clientHeight;
    }
    if (isMobile) {
      if (isHidden) {
        stickyTop += toggleOnMobileEl.clientHeight;
        if (isVisibleOnMobile) {
          stickyTop += 20;
        }
      }
    }
    return stickyTop
  };

  const stick = () => {
    stickyEl.classList.add("filters-sticky_fixed");
    stickyEl.style.top = `${headerEl.clientHeight}px`;
    stickyEl.style.width = `${wrapEl.clientWidth}px`;
    stickyEl.style.borderBottom = "1px solid #ccc";
    wrapEl.style.paddingTop = `${stickyEl.clientHeight}px`;
    toggleEl.style.display = "block";
    if (isHidden) {
      stickyEl.style.transform = "translateY(-100%)";
    }
  };

  const unstick = () => {
    stickyEl.classList.remove("filters-sticky_fixed");
    stickyEl.style.top = null;
    stickyEl.style.width = null;
    stickyEl.style.borderBottom = null;
    wrapEl.style.paddingTop = null;
    toggleEl.style.display = "none";
    stickyEl.style.transform = null;
    isHidden = true;
    toggleEl.innerHTML = toggleEl.dataset.open;
    Cookies.set("filterIsHidden", "1");
  };

  const hideOnSticky = () => {
    stickyEl.style.transform = "translateY(-100%)";
    isHidden = true;
    toggleEl.innerHTML = toggleEl.dataset.open;
    Cookies.set("filterIsHidden", "1");
  };

  const openOnSticky = () => {
    stickyEl.style.transform = "translateY(0)";
    isHidden = false;
    toggleEl.innerHTML = toggleEl.dataset.close;
    Cookies.remove("filterIsHidden");
  };

  const hideOnMobile = () => {
    wrapEl.classList.remove("filters-wrap_on-mobile-visible");
    formEl.style.display = "none";
    toggleOnMobileEl.style.marginTop = null;
    isVisibleOnMobile = false;
    Cookies.remove("filterIsVisibleOnMobile");
  };

  const openOnMobile = () => {
    wrapEl.classList.add("filters-wrap_on-mobile-visible");
    formEl.style.display = "grid";
    toggleOnMobileEl.style.marginTop = "20px";
    isVisibleOnMobile = true;
    Cookies.set("filterIsVisibleOnMobile", "1");
  };

  if (isMobile && isVisibleOnMobile) {
    wrapEl.classList.add("filters-wrap_on-mobile-visible");
    formEl.style.display = "grid";
    toggleOnMobileEl.style.marginTop = "20px";
  }

  if (window.scrollY > getStickyTop()) {
    stick();
  } else {
    unstick();
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > getStickyTop()) {
      stick();
    } else {
      unstick();
    }
  });

  toggleEl.addEventListener("click", function () {
    if (isHidden) {
      openOnSticky();

      if (isMobile) {
        openOnMobile();
      }
    } else {
      hideOnSticky();

      if (isMobile) {
        hideOnMobile();
      }
    }

    // обновить прикрепление с учетом новой позиции
    // onScroll();
    if (window.scrollY > getStickyTop()) {
      stick();
    } else {
      unstick();
    }
  });

  toggleOnMobileEl.addEventListener("click", function () {
    if (isVisibleOnMobile) {
      hideOnMobile();
      hideOnSticky();
    } else {
      openOnMobile();
      // openOnSticky пропущено, чтобы фильтр был изначально закрыт при прокрутке
    }

    // обновить прикрепление с учетом новой позиции
    // onScroll();
    if (window.scrollY > getStickyTop()) {
      stick();
    } else {
      unstick();
    }
  });
}
