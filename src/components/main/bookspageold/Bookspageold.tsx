//hace la misma función que Bookspagenew.tsx pero individualmente y con css modules
import styles from "./Bookspageold.module.css";

type booksProps = {
    id_book: number,
    id_user: number,
    title: string,
    type: string,
    author: string,
    price: number,
    photo: string
}

function Bookspageold(props: booksProps) {
    return (
        <>
            <div className={styles.bookspageold}>
                <img 
                    src="./public/libro1.jpg" 
                    alt="libro" 
                    width={150}
                />
                <p>{props.id_book}</p>
                <p>{props.id_user}</p>
                <p>{props.title}</p>
                <p>{props.type}</p>
                <p>{props.author}</p>
                <p>{props.price}</p>
                <p>{props.photo}</p>
            </div>


        </>
    );
}

export default Bookspageold;
