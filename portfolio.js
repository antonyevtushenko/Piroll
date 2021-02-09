let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items");

function hideTabsContent() {
    tabContent.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");
    })

    tabItems.forEach(item => {
        item.classList.remove('active')
    })
}

function showTabsContent(i = 0) {
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("active");
}


hideTabsContent()
showTabsContent()

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;

    if(target.classList.contains("tab-title-item")) {
        tabItems.forEach((item,i) => {
            if(target == item) {
                hideTabsContent();
                showTabsContent(i)
            }
        })
    }
})