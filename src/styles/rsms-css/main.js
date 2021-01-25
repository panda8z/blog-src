// this script is run async at the end of <body>


function main() {
  registerCustomElements()
  initEventHandlers()
  addAnchorsToHeadings()
}


function registerCustomElements() {
  window.customElements.define('r-grid', class extends HTMLElement {}, { extends: "div" })
  window.customElements.define('r-cell', class extends HTMLElement {}, { extends: "div" })
}


function initEventHandlers() {
  // press ALT-G to toggle grid
  // press ALT-D to toggle debug visualization
  document.addEventListener("keypress", ev => {
    if (ev.altKey) {
      if (ev.code === "KeyG") {
        // TODO store state in URL
        document.body.classList.toggle("debug-base-grid")
      } else if (ev.code === "KeyD") {
        document.documentElement.classList.toggle("debug-base-grid")
        document.documentElement.classList.toggle("debug")
      }
    }
  })
}


function addAnchorsToHeadings() {
  const postel = document.querySelector("r-grid.main.post,r-grid.main.work")
  if (postel) {
    let headings = postel.querySelectorAll("h2[id],h3[id]")
    for (let i = 0; i < headings.length; i++) {
      addAnchorToHeading(headings[i])
    }
  }
}


// addAnchorToHeading adds a
function addAnchorToHeading(h) {
  // if there is no id, do nothing
  if (!h.id) {
    return
  }
  // if there is already an anchor in the header, do nothing
  for (let y = 0; y < h.childNodes.length; y++) {
    if (h.childNodes[y].nodeName === "A") {
      return
    }
  }
  let a = document.createElement("a")
  while (h.childNodes.length) {
    a.appendChild(h.childNodes[0])
  }
  h.appendChild(a)
  a.href = '#' + h.id
}



main()
