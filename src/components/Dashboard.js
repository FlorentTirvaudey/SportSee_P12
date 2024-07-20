import '../styles/Dashboard.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Icone from './Icone';
import Stats from './Stats';
import Activitychart from './Activitychart';
import Sessionchart from './Sessionchart';
import Performancechart from './Performancechart';

import { createActivityFromFetchData, createActivityFromMockData, createPerformanceFromFetchData, createPerformanceFromMockData, createSessionFromFetchData, createSessionFromMockData, createUserFromAPIData, createUserFromMockData } from '../service/api';

import calories from '../assets/calories.png'
import apple from '../assets/apple.png'
import cheeseburger from '../assets/cheeseburger.png'
import chicken from '../assets/chicken.png'
import cyclisme from '../assets/cyclisme.png'
import meditation from '../assets/meditation.png'
import musculation from '../assets/musculation.png'
import nageurs from '../assets/nageurs.png'
import Scorechart from './Scorechart';

function Dashbord() {
  const { userId, dataType } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userSessionData, setUserSessionData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);

    const modifySessionData = (data) => {
        if (data.length > 0) {
            const firstElement = data[0];
            const lastElement = data[data.length - 1];
            return [firstElement, ...data, lastElement];
        }
        return data;
    }

    const addDayLabels = (data) => {
        const days = ['L', 'L', 'M', 'M', 'J', 'V', 'S', 'D', 'D'];
        return data.map((item, index) => ({
            ...item,
            day: days[index % days.length]  // Modulo pour éviter les dépassements d'index
        }));
    };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (dataType === 'mock') {
        try {
          const responseUser = await createUserFromMockData(userId)
          const responseSession = await createSessionFromMockData(userId)
          const responseActivity = await createActivityFromMockData(userId)
          const responsePerf = await createPerformanceFromMockData(userId)

          setUserData(responseUser);

          /** Les datas de SESSION **/
          const datasModify = modifySessionData(responseSession)
          const modififyWithDayLabels = addDayLabels(datasModify)
          setUserSessionData(modififyWithDayLabels);

          /** Les datas d'ACTIVITY **/
          const dataWithIndices = responseActivity.map((data, index) => ({ ...data, index: index + 1}));
          setUserActivityData(dataWithIndices);

          /** Les datas de PERFORMANCE **/
          setUserPerformanceData(responsePerf);

        } catch (error) {
          console.error(error.message);
        }
      } else {
        try {
          const responseUser = await createUserFromAPIData(userId)
          const responseSession = await createSessionFromFetchData(userId)
          const responseActivity = await createActivityFromFetchData(userId)
          const responsePerf = await createPerformanceFromFetchData(userId)

        setUserData(responseUser);

        /** Les datas de SESSION **/
        const datasModify = modifySessionData(responseSession)
        const modififyWithDayLabels = addDayLabels(datasModify)
        setUserSessionData(modififyWithDayLabels);

        /** Les datas d'ACTIVITY **/
        const dataWithIndices = responseActivity.map((data, index) => ({ ...data, index: index + 1}));
        setUserActivityData(dataWithIndices);

        /** Les datas de PERFORMANCE **/
        setUserPerformanceData(responsePerf);
          
        } catch (error) {
          console.error(error.message);
        }
      }

      setLoading(false)
    }

    fetchData();
  }, [userId, dataType])

  useEffect(() => {
    if (!loading && userData.length === 0) {
      navigate('/404');
    }
  }, [loading, userData, navigate]);

  return (
    <div>
      <Navbar />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {userData && (
              <div className='homepage'>
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
                        <Activitychart userActivityData={userActivityData} />
                        <div className='details_chart'>
                          <Sessionchart userSessionData={userSessionData} />
                          <Performancechart userPerformanceData={userPerformanceData} />
                          {<Performancechart/> && (
                            <Scorechart name={userData.lastname} score={userData.score} />
                          )}
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

export default Dashbord;
