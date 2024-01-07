import "./DashboardLetsGoPanel.css";

export default function DashboardLetsGoPanel() {
  return (
    <div className="dashboard-lets-go-panel">
      <div className="dashboard-lets-go-float-left">
        <div className="dashboard-lets-go-panel-row-1">
          Let's Go
          <div className="dashboard-lets-go-panel-row-1-arrow-up">
            {/* SVG to render up arrow  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1045_13334)">
                <path
                  d="M15 11L8 4L1 11"
                  stroke="#0E3270"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1045_13334">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(16 16) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dashboard-lets-go-panel-row-2">48 hours in vegas</div>
      </div>
    </div>
  );
}
