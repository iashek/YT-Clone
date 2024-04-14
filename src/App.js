import Body from './components/Body';
import Head from './components/Head';
import './App.css';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ConstructionPage from './components/ConstructionPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "working",
      element: <ConstructionPage />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
)};

export default App;
