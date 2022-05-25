import { useCallback, useEffect, useState } from "react";
import RouterComponent from "./router";
import { AppointmentsProvider } from "./store/Appointments/AppointmentsProvider";
import { DateProvider } from "./store/Date/DateProvider";

function App() {

  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);



  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('http://localhost:8080/doctors');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const loadedMovies = data

  //     // for(const key in data) {
  //     //   loadedMovies.push({
  //     //     id: key,
  //     //     title: data[key].title,
  //     //     openingText: data[key].openingText,
  //     //     releaseDate: data[key].releaseDate,
  //     //   })
  //     // }

  //     // const transformedMovies = data.results.map((movieData) => {
  //     //   return {
  //     //     id: movieData.episode_id,
  //     //     title: movieData.title,
  //     //     openingText: movieData.opening_crawl,
  //     //     releaseDate: movieData.release_date,
  //     //   };
  //     // });
  //     setMovies(loadedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);


  // console.log(movies)

  return (
    <DateProvider>
      <AppointmentsProvider>
        <RouterComponent />
      </AppointmentsProvider>
    </DateProvider>
  );
}

export default App;
