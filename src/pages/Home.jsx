import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import TrustedClients from '../components/TrustedClients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <VideoSection />
        <FAQ />
        <TrustedClients />
      </main>
      <Footer />
    </div>
  );
};

export default Home;