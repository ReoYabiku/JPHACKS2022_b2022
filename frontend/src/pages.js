import React from "react";
import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import AddForm from "./AddForm";
import GetAllUsers from "./GetAllUsers";

export function Home() {
	return (
		<div>
			<h1>[Home]</h1>
		</div>
	);
}

export function FireStore() {
	return (
		<div>
			<h1>[FireStore]</h1>
			<Outlet />
		</div>
	);
}

export function Add() {
	return (
		<div>
			<AddForm />
		</div>
	);
}

export function Get() {
	return (
		<div>
			<GetAllUsers />
		</div>
	);
}

export function Top() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
		</div>
	);
}