const Link = (props: any) => (
	<a
		className="underline decoration-slate-400"
		rel="noreferrer"
		target={props.openInNewTab ? '_blank' : ''}
		href={props.href}
	>
		{props.text}
	</a>
);

export default Link;
