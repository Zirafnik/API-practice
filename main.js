fetch('https://api.giphy.com/v1/gifs/translate?api_key=X7x45YNvjvs0oPX1IjMjWpEMNxjKORZn&s=cats', {
    mode: 'cors'
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })