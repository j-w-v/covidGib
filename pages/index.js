import Layout from "../components/Layout";
import Stat from "../components/Stat";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h3>Gibraltar Situation</h3>
    <Stat title="Cases" stat={props.data.cases} />
    <Stat title="New Today" stat={props.data.todayCases} />
    <p>Deaths: {props.data.todayDeaths}</p>
    <p>Recovered: {props.data.recovered}</p>
    <p>Active: {props.data.active}</p>
    <p>Critical: {props.data.critical}</p>
    <p>Cases per 1M: {props.data.casesPerOneMillion}</p>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://coronavirus-19-api.herokuapp.com/countries/gibraltar"
  );

  const data = await res.json();
  console.log(data);
  return {
    data: data
  };
};

export default Index;
