import React, {useState, useEffect} from 'react';
import CardList from '../components/Card/cardList';
import SearchBox from '../components/Search Box/searchBox';
import ErrorBoundary from '../components/Error Boundary/errorBoundary';
import Navigation from '../components/Navigation/Navigation';
import Register from '../components/Register/Register';
import SignIn from '../components/SignIn/SignIn';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchField } from "../features/searchField";
import './App.css';
import "tachyons";
import { droid } from '../features/Droid';

const App = () => {

  const search = useSelector((state)=> state.searchField.value);
  const device = useSelector((state)=> state.droid.value);
  const dispatch = useDispatch();

  const [ route, setRoute ] = useState("SignIn");
  const [isSignedIn, setIsSignedIn] = useState(false);

useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
    .then (users => {dispatch(droid(users))});
  },);

  const onSearchChange = (event) => {
    dispatch(searchField(event.target.value))
  }

  const onRouteChange = (route) => {
    if(route==="SignOut"){
      setIsSignedIn(false)}
      else if(route ==="home"){
        setIsSignedIn(true)
      }
      setRoute(route)
  }

  const filteredDroid = device.filter(device => {
    return(device.name.toLowerCase().includes(search.toLowerCase()))
    })

  return (
    <div className = "tc">
      {route === "home" ?
             <div>
                 <h1 className="f1 ma0 pa2">ROBOFRIENDS</h1>
                   <SearchBox searchChange={onSearchChange}/>
                     <ErrorBoundary>
                       <CardList machine = { filteredDroid }/>
                    </ErrorBoundary>
             </div> 
           :
      (route === "SignIn" ?
             <SignIn onRouteChange={onRouteChange}/>
              :
             <Register onRouteChange={onRouteChange}/>
      )    
      }  
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/> 
</div>
  )}
  
export default App;
