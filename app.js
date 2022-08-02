const p = document.querySelector('.jokes');
const button = document.querySelector('.btn');
const url = 'https://icanhazdadjoke.com/';

button.addEventListener('click', generateJoke);

generateJoke();
// using async await
async function generateJoke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };
  let res = await fetch('https://icanhazdadjoke.com/', config);

  let data = await res.json();
  console.log(data);

  p.innerHTML = data.joke;
}
// using then
/* function generateJoke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      p.innerHTML = data.attachments[0].fallback;
    });
} */
/* fetch(url)
    .then((res) => res.json())
    .then((jokes) => (p.innerHTML = jokes.attachments[0].fallback)); */
