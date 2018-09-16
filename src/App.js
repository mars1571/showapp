import React, { Component } from 'react';
// import logo from './logo.svg';
import { AppBar } from "./components/AppBar";
import ComboBox from './components/ComboBox' ; 
import { ShowAppSearch } from "./components/ShowAppSearch/ShowAppSearch";
import { ShowAppList } from "./components/ShowAppList/ShowAppList";

const s = {
    filters:{
        display:'flex',
        flexDirection:'row'
    },
    header:{
        paddingTop:'45px',
        paddingBottom:'30px'
    },
    headerContent:{
        marginLeft:'42px',
        width: '408px',
        height: '22px',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '600',
        color: '#687b82',
    },
    listWrapper:{
        display:'flex', 
        justifyContent:'center',
        flexDirection:'collumn',
        marginTop:'30px',
        marginBottom:'86px'
    }
}

class App extends Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            genreFilter:'',
            yearFilter:'',
            yearFilterDisabled:false
        }
    }
    genreFilter(genreFilter){
        this.setState({genreFilter}) ;
    }
    yearFilter(yearFilter){
        this.setState({yearFilter}) ;
    }
    handleSubmitSearch(query){
        console.log(query);
    }
    render() {
        return (<div>
            <AppBar/>
            <ShowAppSearch onSubmit={this.handleSubmitSearch.bind(this)}/>
            <div style={s.header}>
                <div style={s.headerContent}>
                    Descubra nuevas películas y programas de televisión
                </div>
            </div>
            <div style={s.filters}>
                <div style={{marginLeft:'42px'}}>
                    <ComboBox disabled={this.state.yearFilterDisabled} title='Year' width='120' height='30' 
                    onChange={this.yearFilter.bind(this)} 
                    menu={['2016', '2002', '2006']} />
                </div>
                <div style={{marginLeft:'69px'}}>
                    <ComboBox style={{marginLeft:'14px'}} title='Genre' width='238' height='30' 
                        onChange={this.genreFilter.bind(this)} 
                        menu={[
                            'Acción',
                            'Aventura', 
                            'Comedia',
                        ]} />
                </div>
            </div>
            <div style={s.listWrapper}>
                <ShowAppList />
            </div>
        </div>);
    }
}

export default App;
