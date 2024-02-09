import info from "@site/../common/info";

export default function SupportedBrowser() {
	return (
		<table>
			<thead>
				<tr>
					<th>Store</th>
					<th>Install</th>
					<th>Supported browsers</th>
					<th>System requirements</th>
				</tr>
			</thead>
			<tbody>
				{Object
					.values(info.extension.store)
					.map(store => (
						<tr>
							<td>{store.name}</td>
							<td>
								<a href={store.link}><img src={store.badge} alt={`Install for ${store.name}`} /></a>
							</td>
							<td>
								<ul>
									{store.supportedVersions.map(version => <li>{version}</li>)}
								</ul>
							</td>
							<td>
								<ul>
									{store.systemRequirements.map(requirement => <li>{requirement}</li>)}
								</ul>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}
