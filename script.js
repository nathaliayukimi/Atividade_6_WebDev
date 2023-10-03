let busca = document.querySelector(".busca");
let nome = document.querySelector(".name");
let user = document.querySelector(".user");
let projetos = document.querySelector(".projetos");
let img = document.querySelector("img")

async function buscador(){
    let name = busca.value.toLowerCase().trim().replace(" ","");
    let res = await fetch("https://api.github.com/users/" + name);
        console.log(res);
    if(res.ok){
        let json = await res.json();

        img.src = json.avatar_url;
        nome.innerText = json.name;
        user.innerText = json.login;
    }
    else{
        alert("Este usuário não existe no GitHub :(");
    }
}