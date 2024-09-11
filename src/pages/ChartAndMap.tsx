import { useWorldData } from "../api";
import Linechart from "../components/Linechart";
import MapComponent from "../components/Map";

const ChartAndMap = () => {
  const { data, isLoading, error } = useWorldData();

  if (isLoading) return <div>Loading world data...</div>;
  if (error) return <div>Error fetching world data</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
      <div className="bg-white p-4 mb-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Global COVID-19 Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Cases</h3>
            <p className="text-2xl">{data?.cases.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Deaths</h3>
            <p className="text-2xl">{data?.deaths.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Recovered</h3>
            <p className="text-2xl">{data?.recovered.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="mb-8 p-4">
        <h2 className="text-xl font-semibold">Cases Fluctuations</h2>
        <Linechart />
      </div>
      <div>
        <h2 className="text-xl font-semibold">World Map</h2>
        <MapComponent />
      </div>
    </div>
  );
};

export default ChartAndMap;
