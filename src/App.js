import './App.css';
import Main from './mobile/components/Main.jsx';
import MainDesktop from './desktop/components/MainDesktop';
import { useMediaQuery } from 'react-responsive';


function App() {
  // const isPc = useMediaQuery({
  //   query: "(min-width: 768px)"
  // })
  // const isMain = isPc ? <MainDesktop /> : <Main />;
  const isMain = <Main />;

  return (
    <>
      {/* 메뉴바 컴포넌트에 Link써서 하자 */}
      {isMain}
    </>
  );
}


export default App;
