import Linechart from '../components/Linechart'
import MapComponent from '../components/Map'

const ChartAndMap = () => {
  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold">Cases Fluctuations</h2>
      <Linechart />
    </div>
    <div>
      <h2 className="text-xl font-semibold">World Map</h2>
      <MapComponent />
    </div>
  </div>
  )
}

export default ChartAndMap