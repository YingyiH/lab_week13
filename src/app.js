// Clone the div in original container to copy-container when clicking it
const btn_ori_cont = document.querySelectorAll('.original-container div')
const copies_container = document.querySelector('.copy-container')

function copies_content(evt) {
    copies_container.insertAdjacentHTML("beforeend", evt.currentTarget.outerHTML)
}

btn_ori_cont.forEach(element =>
    element.addEventListener('click',copies_content)
)

// Remove the copy-container
const btn_clean_copies = document.querySelector('.copies button')

function clean_copies(){
    while(copies_container.firstChild){
        copies_container.removeChild(copies_container.firstChild)
    }

}
btn_clean_copies.addEventListener('click',clean_copies)
