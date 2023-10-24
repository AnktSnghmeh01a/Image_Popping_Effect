// throttle function
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}




// Choosing the random image
function randomImg(){


  const images = [
    "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
   "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1593352217070-4900df41715b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3MlMjBnaXJsfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3MlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1461800919507-79b16743b257?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww"
    
    // ... add more image URLs as needed
];

// Step 2: Generate a random index
const randomIndex = Math.floor(Math.random() * images.length);

// Step 3: Pick a random image URL from the array
const randomImageUrl = images[randomIndex];


return randomImageUrl;




}



// Checking the position of the mouse

document.querySelector(".outer_box").addEventListener("mousemove",
throttleFunction((dets)=>

{
 var div =  document.createElement('div');
  div.classList.add('imageDiv');
  div.style.left = dets.clientX + 'px';
  div.style.top = dets.clientY + 'px';
  document.body.appendChild(div);

  var img =  document.createElement('img');
  img.setAttribute("src",randomImg());
  div.appendChild(img);

  gsap.to(img,{
    y:"0",
    ease:Power1,
    duration: .3
})
gsap.to(img,{
    y:"100%",
    delay:.6,
    ease:Power2
})

  setTimeout(function(){
    div.remove()
  },2000)
},400
)





)
