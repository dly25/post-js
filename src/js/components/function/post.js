function post() {
	const posts = document.querySelector(".distribution__posts")
	let input = document.querySelector('[name="inputOne"]');
	let input2 = document.querySelector('[name="inputTwo"]');
	const btn = document.querySelector('[name="button"]');
	let i = 1;

	btn.addEventListener("click", () => {
		checkInput();
	});

	function checkInput() { 
		if ((input.value === "") && (input2.value === "")) {
			inputValue();
			console.log("НЕ Создаёться пост")
		} else {
			createPost();
			console.log("Создаёться пост")
		}
	}

	function createPost() {
		const post = document.createElement("create");
		post.innerHTML = `
		<div class="distribution__post">
			<div class="distribution__title">${i++}. ${input.value}</div>
			<div class="distribution__text">${input2.value}</div>
		</div> `
		posts.appendChild(post);

		input.value = "";
		input2.value = "";
	}

}