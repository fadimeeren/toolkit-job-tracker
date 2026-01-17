import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);

  const groupedJobs = jobs.reduce((object, job) => {
    if (!object[job.status]) {
      object[job.status] = [];
    }

    object[job.status].push(job);

    return object;
  }, {});

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div className={styles.stack}>
      {Object.entries(groupedJobs).map(([category, array], key) => (
        <div className={styles.group} key={key}>
          <h1>{category}</h1>

          <div className={styles.list}>
            {array.map((job, key) => (
              <div key={key}>
                <Card job={job} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
