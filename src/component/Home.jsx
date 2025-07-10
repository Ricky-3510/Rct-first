import sign from '../assets/sign.png'
import Untitled from '../assets/Untitled.png'

const Home = () => {
  return (
    <div className=''>
      <div className='row rowcss'><marquee direction="left"><img src={sign} style={{width:'25px'}}/>TechVerse — Navigating Tomorrow's Technology, Today</marquee>
</div>

<div className='container'>
  <div className="row">
  <div className="col">
    <img src={Untitled} style={{width:'800px',height:'450px'}}/>
  </div>
  <div className="col">
    <h2>Welcom to Techverse
</h2>
<p>
   Techverse, Inc. is a contract research and development firm in advanced energy generation and utilization concepts with a focus on improving energy efficiency of processes. Techverse develops and utilizes specialized membrane separation processes to suit applications and offers process development through laboratory/bench, pilot, and full scale experimental studies for process and energy efficiency improvements. The company provides consulting services in process development and conducts process model simulations based on fundamental principles for both government agencies and private industrial companies.
</p>


</div>
      </div>
      </div>
      </div>
  )
}

export default Home