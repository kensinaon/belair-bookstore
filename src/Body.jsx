import book1 from './assets/manga.png';
import book2 from './assets/psychology.png';
import book3 from './assets/romance.png';


function Body(){
    const kjs = "Ken Sina-on";
    const vjr = "Vernadette Jane Rioflorido";
    return(
        <div class="center kens">
            <h1 class="mainTitle">Book Bel Air Store</h1>
            <p>At Book Bel Air Store, you’ll find an array of book genres to suit different tastes and interests. From thrilling mysteries and captivating romances to insightful non-fiction and educational children’s books, our collection covers a broad spectrum. Whether you’re into fiction, self-help, history, fantasy, psychological, business plan or any other genre.</p>
            <h3> Store Location </h3>
            <p>Located in McKinley Hill Taguig, it is a cozy bookstore right in the middle of a beautiful flower garden. Surrounded by colorful flowers, it’s a lovely place to enjoy books while being surrounded by nature’s beauty.</p>
            <p>Open from Monday to Saturday, 8AM - 8PM</p>
            <hr></hr>  
            <h2> Collections </h2> 
                <ul>
                    <li><a href="#">Manga</a></li>
                    <img src={book1}></img>
                    
                    <li><a href="#">Psychology</a></li>
                        <img src={book2}></img>
                    
                    <li><a href="#">Romance</a></li>
                        <img src={book3}></img>

                    <li><a href="#">and many more...</a></li>
                </ul>
            <hr></hr>
            <h3> About the owner </h3>
            <p>Vernadette Jane Rioflorido, a student at PDMHS, is creating a special place called “Book Bel Air Store” at McKinley Hill. This unique bookstore will be surrounded by a beautiful flower garden, creating a relaxing atmosphere for book lovers and those who enjoy nature. It aims to encourage the younger generation to read more while offering a serene space for families and friends to bond over books amidst the vibrant flowers. It’s a spot where youths can gather, enjoy free book reading, and create wonderful moments together.</p>
            <p>The vision for Book Bel Air Store is to be a haven for book lovers amidst the vibrant surroundings. We aim to promote a reading culture among the youth and create a welcoming space where families and friends can connect over books and nature. Our goal is to select a diverse collection of quality books and provide a serene atmosphere, becoming the go-to spot for anyone seeking a peaceful and enjoyable reading experience.</p>
            <p>&copy;{new Date().getFullYear()} {vjr}</p>
        </div>

    );

}

export default Body