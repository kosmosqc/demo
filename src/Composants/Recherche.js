import { Component } from "react";
import { Button, Select } from "semantic-ui-react";
import '../App.css';

class Recherche extends Component {

    state = {
        objetCeleste: ''
    }

    onObjChange = (e, data) => {
        this.setState({ objetCeleste: data.value })
        //console.log(data.value);
    }

    render() {

        const optionsObj = [
        { value: "soleil", key: "100", text: "Soleil" },
            { value: "mercure", key: "23", text: "Mercure"},
            { value: "venus", key: "10", text: "Venus"},
            { value: "terre", key: "44", text: "Terre" },
            { value: "lune", key: "49", text: "Lune" },
            { value: "mars", key: "72", text: "Mars" },
            { value: "jupiter", key: "53", text: "Jupiter" },
            { value: "saturne", key: "85", text: "Saturn" },
            { value: "uranus", key: "84", text: "Uranus" },
            { value: "neptune", key: "81", text: "Neptune" },
            { value: "pluton", key: "80", text: "Pluton"},  
        ];

        return (
            <div className="recherche">
                <Select placeholder="Choisissez un objet céleste" options={optionsObj} value={this.state.objetCeleste} onChange={this.onObjChange} />
                <Button style={{background: "silver",color: "blue"}} className="btn" primary onClick={() => this.props.onSearch(this.state.objetCeleste)}> Lancer la recherche </Button>
                <Button secondary onClick={this.props.onEmpty}> Vider la recherche </Button>
            </div>
        )
    }
}
export default Recherche;