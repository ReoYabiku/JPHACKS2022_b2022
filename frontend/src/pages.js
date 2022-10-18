import React from "react";
import { Outlet } from "react-router-dom";
import logo from './logo.svg';
import AddForm from "./components/organisms/AddForm";
import Users from "./components/organisms/Users";
import ApiFetch from "./ApiFetch";
import Steps from "./components/organisms/Steps";
import PathForm from "./components/organisms/PathForm";
import VisualizeForm from "./components/organisms/VisualizeForm";
import PreprocessingForm from "./components/organisms/PreprocessingForm";

export function Home() {
	return (
		<Steps />
	);
}

export function SetPath() {
	return (
		<PathForm />
	);
}

export function Visualize() {
	return (
		<VisualizeForm />
	);
}

export function Preprocessing() {
	return (
		<PreprocessingForm />
	);
}

export function Model() {
	return (
		<h1>[Model]</h1>
	);
}

export function Predict() {
	return (
		<h1>[Predict]</h1>
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

export function Api() {
	return (
		<div>
			<ApiFetch />
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