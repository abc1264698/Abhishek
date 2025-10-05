import { useState } from "react";
import { Calendar, Images, Heart, Gamepad2, Mail } from "lucide-react";
import CalendarMemories from "./calendar-memories";
import MemoryGallery from "./memory-gallery";
import FlirtyCards from "./flirty-cards";
import MemoryGame from "./memory-game";
import SweetNotes from "./sweet-notes";

type Section = 'calendar' | 'gallery' | 'cards' | 'game' | 'notes';

export default function MainContent() {
  const [activeSection, setActiveSection] = useState<Section>('calendar');

  const navItems = [
    { id: 'calendar' as Section, label: 'Memories', icon: Calendar },
    { id: 'gallery' as Section, label: 'Gallery', icon: Images },
    { id: 'cards' as Section, label: 'Cards', icon: Heart },
    { id: 'game' as Section, label: 'Game', icon: Gamepad2 },
    { id: 'notes' as Section, label: 'Notes', icon: Mail },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'calendar':
        return <CalendarMemories />;
      case 'gallery':
        return <MemoryGallery />;
      case 'cards':
        return <FlirtyCards />;
      case 'game':
        return <MemoryGame />;
      case 'notes':
        return <SweetNotes />;
      default:
        return <CalendarMemories />;
    }
  };

  return (
    <div className="min-h-screen" data-testid="main-content">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-6 py-2 rounded-full text-white hover:bg-white/30 transition-all ${
                  activeSection === id ? 'bg-white/40' : 'bg-white/20'
                }`}
                data-testid={`nav-${id}`}
              >
                <Icon className="w-4 h-4 mr-2 inline" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24">
        {renderSection()}
      </div>
    </div>
  );
}
