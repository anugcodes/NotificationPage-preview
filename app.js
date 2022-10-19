document.querySelector("#mrk").addEventListener("click",(e) =>{
    document.querySelectorAll(".unread").forEach((element) =>{
      // element.style.backgroundColor = "red";
      element.classList.remove("unread");
      document.querySelector(".red-dot").remove(".red-dot");
      document.querySelector(".n-counter").textContent = "0"; 
    })
  })
  document.querySelectorAll(".plink").forEach(ele =>{
    ele.addEventListener("click",(e)=>{
      e.target.style.color = "hsl(219, 12%, 42%)";
    })
  })