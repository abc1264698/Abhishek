import { useState } from "react";
import { X } from "lucide-react";

interface Memory {
  day: number;
  month: number; // 0-indexed: Jan=0
  year: number;
  key: string;
  emoji: string;
  text: string;
}

const memories: Memory[] = [
  {
  day: 19,
  month: 8, // September = 8 (0-indexed)
  year: 2024,
  key: "bday-angry",
  emoji: "😡",
  text: "Hmphh… no one wished me on my birthday 😡 but is baar to ohooo hehe i love you jannuu 💜"
  },

  { day: 24, 
    month: 9, 
    year: 2024, 
    key: "fest-day-1", 
    emoji: "😡", 
    text: " day 1 mahashe ji ne aisa ignore kiya jaise ptani exist hi nahi krti mein and anushika crying cz hum baat nahi kr rhe the haha i still couldn't understand it🔥" },

  { day: 25, 
    month: 9, 
    year: 2024, 
    key: "fest-day-2", 
    emoji: "😤", 
    text: " day 2 bahut ghussa aya tum pr but end mein car mein ek sath gye sb shrishti ke tantrum plsu naushika ke tantrum jhele plsu kisi ka pure raste i squeezed his shoulder while going back home khikhikhi🔥" },

  { day: 22, month: 10, 
    year: 2024,
    key: "confession",
    emoji: "💜", 
    text: "My crushh confessed to mee i was jumpingg !!! 💜" },
 
  { day: 4, 
    month: 10, 
    year: 2024, 
    key: "movie venom", 
    emoji: "🎉", 
    text: "movie dekhne gye the i soo wanted to hold ur hands tbb ahh but okayie  " },

  { day: 29, 
    month: 10, 
    year: 2024, 
    key: "first-date", 
    emoji: "🥰", 
    text: "First date with Anushika haha chaotic to thi and was the date when we held hands for the first timeee!! mwahhhh!!!" },

  { day: 3, 
    month: 11, 
    year: 2024, 
    key: "first-solo", 
    emoji: "🎬", 
    text: "Our first solo date hehe 🥰" },

  { day: 20, 
    month: 11, 
    year: 2024, 
    key: "second-date", 
    emoji: "💌", 
    text: "Second date 💌 held your face for the first time khikhikhi😚 itna pyara hai mera babyy🤗 " },

  { day: 24, 
    month: 11, 
    year: 2024, 
    key: "Third-date", 
    emoji: "✨", 
    text: "Third date ✨ mereko zyada yaad nahi kuch hehehe maffii mwahhh🥰 (hahaha tumne mereko cll pr yaad dilaya tha sandos ki date ka muhehe stole it from it) !!" },

  { day: 3, 
    month: 0, 
    year: 2025, 
    key: "fourth-date", 
    emoji: "🌟", 
    text: "fourth date 🌟  soo manyy kissess on my cheekss i frozeee as well itni baar but i wasss soo happy kud kud kr bataya hai nishtha or harshikha koo hhehehe" },

  { day: 17, 
    month: 0, 
    year: 2025, 
    key: "fifth-date", 
    emoji: "😘", 
    text: "Fifth date 😘 we kissed for the very first time like kissed kissed khikhi 🤗 (give me a kiss ab come on 😘)" },

  { day: 30, 
    month: 0, 
    year: 2025, 
    key: "sixth-date", 
    emoji: "🍿", 
    text: "Sixth date took u shopping with me made u so tired remeber janpath wali shopping hehe 🤗" },

  { day: 3, 
    month: 1, 
    year: 2025, 
    key: "seventh-date", 
    emoji: "🎉", 
    text: "Seventh date bs ab itna yaad nahi mereko " },

  { day: 4, 
    month: 1, 
    year: 2025, 
    key: "eighth-date", 
    emoji: "💖", 
    text: "Eighth date kisses yaad hai 💓💕 mereko bs i loveee youuuu sooo mcuhhh babbyyy 🤗" },
  
  { day: 12, 
    month: 8, 
    year: 2025, 
    key: "another date", 
    emoji: "💖", 
    text: "hehe I pulled you by collar and kissed you muheheh😚 naya wala mgf parking 💓💕" },
   
  { day: 3, 
    month: 2,
    year: 2025, 
    key: "calories burn ", 
    emoji: "😘", 
    text: "we indeed had a good workout session lovee hehe we burnt quite a lot calories i wonder when can we do that nexT?🤭💕" },

    
  { day: 5, 
    month: 3, 
    year: 2025, 
    key: "Painting", 
    emoji: "🎨", 
    text: "I got us both pyara sa matching stitch ka phone painting which u keep itna sambhal kr 🤭💕😘" },
     
   
  { day: 1, 
    month: 4, 
    year: 2025, 
    key: "SORRY Love", 
    emoji: "😣", 
    text: "okayy dekho merepe in kch months ke record nhi h cz shyd hum is time bahut kam mile the as apke bhai ji aa rkhe the nd hehe to u skip to other months khikhikhi💕😅" },
 
    
  { day: 19, 
    month: 8, 
    year: 2025, 
    key: "Mera Birthday", 
    emoji: "😘", 
    text: "Hehehe yes my love you wished sabse pehele mereko🤭💕 thankyou so much for making my bday special💖🤭" },

  { day: 23, 
    month: 8, 
    year: 2025, 
    key: "Pendant", 
    emoji: "🍀", 
    text: "I got such a pyara sa bday gift itna cutu sa pendant 🍀 ahh i loveee ittt🤭💕 i try wearing it everyday but i feel scared ki wo kharab hojaega😣😫" },

  { day: 6, 
    month: 9, 
    year: 2025, 
    key: "BIRTHDAYYYY", 
    emoji: "🍰", 
    text: "HAPPIEESS BIRTHDAYYY BABYYY !!! 🍰 I LOVEEE YOUU SO MUCHHH JANNUUU🌸" },
 
  
];

export default function CalendarMemories() {
  const [currentMonth, setCurrentMonth] = useState(8); // August = 7
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const getMemoryForDate = (day: number, month: number, year: number) =>
    memories.find(m => m.day === day && m.month === month && m.year === year);

  const handleDateClick = (day: number, month: number, year: number) => {
    const memory = getMemoryForDate(day, month, year);
    if (memory) setSelectedMemory(memory);
  };

  const closeModal = () => setSelectedMemory(null);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const renderCalendarDays = () => {
    const days: JSX.Element[] = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Empty slots before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-12 h-12" />);
    }

    // Actual days
    for (let day = 1; day <= lastDay; day++) {
      const memory = getMemoryForDate(day, currentMonth, currentYear);
      days.push(
        <div
          key={day}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            memory
              ? "bg-accent text-accent-foreground hover:scale-110 shadow-lg"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          onClick={() => handleDateClick(day, currentMonth, currentYear)}
        >
          {memory ? `${day} ${memory.emoji}` : day}
        </div>
      );
    }

    return days;
  };

  return (
    <section className="pt-8 pb-16 px-6" data-testid="calendar-memories">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-script text-white text-center mb-8">Our Beautiful Memories 📅</h2>

        {/* Month & Year Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="text-white font-bold text-2xl">&lt;</button>
          <h3 className="text-white text-xl font-medium">
            {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
          </h3>
          <button onClick={handleNextMonth} className="text-white font-bold text-2xl">&gt;</button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
          <div className="grid grid-cols-7 gap-4 mb-4">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
              <div key={day} className="text-center text-white font-medium py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">{renderCalendarDays()}</div>
        </div>
      </div>

      {/* Memory Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
            <p className="text-gray-800 text-lg font-script mb-6">{selectedMemory.text}</p>
            <button
              onClick={closeModal}
              className="w-8 h-8 bg-accent text-white rounded-full hover:scale-110 transition-all mx-auto"
            >
              <X className="w-4 h-4 mx-auto" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
