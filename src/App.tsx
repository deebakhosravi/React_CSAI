import AppBar from "./components/AppBar";
import WorkoutsList from "./components/WorkoutsList";
import WorkoutForm from "./components/WorkoutForm";
import "./styles.css";

export default function Car() {
  return (
    <div className="AppDiv">
      <AppBar></AppBar>
      <WorkoutForm></WorkoutForm>
      <WorkoutsList></WorkoutsList>
      <p>More info coming soon!</p>
    </div>
  );
}
