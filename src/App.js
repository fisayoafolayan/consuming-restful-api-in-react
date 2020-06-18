import React, {Component} from 'react';
import Recipes from './components/recipes';


function refreshPage() {
        window.location.reload(false);
}

class App extends Component {
    
  

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes} />
                <button onClick={refreshPage}>Click for a new recipe!</button>
            </div>
        )
    }

    state = {
        recipes: []
    };


    componentDidMount() {
        fetch("https://vpce-0bd02e6e0e09e7544-4e9yt2ud-us-east-1d.execute-api.us-east-1.vpce.amazonaws.com", {
            method: 'GET',
            headers: {
            'x-api-key': '7xggh6vvja',
            'Content-Type': 'application/json'
          }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipes: data["drinks"] })
            })
            .catch(console.log)
    }




}



export default App;
