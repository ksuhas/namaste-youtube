import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import MainContainer from './components/MainContainer';
import WatchVideo from "./components/WatchVideo";
import SearchResultContainer from "./components/SearchResultContainer";

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchVideo />
    },
    {
      path: "results",
      element: <SearchResultContainer />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
          <RouterProvider router={appRouter} />
      </div>
    </Provider>

  );
}

export default App;


/*

Head
Body
SiderBar
  MenuItems
MainContainer
  ButtonList
  VideoContainer
    VideoCard

 */