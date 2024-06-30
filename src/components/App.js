import '../styles/App.css';

import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Icone from './Icone';
import Stats from './Stats';
import Activitychart from './Activitychart';
import Sessionchart from './Sessionchart';
import Performancechart from './Performancechart';

import { createUserFromMockData } from '../service/api';

import calories from '../assets/calories.png'
import apple from '../assets/apple.png'
import cheeseburger from '../assets/cheeseburger.png'
import chicken from '../assets/chicken.png'
import cyclisme from '../assets/cyclisme.png'
import meditation from '../assets/meditation.png'
import musculation from '../assets/musculation.png'
import nageurs from '../assets/nageurs.png'
import Scorechart from './Scorechart';

function App() {
  const userId = 12;

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await createUserFromMockData(userId)
        setUserData(response);
        console.log("userData from mock", response)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false)
    }

    fetchData();
  }, [])

  return (
    <div>
      <Navbar />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {userData && (
              <div className='homepage'>
                {/* {console.log("test", calories)} */}
                <aside className='sidebar'>
                  <div className='sidebar_icons_container'>
                    <div className='sidebar_icons'>
                      <Icone img={meditation} />
                      <Icone img={nageurs} />
                      <Icone img={cyclisme} />
                      <Icone img={musculation} />
                    </div>
                  </div>
                  <span>Copiryght, SportSee 2020</span>
                </aside>
                <section className='main_content'>
                  <div className='content'>
                    <div className='title_part'>
                      <h1>Bonjour <span>{userData.firstName} {userData.lastName}</span></h1>
                      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                    </div>
                    <div className='stats_part'>
                      <div className='activity'>
                        <Activitychart userId={userId} />
                        <div className='details_chart'>
                          <Sessionchart userId={userId} />
                          <Performancechart userId={userId} />
                          <Scorechart name={userData.lastname} score={userData.score} />
                        </div>
                      </div>
                      <div className='aside_stats'>
                        <Stats data={userData.calorieCount} details="Calories" icon={calories} background={"#FF00001A"} />
                        <Stats data={userData.proteinCount} details="Protéines" icon={chicken} background={"#4AB8FF1A"} />
                        <Stats data={userData.carbohydrateCount} details="Glucides" icon={apple} background={"#F9CE231A"} />
                        <Stats data={userData.lipidCount} details="Lipides" icon={cheeseburger} background={"#FD51811A"} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
