import './home.css'
import Card from './Card'

function Home() {
  return (
    <>
      <div className="cardHolder">
        <Card title={"Food API"} desc={"This api contains food name, image, Catoguries and area where that food origin"} />
        <Card title={"Store API"} desc={"This api contains fack store "} />
        <Card title={"Movies API"} desc={"This api contains Movies"} />
        <Card title={"Recipe API"} desc={"This api contains Recipies"} />
      </div>
    </>
  )
}

export default Home
