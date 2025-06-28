"use client";
import { useState, useRef } from "react";
import {
  Header,
  HeroSection,
  ManagementChoiceSection,
  WorkerChoiceSection,
  Manager10xSituation,
  Manager10xPayoff,
  Manager10xTasks,
  Manager10xResults,
  Manager10xOnboarding,
  Manager10xDemo,
  Manager10xCTA,
  ManagerCostSituation,
  ManagerCostSolution,
  ManagerCostTasks,
  ManagerCostResults,
  ManagerCostOnboarding,
  ManagerCostDemo,
  ManagerCostCTA,
  WorkerFasterProblem,
  WorkerFasterUpgrade,
  WorkerFasterExample,
  WorkerFasterMeaning,
  WorkerFasterOnboarding,
  WorkerFasterDemo,
  WorkerFasterCTA,
  WorkerEasierSituation,
  WorkerEasierRelief,
  WorkerEasierExample,
  WorkerEasierFeeling,
  WorkerEasierOnboarding,
  WorkerEasierDemo,
  WorkerEasierCTA,
  Footer
} from './components';

type UserPath = 'management-10x' | 'management-cost' | 'worker-faster' | 'worker-easier' | null;

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<'management' | 'worker' | null>(null);
  const [finalPath, setFinalPath] = useState<UserPath>(null);
  const mainRef = useRef<HTMLElement>(null);
  const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);

  const handleRoleSelection = (role: 'management' | 'worker') => {
    setSelectedRole(role);
    // Scroll down one full page (viewport height)
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleManagementChoice = (choice: 'productivity' | 'cost') => {
    const path = choice === 'productivity' ? 'management-10x' : 'management-cost';
    setFinalPath(path);
    // Scroll down one full page (viewport height)
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleWorkerChoice = (choice: 'faster' | 'easier') => {
    const path = choice === 'faster' ? 'worker-faster' : 'worker-easier';
    setFinalPath(path);
    // Scroll down one full page (viewport height)
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  const resetToHero = () => {
    window.location.reload();
  };
  
  const resetFinalPath = () => {
    setFinalPath(null);
  };
  
  return (
    <main 
      ref={mainRef}
      className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        WebkitOverflowScrolling: 'touch',
        scrollSnapType: 'y mandatory'
      }}
    >
      <Header onReset={resetToHero} selectedPath={selectedRole} mainRef={mainRef} />
      <HeroSection onPathSelect={handleRoleSelection} onReset={resetToHero} selectedPath={selectedRole} mainRef={mainRef} className="h-dvh snap-start" />
      
      {/* Choice Sections */}
      {selectedRole === 'management' && (
        <ManagementChoiceSection 
          onChoice={handleManagementChoice} 
          onReset={resetToHero} 
          onSwitchPath={resetFinalPath}
          selectedChoice={finalPath ? (finalPath === 'management-10x' ? 'productivity' : 'cost') : null}
          className="h-dvh snap-start" 
          data-section="management-choice" 
        />
      )}
      
      {selectedRole === 'worker' && (
        <WorkerChoiceSection 
          onChoice={handleWorkerChoice} 
          onReset={resetToHero} 
          onSwitchPath={resetFinalPath}
          selectedChoice={finalPath ? (finalPath === 'worker-faster' ? 'faster' : 'easier') : null}
          className="h-dvh snap-start" 
          data-section="worker-choice" 
        />
      )}
      
      {/* Manager Path A: 10x Productivity */}
      {finalPath === 'management-10x' && (
        <>
          <Manager10xSituation className="h-dvh snap-start" data-section="manager-10x-situation" />
          <Manager10xPayoff className="h-dvh snap-start" data-section="manager-10x-payoff" />
          <Manager10xTasks className="h-dvh snap-start" data-section="manager-10x-tasks" />
          <Manager10xResults className="h-dvh snap-start" data-section="manager-10x-results" />
          <Manager10xOnboarding className="h-dvh snap-start" data-section="manager-10x-onboarding" />
          <Manager10xDemo className="h-dvh snap-start" data-section="manager-10x-demo" />
          <Manager10xCTA className="h-dvh snap-start" data-section="manager-10x-cta" />
        </>
      )}
      
      {/* Manager Path B: Reduce Cost */}
      {finalPath === 'management-cost' && (
        <>
          <ManagerCostSituation className="h-dvh snap-start" data-section="manager-cost-situation" />
          <ManagerCostSolution className="h-dvh snap-start" data-section="manager-cost-solution" />
          <ManagerCostTasks className="h-dvh snap-start" data-section="manager-cost-tasks" />
          <ManagerCostResults className="h-dvh snap-start" data-section="manager-cost-results" />
          <ManagerCostOnboarding className="h-dvh snap-start" data-section="manager-cost-onboarding" />
          <ManagerCostDemo className="h-dvh snap-start" data-section="manager-cost-demo" />
          <ManagerCostCTA className="h-dvh snap-start" data-section="manager-cost-cta" />
        </>
      )}
      
      {/* Worker Path A: Get More Done, Faster */}
      {finalPath === 'worker-faster' && (
        <>
          <WorkerFasterProblem className="h-dvh snap-start" data-section="worker-faster-problem" />
          <WorkerFasterUpgrade className="h-dvh snap-start" data-section="worker-faster-upgrade" />
          <WorkerFasterExample className="h-dvh snap-start" data-section="worker-faster-example" />
          <WorkerFasterMeaning className="h-dvh snap-start" data-section="worker-faster-meaning" />
          <WorkerFasterOnboarding className="h-dvh snap-start" data-section="worker-faster-onboarding" />
          <WorkerFasterDemo className="h-dvh snap-start" data-section="worker-faster-demo" />
          <WorkerFasterCTA className="h-dvh snap-start" data-section="worker-faster-cta" />
        </>
      )}
      
      {/* Worker Path B: Same Work, Less Effort */}
      {finalPath === 'worker-easier' && (
        <>
          <WorkerEasierSituation className="h-dvh snap-start" data-section="worker-easier-situation" />
          <WorkerEasierRelief className="h-dvh snap-start" data-section="worker-easier-relief" />
          <WorkerEasierExample className="h-dvh snap-start" data-section="worker-easier-example" />
          <WorkerEasierFeeling className="h-dvh snap-start" data-section="worker-easier-feeling" />
          <WorkerEasierOnboarding className="h-dvh snap-start" data-section="worker-easier-onboarding" />
          <WorkerEasierDemo className="h-dvh snap-start" data-section="worker-easier-demo" />
          <WorkerEasierCTA className="h-dvh snap-start" data-section="worker-easier-cta" />
        </>
      )}
      
      {/* Footer always shows */}
      <Footer className="h-dvh snap-start" />
      
      {/* Floating scroll to top button - hidden on hero section */}
      <button
        ref={scrollToTopBtnRef}
        onClick={() => {
          if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 shadow-lg scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}