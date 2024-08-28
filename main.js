let counter = document.getElementById("counter")
let button = document.getElementById("button")
let score=0
button.addEventListener("click", function() {
	score++
	counter.textContent="Сила: "+score
})