window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.7s",
    });

    const btns = document.querySelectorAll("main ul li");

    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for (let btn of btns) {
                btn.classList.remove("on");
            }

            e.currentTarget.classList.add("on");
        })
    }
});