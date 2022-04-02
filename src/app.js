// Clone the div in original container to copy-container when clicking it
const btn_ori_cont = document.querySelectorAll('.original-container div')
const copies_container = document.querySelector('.copy-container')

function copies_content(evt) {
    copies_container.insertAdjacentHTML("beforeend", evt.currentTarget.outerHTML)
}

btn_ori_cont.forEach(element =>
    element.addEventListener('click',copies_content)
)