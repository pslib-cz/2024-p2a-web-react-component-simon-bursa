import ProgressBar from "./ProgressBar";

function App() {
  const makeColor = (percent: number) => {
    const clamp = Math.min(Math.max(percent, 0), 1);
    return `rgb(${clamp*255},0,0)`;
  }
 
  return (
    <>
      <ProgressBar value={50} max={100} makeColor={makeColor} />
      <ProgressBar value={50} max={200} makeColor={makeColor} />
      <ProgressBar value={300} max={300} makeColor={makeColor} />
    </>
  );
}
 
export default App;