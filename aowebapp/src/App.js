import './App.css';
import Card from './componets/Card'
import CardV2 from './componets/CardV2'
import CardV3 from './componets/CardV3'
import CardList from './componets/CardList'


function App() {
  return (
      <div className="App container">
          <div className="bg-light py-1 mb-2">
              <h2 className="text-center">Example Application</h2>
          </div>
          <div className="row-justify-content-center">
              {/*
              <Card
                  itemId="1"
                  itemName="test record 1 desc"
                  itemDesctiption="test record 1 desc"
                  itemImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoderncat.com%2Farticles%2Fhappy-cat%2F&psig=AOvVaw0a7bh7gizeIL2YfepObeJC&ust=1761032850031000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLjo-9ykspADFQAAAAAdAAAAABAE"
                  itemCost="15.00"
              />
              <CardV2
                  itemId="2"
                  itemName="test record 2 desc"
                  itemDesctiption="test record 2 desc"
                  itemImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoderncat.com%2Farticles%2Fhappy-cat%2F&psig=AOvVaw0a7bh7gizeIL2YfepObeJC&ust=1761032850031000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLjo-9ykspADFQAAAAAdAAAAABAE"
                  itemCost="10.00"
              />
              <CardV3
                  itemId="3"
                  itemName="test record 3 desc"
                  itemDesctiption="test record 3 desc"
                  itemImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoderncat.com%2Farticles%2Fhappy-cat%2F&psig=AOvVaw0a7bh7gizeIL2YfepObeJC&ust=1761032850031000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLjo-9ykspADFQAAAAAdAAAAABAE"
                  itemCost="20.00"
              />
              */}
              <CardList />

          </div>

    </div>
  );
}

export default App;
