import Articles from './Articles';
import Discover from './Discover';
import HeroSec from './HeroSec';
import NewArticles from './NewArticles';
import Subscribe from './Subscribe';
export default function Home() {
  return (
    <div>
      <HeroSec />
      <Articles />
      <Discover />
      <NewArticles />
      <Subscribe />
    </div>
  );
}
