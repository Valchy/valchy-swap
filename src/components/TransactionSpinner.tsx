export function TransactionSpinner(props) {
	return (
		<div className="spinner-container">
			<div className="spinner-bg">
				<svg
					width="100%"
					height="46"
					viewBox="0 0 69 46"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="TransactionSpinner" style={{ animationDuration: props.speed + 's' }}>
						<circle id="left" cx="23" cy="23" r="23" fill={props.colorLeft} />
						<circle id="right" cx="46" cy="23" r="23" fill={props.colorRight} />
					</g>
				</svg>

				<p>{props.customText}</p>
			</div>
		</div>
	);
}
