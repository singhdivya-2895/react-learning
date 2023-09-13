import { Route, Routes } from 'react-router-dom';
import { ToDoListComponent } from './ToDoListComponent';
import { MyTable } from './MyTable';
import StateExample from './StateExample';
import { PostComponent } from './Post';
import { HomePage } from './HomePage';
import { NewWork } from './NewWork';

export const MyMainPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<ToDoListComponent />} />
            <Route path="/table" element={<MyTable />} />
            <Route path="/state" element={<StateExample />} />
            <Route path="/posts" element={<PostComponent />} />
            <Route path="/example" element={<NewWork />} />
            <Route path="/*" element={<div>404 Not found</div>} />
        </Routes>
    );
}
