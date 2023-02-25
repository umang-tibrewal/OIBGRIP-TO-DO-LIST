const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const cbox = document.querySelector("#ctobox")


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    let d = new Date();
    let day = d.getDate();
    let month = (d.getMonth() + 1);
    let year = d.getFullYear();
    let hour = d.getHours();
    let minite = d.getMinutes();
    let sec = d.getSeconds();
    listItem.innerHTML = `
         ${item}
         <i class="fa-solid fa-xmark"></i>
-----------
         ${day}-${month}-${year}
-----------
            ${hour}:${minite}:${sec}
    `;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");

        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {

            listItem.remove();
            addComplete(item);

        }
    )
    toDoBox.appendChild(listItem)
}


const addComplete = (item) => {
    const listIte = document.createElement("li");
    let d = new Date();
    let day = d.getDate();
    let month = (d.getMonth() + 1);
    let year = d.getFullYear();
    let hour = d.getHours();
    let minite = d.getMinutes();
    let sec = d.getSeconds();
    listIte.innerHTML = `
         ${item}
 
         -----------
                  ${day}-${month}-${year}
         -----------
                     ${hour}:${minite}:${sec}
         <i class="fa-solid fa-xmark"></i>
    `;

    listIte.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");

        }
    )
    listIte.querySelector("i").addEventListener(
        "click",
        function () {

            listIte.remove();


        }
    )



    cbox.appendChild(listIte);
}