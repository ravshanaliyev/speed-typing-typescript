import {faker} from '@faker-js/faker'
function App() {
  const words = faker.random.words(10)
  return (
    <div className="App">
      <h1 className="text-4xl font-bold  text-slate-500">
        {words}
      </h1>
    </div>
  );
}

export default App;
