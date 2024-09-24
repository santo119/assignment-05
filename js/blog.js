
function blogHandler(){
    window.location.href = 'blog.html'
   
}

document.getElementById('history-toggle').addEventListener('click', function(){
    const historyButton = document.getElementById("history-toggle")
  historyButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  const donateButton = document.getElementById("donation-toggle");
  donateButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  donateButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
})

document.getElementById('donation-toggle').addEventListener('click', function(){
    const historyButton = document.getElementById("history-toggle")
  const donateButton = document.getElementById("donation-toggle")

  historyButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  historyButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
  donateButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  )
})
