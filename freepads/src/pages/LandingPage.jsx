import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Plans from '../components/Plans';
import ProblemSolution from '../components/ProblemSolution';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Plans />
      <ProblemSolution />
      <Footer />
    </div>
  );
};

export default LandingPage;
