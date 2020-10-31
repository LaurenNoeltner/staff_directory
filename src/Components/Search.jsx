import React, { Component } from "react";
import axios from "axios";


const Search = () => {
    return (
        <div className="search">
            <nav class="navbar navbar-light bg-light">
                <form className="form-inline mx-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </nav>
        </div>
        <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@aol</td>
                    <td>December 12</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@gmail</td>
                    <td>November 4</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>April 1</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Search;