import Icon from "./icon";
import Link from "./link";

const GITHUB_URL = "https://github.com/sunshower1127";
export default function GithubLink({ repoName }: { repoName: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="p-0.5 bg-zinc-700 rounded-full">
        <Icon name="Github" fill="white" size={18} className="bg-transparent text-white translate-y-0.5" />
      </div>
      <Link url={`${GITHUB_URL}/${repoName}`} />
    </div>
  );
}
