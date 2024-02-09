export default function GitHubUser({ username }: GitHubUserProps) {
	return (
		<a href={`http://github.com/${username}`} target="_blank">@{username}</a>
	);
}

interface GitHubUserProps {
	username: string;
}
