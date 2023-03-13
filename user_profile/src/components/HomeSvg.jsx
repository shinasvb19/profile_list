import ProfileDetails from "./ProfileDetails";

const HomeSvg = () => {
  return (
    <div className="relative">
      <ProfileDetails />
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="98%" y1="64%" x2="2%" y2="36%">
            <stop offset="5%" stop-color="#6d2ec8"></stop>
            <stop offset="95%" stop-color="#4650c8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 115.97129186602871,294.1531100478469 231.94258373205741,238.3062200956938 322,232 C 412.0574162679426,225.6937799043062 476.200956937799,268.9282296650718 555,334 C 633.799043062201,399.0717703349282 727.2535885167464,485.98086124401914 823,474 C 918.7464114832536,462.01913875598086 1016.7846889952152,351.14832535885165 1120,314 C 1223.2153110047848,276.85167464114835 1331.6076555023924,313.42583732057415 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        ></path>
      </svg>
    </div>
  );
};

export default HomeSvg;
