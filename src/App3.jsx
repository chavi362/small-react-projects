const age = 15;

function App() {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ];
    return (
        <div>
            {planets.map((planet, key) => {
                if (planet.isGasPlanet)
                     <h1> {planet.name}</h1>

            })}
        </div>
    );
}
export default App;