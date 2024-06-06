import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Router from "./Router/Router";

const App = () => {
  return (
      <div>
        <Header/>
          <Router />
        <Footer/>
      </div>

  );
};

export default App;