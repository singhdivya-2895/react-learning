import { BrowserRouter } from 'react-router-dom';
import { MyMainPage } from './MyMainPage';
import { Navbar } from './NavigationBar';

const App = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <MyMainPage />
        </BrowserRouter>
    </>;
}

export default App;