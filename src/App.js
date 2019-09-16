import React, { useState } from 'react';



const App = () =>{
    const [input, setInput] = useState("");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");

    const handleChange = (e) => {
        setInput( e.target.value )

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setCity( input )
        console.log(city)
        calcWeatherMethod()
    };

    const calcWeatherMethod = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${
            city
            }&APPID=59b1a8aeaf5e5c86c8957f02d447c585&units=metric`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setTemp(res.main.temp)
            })
            .catch(err => console.log(err))
    }

    return(
        <div style={{textAlign: 'center', padding:'60px 0'}}>
            <form onSubmit={handleSubmit}>
                <h2>Temperature in {input} is {temp} degrees celsius </h2>
                <input
                    type="text"
                    onChange={handleChange}
                    value={input}

                />
                <input type="submit"/>
            </form>
        </div>
    )
};

// const App = () => {
//     const [ count, setCount ] = useState(0)
//
//     const increment = () => {
//         setCount(count +1)
//     }
//
//     useEffect(() => {
//        document.title = `Clicked ${count} Times`
//     })
//
//     return(
//         <div style={{ padding: '50px' }}>
//             Counter App
//             <br/>
//             <button  onClick={increment}> clicked {count} times</button>
//
//             <Weather/>
//         </div>
//     );
// };

//
// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         };
//     };
//
//
//
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     };
//
//     componentDidMount() {
//         document.title = `Clicked ${this.state.count} Times`
//     }
//
//     componentDidUpdate() {
//         document.title = `Clicked ${this.state.count} Times`
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <h2>Counter app</h2>
//                 <button onClick={this.increment} >clicked {this.state.count} times</button>
//                 <br/>
//
//             </div>
//         );
//     };
// };

export default App;
