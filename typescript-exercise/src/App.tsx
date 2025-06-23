import Todo from './components/todo/todo';
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <section className="w-[100%] h-[100vh] bg-green-100 flex justify-center items-center"> 
      <Todo />
    </section>
    </>
  )
}

export default App
