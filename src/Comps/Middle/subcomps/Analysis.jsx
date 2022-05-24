import React from 'react'
import TopNylis from './AnalysisComps/TopNylis';
import Graph from './AnalysisComps/Graph';
import Analysisright from './AnalysisComps/Anaright/Analysisright';
const Analysis = () => {
  return (
    <div className='analysis'>
      <div className='left-main'>
      <TopNylis/>
      <Graph/>
      </div>

      <div className='main-right'>
          <Analysisright/>
        </div>
    </div>
  )
}

export default Analysis;