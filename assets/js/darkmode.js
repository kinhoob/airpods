const faSolid = document.querySelectorAll(".fa-solid");

for(let i = 0; i < faSolid.length; i++){
    faSolid[i].addEventListener("click", () => {
        document.querySelector("body").classList.toggle("dark");
    })
}