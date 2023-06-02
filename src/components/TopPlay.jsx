import { Link } from 'react-router-dom';
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopChartCard = ({ song }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg mb-2">
    <li>
    {song.title}
    </li>
  </div>
)

const TopPlay = () => {
  const { data } = useGetTopChartsQuery();

  const topPlays = data?.slice(0, 6); // using data from TopCharsQuery

  return (
    <div className=" ml-0 mb-6 flex-1 max-w-full flex flex-col">
      <div className="w-full flex flex-col">

        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1 text-white">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopPlay;