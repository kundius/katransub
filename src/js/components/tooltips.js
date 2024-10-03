const tippy = require("tippy.js");

function initCoupon() {
  const all = document.querySelectorAll("[data-tooltip-coupon]");
  if (all.length > 0) {
    all.forEach((el) => {
      if (el.couponTippyInit) return;
      tippy.default(el, {
        allowHTML: true,
        theme: "light",
        trigger: "mouseenter click",
        content:
          '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>',
      });
      el.couponTippyInit = true;
    });
  }
}

initCoupon();

$(document).on("mse2_load", initCoupon);

$(document).on("pdopage_load", initCoupon);

const tooltipPriceTemplate = document.getElementById("tooltip-price");
if (tooltipPriceTemplate) {
  tippy.default("[data-tooltip-price]", {
    allowHTML: true,
    theme: "light",
    trigger: "mouseenter click",
    content: tooltipPriceTemplate.innerHTML,
  });
}

window.addEventListener("scroll", () => {
  tippy.hideAll();
});
