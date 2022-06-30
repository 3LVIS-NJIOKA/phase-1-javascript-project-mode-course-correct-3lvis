const links = document.querySelectorAll('ul li');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');

let selectedPageBtn = "";
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let i = 0; i < pages.length; i++){
            pages[i].style.display = "none";
        }
        pages[i].style.display = "block";
        selectedPageBtn = i;
        document.querySelector('header').style.filter = "blur(2px)";
    });
}

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener('click', function(){
        allBtns[i].parentElement.style.display = "none";
        document.querySelector('header').style.filter = "blur(0px)";
    });
}
fetch("http://universities.hipolabs.com/search?name=middle&country=turkey")
 .then((data) => data.json())
 .then((completeUniversityData) => {
     let data1=" "
     completeUniversityData((values) => {
       data1 = `<div class="page">
      
       <h1 class="web_pages">${values.web_pages}</h1>  
       <p class="name">${values.name}</p>
       <p class="country">${values.country}</p>
     </div>`
    });
    document.getElementById("aboutInfo").innerHTML=data1;
     }
 )
