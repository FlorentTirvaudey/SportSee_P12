import '../styles/App.css';

import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='homepage'>
        <aside className='sidebar'>
          
          <span>Copiryght, SportSee 2020</span>
        </aside>
        <section className='main_content'>
          <div className='content'>
            <div className='title_part'>
              <h1>Bonjour</h1>
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
                <div className='test'>Test</div>
                <div className='test'>Test2</div>
                <div className='test'>Test</div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
