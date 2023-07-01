import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import MainContainer from './components/MainContainer';
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchVideo />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
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