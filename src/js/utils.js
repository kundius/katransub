function disableScroll() {
  if (document.getElementById('removed-body-scroll-bar-style')) return

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

  const styles = `
  body {
    --removed-body-scroll-bar-size: ${scrollbarWidth}px;
    overflow: hidden !important;
    overscroll-behavior: contain;
    position: relative !important;
    padding-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    margin-left: 0;
    margin-top: 0;
    margin-right: ${scrollbarWidth}px !important;
  }
  `
  const styleSheet = document.createElement('style')
  styleSheet.innerHTML = styles
  styleSheet.id = 'removed-body-scroll-bar-style'
  document.head.appendChild(styleSheet)
}

function enableScroll() {
  const styleSheet = document.getElementById('removed-body-scroll-bar-style')
  styleSheet?.parentNode?.removeChild(styleSheet)
}

exports.disableScroll = disableScroll
exports.enableScroll = enableScroll
