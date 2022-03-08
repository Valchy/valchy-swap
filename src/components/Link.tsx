const Link = (props: any) => {
	const conditionalAttreibutes: any = {};

	if (props.id) conditionalAttreibutes.id = props.id;

	return (
		<a
			className="underline decoration-slate-400"
			rel="noreferrer"
			target={props.openInNewTab ? '_blank' : ''}
			href={props.href}
			{...conditionalAttreibutes}
		>
			{props.text}
		</a>
	);
};

export default Link;
