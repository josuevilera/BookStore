import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import Bookspage from "./components/main/bookspage/Bookspage"
import Bookspagenew from "./components/main/bookspagenew/Bookspagenew"

function App() {

  return (
    <>
      <Header />
      {/* <Bookspage id_book={0} id_user={0} title={""} type={""} author={""} price={0} photo={""} /> */}
      <Bookspagenew />
      <Footer />
    </> 
  )
}

export default App
