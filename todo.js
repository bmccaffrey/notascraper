const url = "https://georgerrmartin.com/notablog/";

const posts = $$(".post-main");
const title = "h1 > a";
const date =  ".thedate";
const post =  ".post";

$$(".post-main").map(p => {
	const text = $$(".post p", p).map(p => p.textContent.trim()).join("\n");
	const words = text ? text.match(/\S+/g).length : 0;
	return {
		title: $("h1 > a", p).textContent,
		date: $(".thedate", p).textContent,
		text,
		words,
	};
});

const olderBtn = $(".alignright"); // click
const nextPageUrl = $(".alignright a").href; // or goto(url)
// might be able to a do a while loop here, e.g. while still olderBtn keep going