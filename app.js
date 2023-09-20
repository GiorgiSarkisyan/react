const wrapper = document.getElementById("wrapper")

function containerDescription(color,text,button) {
    const container = document.createElement("div")
    wrapper.appendChild(container)
    wrapper.style.display = "flex"
    wrapper.style.gap = "30px"

    container.style.backgroundColor = color
    container.innerHTML =  `<p> ${text} </p> <button> ${button} </button>`
    container.style.width = "400px"
    container.style.height = "400px"
    const removeButton = container.querySelector("button")
    removeButton.addEventListener("click", () => {
        container.remove(container)
    })
}
containerDescription("red", "raime teqsti", "ghilaki1")
containerDescription("green", "raime teqsti2", "ghilaki2")
containerDescription("blue", "raime teqsti3", "ghilaki3")