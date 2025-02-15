import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Input from './components/Input';
import Content from './components/Content';
import './index.css';

function App() {

  function getValueFromInput(inputData){
    console.log(inputData)
  }

  return (
    <Wrapper>  
      <Header />
      <Input passingFunction={getValueFromInput}/>
      <ul className="w-150 min-h-80 flex items-center flex-col gap-5">
      <Content />
      </ul>

    </Wrapper >
  )
}

export default App 