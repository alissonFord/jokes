const jokeButton = document.querySelector('.getJoke');
const jokeText = document.querySelector('.joke p');
const jokeButtonText = jokeButton.querySelector('.jokeText');

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously...?',
    'stop it.',
    'please stop',
    'that was the worst one',
  ];

function setRandomButtonText(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    console.log(item);
    if(item === not) {
        return setRandomButtonText(arr, not);
    }
    return item;
}

async function fetchJoke() {
    let joke = '';
    const data = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'}
    })
    .then(async function(response)  {
        joke = await response.json();
    })
    .catch(console.error);
    console.log(joke);
    return joke;
}

async function handleClick() {
    const { joke }  = await fetchJoke();
    jokeText.textContent = joke;
    console.log(setRandomButtonText(buttonText, jokeButtonText.textContent));
    jokeButtonText.textContent = setRandomButtonText(buttonText, jokeButtonText.textContent);
}

jokeButton.addEventListener('click', handleClick);