import './App.css';
import {Home,Vibes,What,WhyBe,Category, Character, Values, Team, Faq, Community, Footer} from './components'

function App() {
  return (
    <>
      {/* start header */}
      <header>
        <Home/>
      </header>
      {/* end header */}
      {/* start main */}
      <main>
        <What/>
        <Vibes/>
        <WhyBe/>
        <Category/>
        <Character/>
        <Values/>
        <Team/>
        <Faq/>
        <Community/>
      </main>
      {/* end main */}
      {/* start footer */}
      <footer>
        <Footer/>
      </footer>
      {/* end footer */}
    </>
  );
}

export default App;
