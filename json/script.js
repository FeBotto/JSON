var dati = [
    { 
        name: "ButtonMC",  
        id: "061310" 
    },
    { 
        name: "Barklay", 
        id: "102170" 
    },
    { 
        name: "m71blackflag", 
        id: "965340" 
    }
];

var pos = 0;

function crea(){
    document.getElementById("contenitore").innerHTML = "";
    document.getElementById("modifica").innerHTML = "";
    let div = ``;
    let select = ``;

    for(let i in dati){
        div = `
            <div class="lol">
                <h3>Tag: ${dati[i].name}</h3>
                <h3>ID: ${dati[i].id}</h3>
            </div>
        `;
        select = `
            <option value="${dati[i].name}">${dati[i].name}<p>          </p>${dati[i].id}</option>
        `;

        document.getElementById("contenitore").innerHTML += div;
        document.getElementById("modifica").innerHTML += select;
    }
}

function aggiungi(){
    let tag = document.getElementById("name");
    let idPreso = document.getElementById("id");
    console.log(tag, idPreso)

    let oggetto = {name: tag.value, id: idPreso.value};

    dati.push(oggetto);   
    tag.value = "";
    idPreso.value = "";
    crea();
}

function ok(){
    let recipiente = document.getElementById("MOD");
    let soggetto = document.querySelectorAll("option");
    recipiente.style.display = "block";

    let lol = document.getElementById("nameMod");
    let lol2 = document.getElementById("idMod");

    let xd;
    let xd2

    for(let j in soggetto){
        if(soggetto[j].selected){
            xd = soggetto[j];
        }
    }
    for(let i in dati){
        if(dati[i].name == xd.value){
            xd2 = dati[i].id
            pos = i;
        }
    }
    lol.value = xd.value;
    lol2.value = xd2;
}

function elimina(){
    let soggetto = document.querySelectorAll("option");
    console.log(soggetto);
    let xd;

    for(let j in soggetto){
        if(soggetto[j].selected){
            xd = soggetto[j];
        }
    }
    for(let i in dati){
        if(dati[i].name == xd.value){
            dati.splice(i, 1);
        }
    }
    crea();
}

function conferma(){
    let mod1 = document.getElementById("nameMod");
    let mod2 = document.getElementById("idMod");
    let sel = document.querySelector("select");

    sel[pos].innerHTML = `
        <option value="${dati[i].name}">${dati[pos].name}<p>          </p>${dati[pos].id}</option>
    `;

    div = `
        <div class="lol">
            <h3>Tag: ${dati[pos].name}</h3>
            <h3>ID: ${dati[pos].id}</h3>
        </div>
    `;

    document.getElementById("contenitore").innerHTML += div;
    document.getElementById("modifica").innerHTML += select;

    dati[pos].name = mod1;
    dati[pos].id = mod2;

    mod1.value = "";
    mod2.value = "";

    let recipiente = document.getElementById("MOD");
    recipiente.style.display = "block";
}

function ricerca(event){
    let card = document.querySelectorAll(".lol");
    let div = ``;

    for(let i in dati){
        if((dati[i].name.toLocaleLowerCase().includes(event.srcElement.value.toLowerCase())) || (dati[i].id.toLocaleLowerCase().includes(event.srcElement.value.toLowerCase()))){
        div += `            
            <div class="lol">
                <h3>Tag: ${dati[i].name}</h3>
                <h3>ID: ${dati[i].id}</h3>
            </div>
        `;
        }
    }
    document.getElementById("contenitore").innerHTML = div;
}