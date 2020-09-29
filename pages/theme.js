
import React from 'react';


const ThemeContext = React.createContext('light');

function Button({theme}) {
  return (
    <button className={theme}>TEST</button>
  )
}
class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function Theme() {
  return (
    <ThemeContext.Provider value="dark">
      <div className="theme">
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  )
}


export default Theme;
