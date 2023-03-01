import "./App.css";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureandDetails from "./components/TemperatureandDetails";
import Forecast from "./components/Forecast";
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-grap-400 h-fit">
      <TopButtons/>
      <Inputs/>
      <TimeandLocation/>
      <TemperatureandDetails/>
      <Forecast title="Hourly Forecast"/>
      <Forecast title="Hourly Forecast"/>
    </div>
  )  
}
export default App;
