import '../styles/globals.css'
import '../styles/slickSlide.css';
import store from './store';
import { Provider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
