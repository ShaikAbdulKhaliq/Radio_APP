import "./Dashboard.css";
import DashboardEventCards from "./DashboardEventCards/DashboardEventCards";
import RadioStation from "../MiscSmallComponents/RadioStation/RadioStation";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="dashboard-hero-logo">
          <img src={"/images/Dashboardlogo.png"} />
        </div>
        <div className="dashboard-hero-text">
          <p className="dashboard-hero-para1">ear what&rsquo;s new,</p>
          <p className="dashboard-hero-para2">ere in Vegas!</p>
        </div>
      </div>
      <RadioStation />
      <DashboardEventCards />
    </div>
  );
}
