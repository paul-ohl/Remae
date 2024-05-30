import React from 'react';
import { SelectedTab } from './main_page';
import { useNavigate } from 'react-router-dom';

interface TabProps {
  selectedTab: SelectedTab,
  setSelectedTab: React.Dispatch<React.SetStateAction<SelectedTab>>
}

const TabBar: React.FC<TabProps> = ({ selectedTab, setSelectedTab }) => {
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-row bg-remae opacity-90 backdrop-blur-sm rounded-full justify-around px-3 mx-4'>
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate('/sell', { replace: true });
        }}
        className='w-12 h-12 bg-cyan-700 rounded-full absolute bottom-3 flex justify-center items-center z-10 border-white border-4'
      >
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19.0833H19.0833M19.0833 19.0833H30.1667M19.0833 19.0833V8M19.0833 19.0833V30.1667" stroke="white" strokeWidth="3.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <TabElement isSelected={selectedTab == SelectedTab.Home} onClick={() => { setSelectedTab(SelectedTab.Home) }}>
        <svg width="33" height="33" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5171 1.20355C13.0795 0.753045 13.7785 0.507568 14.4991 0.507568C15.2196 0.507568 15.9187 0.753045 16.4811 1.20355L25.9967 8.81604C26.7489 9.4178 27.1875 10.3295 27.1875 11.2937V24.0157C27.1875 24.8569 26.8533 25.6637 26.2585 26.2585C25.6636 26.8534 24.8569 27.1875 24.0156 27.1875H17.6719C17.3113 27.1875 16.9656 27.0443 16.7107 26.7894C16.4557 26.5345 16.3125 26.1887 16.3125 25.8282V16.3125H12.6875V25.8282C12.6875 26.1887 12.5443 26.5345 12.2893 26.7894C12.0344 27.0443 11.6887 27.1875 11.3281 27.1875H4.98438C4.14314 27.1875 3.33636 26.8534 2.74152 26.2585C2.14668 25.6637 1.8125 24.8569 1.8125 24.0157V11.2919C1.8125 10.3295 2.25112 9.4178 3.00331 8.81604L12.5171 1.20355ZM14.7828 3.32598C14.7025 3.26187 14.6028 3.22694 14.5 3.22694C14.3972 3.22694 14.2975 3.26187 14.2172 3.32598L4.70163 10.9385C4.64832 10.9811 4.60531 11.0351 4.57581 11.0966C4.54631 11.1581 4.53107 11.2255 4.53125 11.2937V24.0157C4.53125 24.2658 4.73425 24.4688 4.98438 24.4688H9.96875V14.9532C9.96875 14.5926 10.112 14.2469 10.3669 13.9919C10.6218 13.737 10.9676 13.5938 11.3281 13.5938H17.6719C18.0324 13.5938 18.3782 13.737 18.6331 13.9919C18.888 14.2469 19.0312 14.5926 19.0312 14.9532V24.4688H24.0156C24.1358 24.4688 24.2511 24.4211 24.336 24.3361C24.421 24.2511 24.4688 24.1358 24.4688 24.0157V11.2919C24.4687 11.224 24.4533 11.157 24.4238 11.0958C24.3943 11.0346 24.3514 10.9809 24.2984 10.9385L14.7828 3.32598Z" fill="white" />
        </svg>
      </TabElement>
      <TabElement isSelected={selectedTab == SelectedTab.Search} onClick={() => setSelectedTab(SelectedTab.Search)}>
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.2625 27.3625L21.2861 22.3862M21.2861 22.3862C22.1374 21.535 22.8126 20.5244 23.2733 19.4122C23.734 18.3 23.9711 17.108 23.9711 15.9042C23.9711 14.7004 23.734 13.5084 23.2733 12.3962C22.8126 11.284 22.1374 10.2735 21.2861 9.42223C20.4349 8.571 19.4244 7.89577 18.3122 7.43509C17.2 6.97441 16.008 6.7373 14.8042 6.7373C13.6004 6.7373 12.4083 6.97441 11.2961 7.43509C10.184 7.89577 9.17342 8.571 8.32219 9.42223C6.60306 11.1414 5.63727 13.473 5.63727 15.9042C5.63727 18.3354 6.60306 20.6671 8.32219 22.3862C10.0413 24.1053 12.373 25.0711 14.8042 25.0711C17.2354 25.0711 19.567 24.1053 21.2861 22.3862Z" stroke="white" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </TabElement>
      <div className='invisible w-12 h-12'></div>
      <TabElement isSelected={selectedTab == SelectedTab.Notifications} onClick={() => setSelectedTab(SelectedTab.Notifications)}>
        <svg width="33" height="33" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.9583 20.5417V14.2584C22.3542 14.3792 21.75 14.5001 21.1458 14.5001H20.5417V21.7501H8.45833V13.2917C8.45833 9.90841 11.1167 7.25008 14.5 7.25008C14.6208 5.67925 15.3458 4.35008 16.3125 3.26258C15.95 2.77925 15.225 2.41675 14.5 2.41675C13.1708 2.41675 12.0833 3.50425 12.0833 4.83341V5.19591C8.45833 6.28342 6.04167 9.54592 6.04167 13.2917V20.5417L3.625 22.9584V24.1667H25.375V22.9584L22.9583 20.5417ZM12.0833 25.3751C12.0833 26.7042 13.1708 27.7917 14.5 27.7917C15.8292 27.7917 16.9167 26.7042 16.9167 25.3751H12.0833ZM25.375 7.85425C25.375 10.1501 23.4417 12.0834 21.1458 12.0834C18.85 12.0834 16.9167 10.1501 16.9167 7.85425C16.9167 5.55841 18.85 3.62508 21.1458 3.62508C23.4417 3.62508 25.375 5.55841 25.375 7.85425Z" fill="white" />
        </svg>
      </TabElement>
      <TabElement isSelected={selectedTab == SelectedTab.Profile} onClick={() => setSelectedTab(SelectedTab.Profile)}>
        <svg width="33" height="33" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.3334 11.8975C19.3334 13.1794 18.8242 14.4088 17.9178 15.3152C17.0113 16.2217 15.782 16.7309 14.5001 16.7309C13.2182 16.7309 11.9888 16.2217 11.0824 15.3152C10.176 14.4088 9.66675 13.1794 9.66675 11.8975C9.66675 10.6157 10.176 9.38629 11.0824 8.47986C11.9888 7.57343 13.2182 7.06421 14.5001 7.06421C15.782 7.06421 17.0113 7.57343 17.9178 8.47986C18.8242 9.38629 19.3334 10.6157 19.3334 11.8975ZM16.9167 11.8975C16.9167 12.5385 16.6621 13.1532 16.2089 13.6064C15.7557 14.0596 15.141 14.3142 14.5001 14.3142C13.8591 14.3142 13.2445 14.0596 12.7912 13.6064C12.338 13.1532 12.0834 12.5385 12.0834 11.8975C12.0834 11.2566 12.338 10.6419 12.7912 10.1887C13.2445 9.73549 13.8591 9.48088 14.5001 9.48088C15.141 9.48088 15.7557 9.73549 16.2089 10.1887C16.6621 10.6419 16.9167 11.2566 16.9167 11.8975Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.23096C7.15942 2.23096 1.20837 8.182 1.20837 15.5226C1.20837 22.8632 7.15942 28.8143 14.5 28.8143C21.8407 28.8143 27.7917 22.8632 27.7917 15.5226C27.7917 8.182 21.8407 2.23096 14.5 2.23096ZM3.62504 15.5226C3.62504 18.048 4.48658 20.3729 5.93054 22.2192C6.94461 20.8875 8.25284 19.8083 9.75302 19.0658C11.2532 18.3234 12.9047 17.9378 14.5786 17.9393C16.2308 17.9377 17.8615 18.3133 19.3466 19.0374C20.8316 19.7615 22.1318 20.815 23.1481 22.1177C24.195 20.7446 24.9 19.1418 25.2045 17.4422C25.5091 15.7425 25.4046 13.9947 24.8996 12.3435C24.3945 10.6922 23.5036 9.18497 22.3004 7.94642C21.0972 6.70786 19.6164 5.77362 17.9805 5.22099C16.3446 4.66836 14.6006 4.51322 12.8928 4.76842C11.185 5.02363 9.56254 5.68183 8.15964 6.68856C6.75673 7.6953 5.61373 9.02163 4.82519 10.5578C4.03666 12.094 3.62526 13.7959 3.62504 15.5226ZM14.5 26.3976C12.0036 26.4014 9.58245 25.5425 7.64637 23.9665C8.42566 22.8508 9.46291 21.94 10.6699 21.3114C11.8768 20.6828 13.2177 20.355 14.5786 20.356C15.9224 20.3549 17.2472 20.6744 18.4427 21.2881C19.6383 21.9017 20.6702 22.7918 21.4528 23.8843C19.5017 25.5116 17.0407 26.4012 14.5 26.3976Z" fill="white" />
        </svg>
      </TabElement>
    </div>
  );
}

const TabElement: React.FC<{
  isSelected: boolean,
  onClick: React.MouseEventHandler<HTMLDivElement>,
  children: React.ReactNode
}> = ({ isSelected, onClick, children }) => {
  let className = "text-white p-2 rounded-full w-12 h-12 flex justify-center items-center";
  if (isSelected) {
    className += " bg-lime-800 opacity-100";
  }
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default TabBar;
