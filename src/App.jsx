import React from "react";

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            location: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
    }

    handleChange(e){
        const value = e.target.value
        this.setState({...this.state, location: value})
    }

    fetchWeather() {
        console.log(this)
    }

    render() {
        return(
            <div className="app">
                <h1>Classy Weather</h1>

                <div>
                    <input
                        type="text"
                        placeholder="Search for location..."
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.fetchWeather}>Get weather</button>
            </div>
        )
    }
}