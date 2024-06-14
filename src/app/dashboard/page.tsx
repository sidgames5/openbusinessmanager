export default function Page() {
	return <div className="container">
		<div className="header">
			<h1>OpenBusinessManager</h1>
		</div>
		<div className="dashboard pad20">
			<div className="horizontal">
				<h2>My Businesses</h2>
				<button>+</button>
			</div>
			<div className="businesses"></div>
		</div>
		<div className="footer"></div>
	</div>
}
