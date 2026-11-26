let movies = [
    {title: "Avatar", rating: 4},
    {title: "Titanic", rating: 5},
    {title: "Inception", rating: 5},
    {title: "Tenet", rating: 3}
];

let movie = movies.find(function(m) {
    return m.rating === 5;
});

console.log(movie.title);