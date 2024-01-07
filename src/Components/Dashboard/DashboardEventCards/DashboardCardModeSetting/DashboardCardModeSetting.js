import "./DashboardCardModeSetting.css";
import BigjsonData from "../../../../BigJsonData";

export default function DashboardCardModeSetting() {
  console.log(BigjsonData.PopularInCities);
  return (
    <div className='dashboard-card-mode-setting'>
      <div className="dashboard-card-mode-setting-heart-circle">
        <img src={"/svg/DashboardCardModeSettingFavorite Heart.svg"} />
      </div>
      <div className="dashboard-card-mode-setting-text">

        <div className="dashboard-card-mode-setting-text-1">place</div>
        <div className="dashboard-card-mode-setting-text-2">
          time
        </div>


      </div>
    </div>
  );
}
