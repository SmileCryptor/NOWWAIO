import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadDetails";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Mint from "./screens/Mint";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import NHome from "./screens/NHome";
import NAccount from "./screens/NAccount";
import Chat from "./screens/Chat";
import Gallery from "./screens/Gallery";
import Store from "./screens/Store";
import Game from "./screens/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <NHome />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Page>
              <NAccount />
            </Page>
          )}
        />
        {/* old */}
        <Route
          exact
          path="/home"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-variants"
          render={() => (
            <Page>
              <UploadVariants />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-details"
          render={() => (
            <Page>
              <UploadDetails />
            </Page>
          )}
        />
        <Route
          exact
          path="/connect-wallet"
          render={() => (
            <Page>
              <ConnectWallet />
            </Page>
          )}
        />
        <Route
          exact
          path="/faq"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        />
        <Route
          exact
          path="/activity"
          render={() => (
            <Page>
              <Activity />
            </Page>
          )}
        />
        <Route
          exact
          path="/search01"
          render={() => (
            <Page>
              <Search01 />
            </Page>
          )}
        />
        <Route
          exact
          path="/mint"
          render={() => (
            <Page>
              <Mint />
            </Page>
          )}
        />
        <Route
          exact
          path="/gallery"
          render={() => (
            <Page>
              <Gallery />
            </Page>
          )}
        />
        <Route
          exact
          path="/store"
          render={() => (
            <Page>
              <Store />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile1"
          render={() => (
            <Page>
              <Profile />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile-edit"
          render={() => (
            <Page>
              <ProfileEdit />
            </Page>
          )}
        />
        <Route
          exact
          path="/item"
          render={() => (
            <Page>
              <Item />
            </Page>
          )}
        />
        <Route
          exact
          path="/pagelist"
          render={() => (
            <Page>
              <PageList />
            </Page>
          )}
        />
        <Route exact path="/chat" render={() => <Chat />} />
        <Route
          exact
          path="/game"
          render={() => (
            <Page>
              <Game />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
