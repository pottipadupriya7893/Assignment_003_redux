import React from 'react';
import { connect } from 'react-redux';
import { fetchRegions } from '../actions/main';
class  Values extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            country: [],
            selectedRegion: '',
            selectedCountry:''
        }; 
    }
    componentDidMount() {
        this.props.fetchRegions(this.props.Data.regions[0].name );
    }
    changeRegion(event) {
        var newRegion = event.target.value
		this.setState({selectedRegion: event.target.value});
        console.log(newRegion);
        this.props.fetchRegions(newRegion);
    }
    render() {
        return (
            <div style={{alignData:"center"}}>
                <h2>{this.props.Data.heading}</h2>
              <br/> <br/> <br/>
                <div className="Values">  
                <label><i>Select Region :</i></label>
             
                <select value={this.state.selectedRegion} onChange={(event)=> {this.changeRegion(event)}} >
                    {
                        this.props.Data.regions.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})
                    }
                </select>
                <br /> <br />             
                <label><i>Select Country</i></label>
                <select >
                    {
                       this.props.countries.map((e,key)=>{
                            return <option key={key}>{e.name.common}</option>;
                        }
                        )
                    }
                </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.event.countries,
        error:state.event.error
    };
};
const mapDispatchProps = (dispatch) => ({
    fetchRegions: (region) => dispatch(fetchRegions(region))
});

export default connect(mapStateToProps, mapDispatchProps)(Values);

