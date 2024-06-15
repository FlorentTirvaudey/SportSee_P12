import '../styles/App.css';

import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Icone from './Icone';

import icones from '../assets/icone.json'
import { createUserFromMockData } from '../service/api';
import Stats from './Stats';

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
                <aside className='sidebar'>
                  {icones.map((icone) => (
                    <div>
                      {icone.bcolor === 'black' && (
                        <Icone url={icone.url} bcolor={icone.bcolor} />
                      )}
                    </div>
                  ))}
                  
                  <span>Copiryght, SportSee 2020</span>
                </aside>
                <section className='main_content'>
                  <div className='content'>
                    <div className='title_part'>
                      <h1>Bonjour {userData.firstName} {userData.lastName}</h1>
                      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                    </div>
                    <div className='stats_part'>
                      <div className='activity'>
                        <div className='chart_1'>Chart 1</div>
                        <div className='details_chart'>
                          <div className='chart_2'>Chart 2</div>
                          <div className='chart_3'>Chart 3</div>
                          <div className='chart_4'>Chart 4</div>
                        </div>
                      </div>
                      <div className='aside_stats'>
                        <Stats data={userData.calorieCount} details="Calories" />
                        <Stats data={userData.proteinCount} details="Protéines" />
                        <Stats data={userData.carbohydrateCount} details="Glucides" />
                        <Stats data={userData.lipidCount} details="Lipides" />
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
