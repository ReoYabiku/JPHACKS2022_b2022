import React from "react";
import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import AddForm from "./components/AddForm";
import Users from "./components/Users";

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

export function Show() {
	return (
		<div>
			<Users />
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