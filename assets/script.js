const userCardTemplate = document.querySelector("[data-user-template]")

fetch("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='Reptiles'")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const card = userCardTemplate.textContent.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        console.log(user )
    });
})
    //"https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='Reptiles'"



