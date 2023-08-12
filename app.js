const APIURL="https://api.github.com/users/";
const main=document.querySelector('#main');
const searchBox=document.querySelector("#search")
const getUser=async(username)=>{
    const response=await fetch(APIURL+username);
    const data=await response.json()
   

    const information=`
    <div id="information">
        <div id="image">
            <img class="avatar" src="${data.avatar_url}" alt="" />
        </div>
        <div id="details">
            <h2>${data.name}</h2>
          
            <div id="info">
                <p>${data.followers}   <strong>Followers</strong></p>
                <p>${data.following}   <strong>Following</strong></p>
                <p>${data.public_repos}   <strong>Repositories</strong></p>
            </div>
            <div id="repos">
               
            </div>

        </div>
    </div>
    `

    main.innerHTML=information;

    getRepos(username)
}


getUser("priyankaranawat")


const getRepos=async(username)=>{
    const repos=document.querySelector('#repos')
    const response=await fetch(APIURL+username+"/repos")
    const data=await response.json();
   data.forEach(
    (item) => {
      
        const elem=document.createElement("a")
        elem.classList.add("repo")
        elem.href=item.html_url
        elem.innerText=item.name
        elem.target="_blank"
        repos.appendChild(elem)
    
   });
}


const formSubmit=()=>{
   
    if(searchBox.value!=""){
        getUser(searchBox.value);
    }
    return false;
}


searchBox.addEventListener(
    "focusout",
    function(){
        formSubmit()
    }
)


/* <a class="repo" href="#" target="_blank">Repository 1</a>
                <a class="repo" href="#" target="_blank">Repository 2</a>
                <a class="repo" href="#" target="_blank">Repository 3</a> */