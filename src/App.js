import Btn from "./components/Button";
import Chkbx from "./components/Checkbox";
import Grd from "./components/Grid";
import MkStyl from "./components/MakeStyles";
import TextInput from "./components/TextInput";
import Typhy from "./components/Typography";
import Cntnr from "./components/Container";
import Theme from "./components/ThemeProvider";
import ApBr from "./components/AppBar";

function App() {
  return (
    <Cntnr>
      <Theme>
        <ApBr />
        <h1>...........typography..........</h1>
        <Typhy />
        <h1>...........button..........</h1>
        <Btn />
        <h1>...........Grid..........</h1>
        <Grd />
        <h1>...........Checkbox.........</h1>
        <Chkbx />
        <h1>...........Text Input.........</h1>
        <TextInput />
        <h1>...........MakeStyles.........</h1>
        <MkStyl />
      </Theme>
    </Cntnr>
  );
}

export default App;

// we see some btns w icons. to have buttons w icons in material ui we need to install one more lib @material-ui/icons
