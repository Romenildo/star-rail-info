import EmptyContent from "./components/template/EmptyContent";
import Content from "./components/template/content";
import Footer from "./components/template/footer";
import Header from "./components/template/header";


export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Content/>
      </main>
      <Footer/>
    </div>
  )
}
