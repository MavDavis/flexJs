// just
fetch("members.json")
    .then((res) => res.json())
    .then((data) => {
        ZeusTask(data.members);
    });

function ZeusTask(array) {
    let users = "";
    array.forEach((mem) => {
        users += `
         <div class="each-mem-name">            <img src=${mem.img} alt=${mem.l}><div class="text">
         <h4 class=""> ${mem.firstname} ${mem.lastname} </h4>
<p class="">BestMovie: ${mem.bestmovie} </p>

<p class="">Complexion: ${mem.complexion} 
<p class=""> Birthmonth: ${mem.birthmonth} </p>
<p class="">Age: ${mem.Age} </p>
<p class="">State: ${mem.state} </p>
         </div>

</div>`;
    });

    document.getElementById("app").innerHTML = users;
}
