console.log("Test start UI file");
const newBook = document.querySelector("#newBook");
const booksList = document.querySelector("#list");
const booksForm = document.querySelector("#booksForm");
const inputText = document.querySelector('[data-name="input-text"]');
const addInputValue = document.querySelectorAll('[data-name="addInputValue"]');
const booksFromLocalDataBase = [
    {
        id: 0,
        title: "C sharp",
        category: "Fantasy",
        author: "UNKNOWN",
        year: 2022,
        price: 7.99
    },
    {
        id: 0,
        title: "Metamorphoses",
        category: "Fantasy",
        author: "Ovid",
        year: 100,
        price: 559.3000000000001
    },
    {
        id: 0,
        title: "The Book of Disquiet",
        category: "Fantasy",
        author: "Fernando Pessoa",
        year: 1928,
        price: 567.29
    },
    {
        id: 0,
        title: "Tales",
        category: "Fantasy",
        author: "Edgar Allan Poe",
        year: 1950,
        price: 575.28
    },
    {
        id: 0,
        title: "In Search of Lost Time",
        category: "Fantasy",
        author: "Marcel Proust",
        year: 1920,
        price: 583.27
    },
    {
        id: 0,
        title: "Gargantua and Pantagruel",
        category: "Fantasy",
        author: "Fran\xe7ois Rabelais",
        year: 1533,
        price: 591.26
    },
    {
        id: 0,
        title: "Pedro P\xe1ramo",
        category: "Fantasy",
        author: "Juan Rulfo",
        year: 1955,
        price: 599.25
    },
    {
        id: 0,
        title: "The Masnavi",
        category: "Fantasy",
        author: "Rumi",
        year: 1236,
        price: 607.24
    },
    {
        id: 0,
        title: "Midnight's Children",
        category: "Fantasy",
        author: "Salman Rushdie",
        year: 1981,
        price: 615.23
    },
    {
        id: 0,
        title: "Bostan",
        category: "Fantasy",
        author: "Saadi",
        year: 1257,
        price: 623.22
    },
    {
        id: 0,
        title: "Season of Migration to the North",
        category: "Fantasy",
        author: "Tayeb Salih",
        year: 1966,
        price: 631.21
    },
    {
        id: 0,
        title: "Blindness",
        category: "Fantasy",
        author: "Jos\xe9 Saramago",
        year: 1995,
        price: 639.2
    },
    {
        id: 0,
        title: "Hamlet",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1603,
        price: 647.19
    },
    {
        id: 0,
        title: "King Lear",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1608,
        price: 655.1800000000001
    },
    {
        id: 0,
        title: "Othello",
        category: "Fantasy",
        author: "William Shakespeare",
        year: 1609,
        price: 663.1700000000001
    },
    {
        id: 0,
        title: "Oedipus the King",
        category: "Fantasy",
        author: "Sophocles",
        year: -430,
        price: 671.16
    },
    {
        id: 0,
        title: "The Red and the Black",
        category: "Fantasy",
        author: "Stendhal",
        year: 1830,
        price: 679.15
    },
    {
        id: 0,
        title: "The Life And Opinions of Tristram Shandy",
        category: "Fantasy",
        author: "Laurence Sterne",
        year: 1760,
        price: 687.14
    },
    {
        id: 0,
        title: "Confessions of Zeno",
        category: "Fantasy",
        author: "Italo Svevo",
        year: 1923,
        price: 695.13
    },
    {
        id: 0,
        title: "Gulliver's Travels",
        category: "Fantasy",
        author: "Jonathan Swift",
        year: 1726,
        price: 703.12
    },
    {
        id: 0,
        title: "War and Peace",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1867,
        price: 711.11
    },
    {
        id: 0,
        title: "Anna Karenina",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1877,
        price: 719.1
    },
    {
        id: 0,
        title: "The Death of Ivan Ilyich",
        category: "Fantasy",
        author: "Leo Tolstoy",
        year: 1886,
        price: 727.09
    },
    {
        id: 0,
        title: "The Adventures of Huckleberry Finn",
        category: "Fantasy",
        author: "Mark Twain",
        year: 1884,
        price: 735.08
    },
    {
        id: 0,
        title: "Ramayana",
        category: "Fantasy",
        author: "Valmiki",
        year: -450,
        price: 743.07
    },
    {
        id: 0,
        title: "The Aeneid",
        category: "Fantasy",
        author: "Virgil",
        year: -23,
        price: 751.0600000000001
    },
    {
        id: 0,
        title: "Mahabharata",
        category: "Fantasy",
        author: "Vyasa",
        year: -700,
        price: 759.0500000000001
    },
    {
        id: 0,
        title: "Leaves of Grass",
        category: "Fantasy",
        author: "Walt Whitman",
        year: 1855,
        price: 767.04
    },
    {
        id: 0,
        title: "Things Fall Apart",
        category: "Fantasy",
        author: "Chinua Achebe",
        year: 1958,
        price: 0
    },
    {
        id: 0,
        title: "Fairy tales",
        category: "Fantasy",
        author: "Hans Christian Andersen",
        year: 1836,
        price: 7.99
    },
    {
        id: 0,
        title: "The Divine Comedy",
        category: "Fantasy",
        author: "Dante Alighieri",
        year: 1315,
        price: 15.98
    },
    {
        id: 0,
        title: "The Epic Of Gilgamesh",
        category: "Fantasy",
        author: "Unknown",
        year: -1700,
        price: 23.97
    },
    {
        id: 0,
        title: "The Book Of Job",
        category: "Fantasy",
        author: "Unknown",
        year: -600,
        price: 31.96
    },
    {
        id: 0,
        title: "One Thousand and One Nights",
        category: "Fantasy",
        author: "Unknown",
        year: 1200,
        price: 39.95
    },
    {
        id: 0,
        title: "Nj\xe1l's Saga",
        category: "Fantasy",
        author: "Unknown",
        year: 1350,
        price: 47.94
    },
    {
        id: 0,
        title: "Pride and Prejudice",
        category: "Fantasy",
        author: "Jane Austen",
        year: 1813,
        price: 55.93
    },
    {
        id: 0,
        title: "Le P\xe8re Goriot",
        category: "Fantasy",
        author: "Honor\xe9 de Balzac",
        year: 1835,
        price: 63.92
    },
    {
        id: 0,
        title: "Molloy, Malone Dies, The Unnamable, the trilogy",
        category: "Fantasy",
        author: "Samuel Beckett",
        year: 1952,
        price: 71.91
    },
    {
        id: 0,
        title: "The Decameron",
        category: "Fantasy",
        author: "Giovanni Boccaccio",
        year: 1351,
        price: 79.9
    },
    {
        id: 0,
        title: "Ficciones",
        category: "Fantasy",
        author: "Jorge Luis Borges",
        year: 1965,
        price: 87.89
    },
    {
        id: 0,
        title: "Wuthering Heights",
        category: "Fantasy",
        author: "Emily Bront\xeb",
        year: 1847,
        price: 95.88
    },
    {
        id: 0,
        title: "The Stranger",
        category: "Fantasy",
        author: "Albert Camus",
        year: 1942,
        price: 103.87
    },
    {
        id: 0,
        title: "Poems",
        category: "Fantasy",
        author: "Paul Celan",
        year: 1952,
        price: 111.86
    },
    {
        id: 0,
        title: "Journey to the End of the Night",
        category: "Fantasy",
        author: "Louis-Ferdinand C\xe9line",
        year: 1932,
        price: 119.85000000000001
    },
    {
        id: 0,
        title: "Don Quijote De La Mancha",
        category: "Fantasy",
        author: "Miguel de Cervantes",
        year: 1610,
        price: 127.84
    },
    {
        id: 0,
        title: "The Canterbury Tales",
        category: "Fantasy",
        author: "Geoffrey Chaucer",
        year: 1450,
        price: 135.83
    },
    {
        id: 0,
        title: "Stories",
        category: "Fantasy",
        author: "Anton Chekhov",
        year: 1886,
        price: 143.82
    },
    {
        id: 0,
        title: "Nostromo",
        category: "Fantasy",
        author: "Joseph Conrad",
        year: 1904,
        price: 151.81
    },
    {
        id: 0,
        title: "Great Expectations",
        category: "Fantasy",
        author: "Charles Dickens",
        year: 1861,
        price: 159.8
    },
    {
        id: 0,
        title: "Jacques the Fatalist",
        category: "Fantasy",
        author: "Denis Diderot",
        year: 1796,
        price: 167.79
    },
    {
        id: 0,
        title: "Berlin Alexanderplatz",
        category: "Fantasy",
        author: "Alfred D\xf6blin",
        year: 1929,
        price: 175.78
    },
    {
        id: 0,
        title: "Crime and Punishment",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1866,
        price: 183.77
    },
    {
        id: 0,
        title: "The Idiot",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1869,
        price: 191.76
    },
    {
        id: 0,
        title: "The Possessed",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1872,
        price: 199.75
    },
    {
        id: 0,
        title: "The Brothers Karamazov",
        category: "Fantasy",
        author: "Fyodor Dostoevsky",
        year: 1880,
        price: 207.74
    },
    {
        id: 0,
        title: "Middlemarch",
        category: "Fantasy",
        author: "George Eliot",
        year: 1871,
        price: 215.73000000000002
    },
    {
        id: 0,
        title: "Invisible Man",
        category: "Fantasy",
        author: "Ralph Ellison",
        year: 1952,
        price: 223.72
    },
    {
        id: 0,
        title: "Medea",
        category: "Fantasy",
        author: "Euripides",
        year: -431,
        price: 231.71
    },
    {
        id: 0,
        title: "Absalom, Absalom!",
        category: "Fantasy",
        author: "William Faulkner",
        year: 1936,
        price: 239.70000000000002
    },
    {
        id: 0,
        title: "The Sound and the Fury",
        category: "Fantasy",
        author: "William Faulkner",
        year: 1929,
        price: 247.69
    },
    {
        id: 0,
        title: "Madame Bovary",
        category: "Fantasy",
        author: "Gustave Flaubert",
        year: 1857,
        price: 255.68
    },
    {
        id: 0,
        title: "Sentimental Education",
        category: "Fantasy",
        author: "Gustave Flaubert",
        year: 1869,
        price: 263.67
    },
    {
        id: 0,
        title: "Gypsy Ballads",
        category: "Fantasy",
        author: "Federico Garc\xeda Lorca",
        year: 1928,
        price: 271.66
    },
    {
        id: 0,
        title: "One Hundred Years of Solitude",
        category: "Fantasy",
        author: "Gabriel Garc\xeda M\xe1rquez",
        year: 1967,
        price: 279.65000000000003
    },
    {
        id: 0,
        title: "Love in the Time of Cholera",
        category: "Fantasy",
        author: "Gabriel Garc\xeda M\xe1rquez",
        year: 1985,
        price: 287.64
    },
    {
        id: 0,
        title: "Faust",
        category: "Fantasy",
        author: "Johann Wolfgang von Goethe",
        year: 1832,
        price: 295.63
    },
    {
        id: 0,
        title: "Dead Souls",
        category: "Fantasy",
        author: "Nikolai Gogol",
        year: 1842,
        price: 303.62
    },
    {
        id: 0,
        title: "The Tin Drum",
        category: "Fantasy",
        author: "G\xfcnter Grass",
        year: 1959,
        price: 311.61
    },
    {
        id: 0,
        title: "The Devil to Pay in the Backlands",
        category: "Fantasy",
        author: "Jo\xe3o Guimar\xe3es Rosa",
        year: 1956,
        price: 319.6
    },
    {
        id: 0,
        title: "Hunger",
        category: "Fantasy",
        author: "Knut Hamsun",
        year: 1890,
        price: 327.59000000000003
    },
    {
        id: 0,
        title: "The Old Man and the Sea",
        category: "Fantasy",
        author: "Ernest Hemingway",
        year: 1952,
        price: 335.58
    },
    {
        id: 0,
        title: "Iliad",
        category: "Fantasy",
        author: "Homer",
        year: -735,
        price: 343.57
    },
    {
        id: 0,
        title: "Odyssey",
        category: "Fantasy",
        author: "Homer",
        year: -800,
        price: 351.56
    },
    {
        id: 0,
        title: "A Doll's House",
        category: "Fantasy",
        author: "Henrik Ibsen",
        year: 1879,
        price: 359.55
    },
    {
        id: 0,
        title: "Ulysses",
        category: "Fantasy",
        author: "James Joyce",
        year: 1922,
        price: 367.54
    },
    {
        id: 0,
        title: "The Trial",
        category: "Fantasy",
        author: "Franz Kafka",
        year: 1925,
        price: 383.52
    },
    {
        id: 0,
        title: "The Castle",
        category: "Fantasy",
        author: "Franz Kafka",
        year: 1926,
        price: 391.51
    },
    {
        id: 0,
        title: "The recognition of Shakuntala",
        category: "Fantasy",
        author: "Kālidāsa",
        year: 150,
        price: 399.5
    },
    {
        id: 0,
        title: "The Sound of the Mountain",
        category: "Fantasy",
        author: "Yasunari Kawabata",
        year: 1954,
        price: 407.49
    },
    {
        id: 0,
        title: "Zorba the Greek",
        category: "Fantasy",
        author: "Nikos Kazantzakis",
        year: 1946,
        price: 415.48
    },
    {
        id: 0,
        title: "Sons and Lovers",
        category: "Fantasy",
        author: "D. H. Lawrence",
        year: 1913,
        price: 423.47
    },
    {
        id: 0,
        title: "Independent People",
        category: "Fantasy",
        author: "Halld\xf3r Laxness",
        year: 1934,
        price: 431.46000000000004
    },
    {
        id: 0,
        title: "The Golden Notebook",
        category: "Fantasy",
        author: "Doris Lessing",
        year: 1962,
        price: 447.44
    },
    {
        id: 0,
        title: "Pippi Longstocking",
        category: "Fantasy",
        author: "Astrid Lindgren",
        year: 1945,
        price: 455.43
    },
    {
        id: 0,
        title: "Diary of a Madman",
        category: "Fantasy",
        author: "Lu Xun",
        year: 1918,
        price: 463.42
    },
    {
        id: 0,
        title: "Children of Gebelawi",
        category: "Fantasy",
        author: "Naguib Mahfouz",
        year: 1959,
        price: 471.41
    },
    {
        id: 0,
        title: "Buddenbrooks",
        category: "Fantasy",
        author: "Thomas Mann",
        year: 1901,
        price: 479.40000000000003
    },
    {
        id: 0,
        title: "The Magic Mountain",
        category: "Fantasy",
        author: "Thomas Mann",
        year: 1924,
        price: 487.39
    },
    {
        id: 0,
        title: "Moby Dick",
        category: "Fantasy",
        author: "Herman Melville",
        year: 1851,
        price: 495.38
    },
    {
        id: 0,
        title: "Essays",
        category: "Fantasy",
        author: "Michel de Montaigne",
        year: 1595,
        price: 503.37
    },
    {
        id: 0,
        title: "History",
        category: "Fantasy",
        author: "Elsa Morante",
        year: 1974,
        price: 511.36
    },
    {
        id: 0,
        title: "Beloved",
        category: "Fantasy",
        author: "Toni Morrison",
        year: 1987,
        price: 519.35
    },
    {
        id: 0,
        title: "The Tale of Genji",
        category: "Fantasy",
        author: "Murasaki Shikibu",
        year: 1006,
        price: 527.34
    },
    {
        id: 0,
        title: "The Man Without Qualities",
        category: "Fantasy",
        author: "Robert Musil",
        year: 1931,
        price: 535.33
    },
    {
        id: 0,
        title: "Lolita",
        category: "Fantasy",
        author: "Vladimir Nabokov",
        year: 1955,
        price: 543.32
    },
    {
        id: 0,
        title: "Nineteen Eighty-Four",
        category: "Fantasy",
        author: "George Orwell",
        year: 1949,
        price: 551.3100000000001
    },
    {
        id: 0,
        title: "Mrs Dalloway",
        category: "Fantasy",
        author: "Virginia Woolf",
        year: 1925,
        price: 775.03
    },
    {
        id: 0,
        title: "To the Lighthouse",
        category: "Fantasy",
        author: "Virginia Woolf",
        year: 1927,
        price: 783.02
    },
    {
        id: 0,
        title: "Memoirs of Hadrian",
        category: "Fantasy",
        author: "Marguerite Yourcenar",
        year: 1951,
        price: 791.01
    }
];
const tempArr = [];
/*
code to remove duplicates from array
let result = booksFromLocalDataBase.filter(function ({ title }) {
    return !this.has(title) && this.add(title);
}, new Set)

console.log(result);
*/ //ES9 - if variable -eq (undefined || null || false) you can use operator ?? in re
const bookLibrary = JSON.parse(localStorage.getItem("books")) ?? booksFromLocalDataBase;
myFunAddIdToBook = ()=>{
    bookLibrary.forEach((element, i)=>{
        element.id = i + 1;
    });
};
myFunRenderBooks = (booksOfList)=>{
    myFunAddIdToBook();
    booksList.innerHTML = "";
    booksOfList.forEach(({ id , title , category , author , year , price  })=>{
        booksList.innerHTML += `
        <div class="grid-item">
            <li>
                <h2>${title}</h2>
                <p><strong>No: </strong>#${id}</p>
                <p><strong>Author: </strong>${category}</p>
                <p><strong>Category: </strong>${author}</p>
                <p><strong>Year: </strong>${year}</p>
                <p><strong>Price: </strong>${price.toFixed(2)} PLN</p>
            </li>
        </div>`;
    });
};
myFunFilterBooks = (event)=>{
    event.preventDefault();
    const foundBooks = bookLibrary.filter(({ title  })=>{
        return title.toLowerCase().includes(inputText.value.toLowerCase());
    });
    setTimeout(()=>{
        location.reload();
    }, 10000);
    myFunRenderBooks(foundBooks);
    inputText.value = "";
    inputText.focus();
};
addNewBook = (event)=>{
    event.preventDefault();
    addInputValue.forEach((element)=>{
        tempArr.push(element.value);
    });
    const book = {
        id: 0,
        title: tempArr[0],
        category: tempArr[1],
        author: tempArr[2],
        year: Number(tempArr[3]),
        price: Number(tempArr[4])
    };
    bookLibrary.push(book);
    localStorage.setItem("books", JSON.stringify(bookLibrary));
    tempArr.length = 0;
    addInputValue.forEach((element)=>{
        element.value = "";
    });
    myFunRenderBooks(bookLibrary);
};
myFunInvokeRunRender = ()=>{
    myFunRenderBooks(bookLibrary);
};
myFunInvokeRunRender();
booksForm.addEventListener("submit", myFunFilterBooks);
newBook.addEventListener("submit", addNewBook);

//# sourceMappingURL=index.0fc9cdf9.js.map
