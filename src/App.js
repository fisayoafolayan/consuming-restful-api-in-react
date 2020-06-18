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
        fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipes: data["drinks"] })
            })
            .catch(console.log)
    }




}



export default App;
