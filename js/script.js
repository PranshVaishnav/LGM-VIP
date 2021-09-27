
// .team-img:hover{
//   transform: scale(1.5);
// }

for(var i=0;i<6;i++){
  document.querySelectorAll(".team-img")[i].addEventListener("mouseover",function(){
    this.style.transform='scale(1.5)';
  })
}
for(var i=0;i<6;i++){
  document.querySelectorAll(".team-img")[i].addEventListener("mouseout",function(){
    this.style.transform='scale(1)';
  })
}
