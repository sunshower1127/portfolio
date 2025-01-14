import Link from "./link";

const GITHUB_URL = "https://github.com/sunshower1127";
export default function GithubLink({ repoName }: { repoName: string }) {
  return <Link url={`${GITHUB_URL}/${repoName}`} />;
}
