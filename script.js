let colors = ["Blue", "Yellow", "Green", "Orange", "Cyan", "Purple", "Salmon", "Grey", "Violet"];
let start = 0;

document.querySelector("#btton").addEventListener("click", () => {
  if(start > colors.length - 1)
    start = 0;
  document.body.style.backgroundColor = colors[start++];  
});