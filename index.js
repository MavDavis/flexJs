fetch("members.json")
    .then((res) => res.json())
    .then((data) => {
        ZeusTask(data.members);
    });

function ZeusTask(array) {
    let users = "";
    array.forEach((mem) => {
        users += ` <div class="each-mem">
                                <div class="each-mem-name">
                                <p class="color">${mem.firstname} ${mem.lastname}</p>
                                <img src=${mem.img} alt=${mem.l}>
                                </div>
                                
                            </div>`;
    });

    document.getElementById("app").innerHTML = users;
}