const PAGE = {
  headerHeight: 45,
  elementTitle: {},
  elementTCB: {},
  elementCover: {},
  tcbOriginStyle: ''
}
const largeTablet = window.matchMedia('(min-width: 1024px)')
const desktopDevice = window.matchMedia('(min-width: 1280px)')

function calOffsetPosition () {
  const offsetX =
        Math.round((innerWidth - PAGE.elementTitle.offsetWidth) / 2) +
        PAGE.elementTitle.offsetWidth
  const offsetY =
        PAGE.elementCover.height +
        PAGE.headerHeight +
        PAGE.elementTitle.offsetHeight
  return { offsetX, offsetY }
}
function handleDeviceChange (e) {
  if (!PAGE.elementTCB) return
  if (e.matches) {
    const { offsetX, offsetY } = calOffsetPosition()
    const color = PAGE.elementTCB.childNodes[0].childNodes[0].style.color

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
  PAGE.elementTCB = document.getElementsByClassName(
    'notion-table_of_contents-block'
  )[0]
  PAGE.elementCover = document.querySelector('img.page_cover')
  PAGE.tcbOriginStyle = document.querySelector(
    '.notion-table_of_contents-block'
  ).style.cssText
  handleDeviceChange(desktopDevice)
})
largeTablet.addListener(handleDeviceChange)
desktopDevice.addListener(handleDeviceChange)
