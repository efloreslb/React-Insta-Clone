import React from 'react';

export default function SearchBar(props){
    return (
        <div className="searchBar">
            <div className="home">
                <i className="fab fa-instagram"></i>
            </div>
            <form>
                <input type="text" name="search" placeholder="Search"></input>
            </form>
            <div className="explore">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}
