import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import notes from "../src/notes"
function App() {
  return (
    <div>
      <Header />
      {notes.map((detail)=>{
      return <Notes key = {detail.id} title = {detail.title} content = {detail.content} />

      })}
      <Footer />
    </div>
  );
}

export default App;
