import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfiguresStore } from './redux/configuresStore';
import './App.css';


const store = ConfiguresStore();
<Provider store={store}>
    <BrowserRouter>
        <div className="App">
            <Main/>
        </div>
    </BrowserRouter>
</Provider>
class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>  
        );
    };
}

export default App;