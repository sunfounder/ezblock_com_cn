
(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://ezblock.cc/readDocFile/sunfounderIcon.png';
  document.getElementsByTagName('head')[0].appendChild(link);
})();
function setHomeIcon(){
  try{
    var footer = null;
    for (let i=0;i<7;i++){
      footer =document.getElementsByTagName("footer")[0];
      footer.removeChild(footer.lastChild);  
    }
    console.log("footer");
    footer.style.cssText = "opacity:1;";
    var goBack = document.createElement("div"); 
    goBack.setAttribute("class","goBack");
    var sunFounderIcon = document.createElement('a');
    sunFounderIcon.setAttribute('class','sunFounderIcon');
    sunFounderIcon.setAttribute('href','https://www.sunfounder.com');
    sunFounderIcon.setAttribute('target','_blank');
    var readTheDocIcon = document.createElement('a');
    readTheDocIcon.innerHTML = `<span class="readIconImg">Docs Home</span>`;
    readTheDocIcon.setAttribute('class','readTheDocIcon');
    readTheDocIcon.setAttribute('href','https://docs.sunfounder.com/en/latest');
    readTheDocIcon.setAttribute('target','_blank');
  
    var iconImg = document.createElement('img');
    iconImg.setAttribute('class','iconImg');
    iconImg.setAttribute('src','https://ezblock.cc/readDocFile/sunFounderIcon.svg');
    // var readIconImg = document.createElement('img');
    // readIconImg.setAttribute('class','iconImg');
    // readIconImg.setAttribute('src','https://ezblock.cc/readDocFile/readTheDoc.png');
  
  
    sunFounderIcon.appendChild(iconImg);
    // readTheDocIcon.appendChild(readIconImg);
    goBack.appendChild(sunFounderIcon);
    goBack.appendChild(readTheDocIcon);
  
    var navSearch = document.getElementsByClassName('wy-side-nav-search')[0];
    var oldChild =  document.querySelector('.wy-side-nav-search>div[role=search]');
    var iconHome = document.getElementsByClassName("icon-home")[0];
    var _version = document.getElementsByClassName("version")[0];
    navSearch.removeChild(iconHome);
    navSearch.removeChild(_version);
    navSearch.insertBefore(goBack,oldChild);
  }catch(err){
    console.log(err);
  }

  // navSearch.style.cssText = "opacity:1;";

 
};
window.onload =function(){
  setHomeIcon();
};
