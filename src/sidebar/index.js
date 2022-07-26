const PAGE = {
  headerHeight: 45,
  elementTitle: {},
  elementTCB: {},
  elementCover: {},
  tcbOriginStyle: '',
  timer: () => {}
}
function debounce (func, delay) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, delay)
  }
}
function calTCBposition () {
  const offsetX = Math.round((innerWidth - PAGE.elementTitle.offsetWidth) / 2) + PAGE.elementTitle.offsetWidth
  const offsetY = PAGE.elementCover.height + PAGE.headerHeight + PAGE.elementTitle.offsetHeight
  const color = PAGE.elementTCB.childNodes[0].childNodes[0].style.color

  if (offsetX - PAGE.elementTitle.offsetWidth > 150) {
    PAGE.elementTCB.style.cssText = 'position: fixed;'
    PAGE.elementTCB.style.cssText += `left: ${offsetX}px; top: ${offsetY}px; width: 240px;`
    PAGE.elementTCB.style.cssText += `border-left: medium solid ${color}; padding-left: 1rem;`
  } else {
    PAGE.elementTCB.style.cssText = ''
    PAGE.elementTCB.style.cssText += PAGE.tcbOriginStyle
  }
}
document.addEventListener('DOMContentLoaded', function () {
  PAGE.elementTitle = document.getElementsByClassName('width')[0]
  PAGE.elementTCB = document.getElementsByClassName('notion-table_of_contents-block')[0]
  PAGE.elementCover = document.querySelector('img.page_cover')
  PAGE.tcbOriginStyle = document.querySelector('.notion-table_of_contents-block').style.cssText

  if (PAGE.elementTCB) { calTCBposition() }
})
window.addEventListener('resize', debounce(calTCBposition, 500))
