let btn= document.querySelector("button");
btn.addEventListener('click', async ()=>{
  let search =document.querySelector("input").value;
  let newdata=await data(search);
  let li= document.getElementById("list");
  li.innerText="";
  li.innerText=newdata;
  li.classList.add("active");
  if(li.innerText=="undefined"){
    let error=document.getElementById('error');
    error.innerText="Not found! Search another words";
    li.style.display="none";
    error.style.visibility="visible"
  }
  else{
    li.style.display="block";
    error.style.visibility="hidden";
  }
})

let url="https://api.dictionaryapi.dev/api/v2/entries/en/ ";
async function data(search){
  try{
  let res= await fetch(url+search);
  let data= await res.json();
  let li=document.getElementById('list');
   return data[0].meanings[0].definitions[0].definition;}
   catch(e){
   console.warn('error occured')
   }
}
