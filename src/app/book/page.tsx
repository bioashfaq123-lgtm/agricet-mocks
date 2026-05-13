"use client";
import { useState } from "react";
import { BookOpen, Lock, Download, CheckCircle, ChevronDown, ChevronUp, Star, Leaf } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";

// ─── Answer key map (1-indexed) ───────────────────────────────────────────────
const ANSWER_KEY: Record<number, string> = {
  1:"B",2:"A",3:"B",4:"B",5:"B",6:"B",7:"B",8:"B",9:"B",10:"B",
  11:"C",12:"B",13:"D",14:"B",15:"B",16:"C",17:"B",18:"B",19:"A",20:"B",
  21:"B",22:"B",23:"B",24:"C",25:"A",26:"A",27:"A",28:"A",29:"B",30:"A",
  31:"A",32:"B",33:"B",34:"A",35:"B",36:"B",37:"B",38:"D",39:"C",40:"B",
  41:"B",42:"C",43:"C",44:"B",45:"B",46:"B",47:"B",48:"B",49:"B",50:"A",
  51:"A",52:"A",53:"C",54:"B",55:"B",56:"A",57:"B",58:"B",59:"B",60:"B",
  61:"B",62:"B",63:"B",64:"A",65:"B",66:"B",67:"B",68:"B",69:"A",70:"B",
  71:"B",72:"C",73:"B",74:"B",75:"A",76:"B",77:"B",78:"A",79:"C",80:"B",
  81:"A",82:"A",83:"C",84:"B",85:"B",86:"B",87:"B",88:"B",89:"C",90:"C",
  91:"C",92:"B",93:"A",94:"B",95:"B",96:"B",
};

// ─── Questions data ────────────────────────────────────────────────────────────
type Question = { id: number; q: string; opts: string[] };

const QUESTIONS: Question[] = [
  // Group 1: Research Institutes & Agricultural Meteorology
  {id:1, q:"The headquarters of the Food and Agricultural Organization (FAO) is in:", opts:["Geneva","Rome","Paris","New York"]},
  {id:2, q:"ICAR was established in:", opts:["1929","1947","1954","1965"]},
  {id:3, q:"ICAR headquarters is located at:", opts:["Hyderabad","Pusa, New Delhi","Pune","Mumbai"]},
  {id:4, q:"PJTSAU stands for:", opts:["Professor Jawaharlal Telangana State Agricultural University","Professor Jayashankar Telangana State Agricultural University","Punjab Jayashankar Telangana State Agricultural University","Pusa Jayashankar Telangana State Agricultural University"]},
  {id:5, q:"PJTSAU was established in the year:", opts:["1972","2014","2016","1988"]},
  {id:6, q:"Father of Green Revolution in India is:", opts:["Norman Borlaug","Dr. M.S. Swaminathan","Dr. B.P. Pal","Dr. Verghese Kurien"]},
  {id:7, q:"Father of Green Revolution globally is:", opts:["Dr. M.S. Swaminathan","Norman Borlaug","Dr. Verghese Kurien","Dr. B.P. Pal"]},
  {id:8, q:"Father of White Revolution (Operation Flood) in India is:", opts:["Dr. M.S. Swaminathan","Dr. Verghese Kurien","Dr. B.P. Pal","Sir M. Visvesvaraya"]},
  {id:9, q:"Father of Yellow Revolution (Oilseeds) in India is:", opts:["Dr. M.S. Swaminathan","Dr. M.V. Rao","Dr. Sam Pitroda","Dr. K. Pratap Reddy"]},
  {id:10, q:"India's National Agricultural Research System (NARS) is led by:", opts:["FAO","ICAR","NABARD","Ministry of Commerce"]},
  {id:11, q:"The Krishi Vigyan Kendra (KVK) is at which administrative level?", opts:["State","Block","District","National"]},
  {id:12, q:"Which year was declared as International Year of Millets by UN?", opts:["2020","2023","2025","2030"]},
  {id:13, q:"Which year was declared as International Year of Co-operatives by UN?", opts:["2012","2020","2023","2025"]},
  {id:14, q:"India promotes millets under which brand name?", opts:["Pulses","Shree Anna (Millets)","Sustainable Agriculture","Natural Farming"]},
  {id:15, q:"NABARD was established in:", opts:["1969","1982","1995","2000"]},
  {id:16, q:"NABARD headquarters is located at:", opts:["Delhi","Pune","Mumbai","Hyderabad"]},
  {id:17, q:"Pradhan Mantri Fasal Bima Yojana (PMFBY) provides:", opts:["Loans","Crop insurance","Subsidies","Seed distribution"]},
  {id:18, q:"PM-KISAN scheme provides direct income support of:", opts:["₹4000 per year","₹6000 per year","₹10000 per year","₹12000 per year"]},
  {id:19, q:"e-NAM stands for:", opts:["e-National Agricultural Market","e-National Agricultural Mission","e-National Agriculture Money","e-Network Agricultural Market"]},
  {id:20, q:"Soil Health Card scheme was launched in:", opts:["2014","2015","2016","2018"]},
  {id:21, q:"Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) is for:", opts:["Insurance","Irrigation and water management","Fertilizers","Seeds"]},
  {id:22, q:"The Largest Producer of Milk in the world is:", opts:["USA","India","China","New Zealand"]},
  {id:23, q:"India ranks 1st globally in production of:", opts:["Wheat","Pulses, Milk and Jute","Maize","Rice"]},
  {id:24, q:"India is the largest producer of which spice in the world?", opts:["Black pepper","Cardamom","Most spices including chilli, ginger, turmeric, cumin","Saffron"]},
  {id:25, q:"World Food Day is celebrated on:", opts:["October 16","July 1","June 5","March 22"]},
  // Group 2: Soil Science & Soil Properties
  {id:26, q:"World Water Day is observed on:", opts:["March 22","April 22","June 5","October 16"]},
  {id:27, q:"World Environment Day is celebrated on:", opts:["June 5","April 22","October 16","March 22"]},
  {id:28, q:"World Soil Day is observed on:", opts:["December 5","October 5","November 5","June 5"]},
  {id:29, q:"National Farmers Day (Kisan Diwas) is celebrated on:", opts:["October 16","December 23","July 1","August 15"]},
  {id:30, q:"World Food Prize 2024 was awarded to:", opts:["Dr. Geoffrey Hawtin and Dr. Cary Fowler","Dr. M.S. Swaminathan","Dr. Norman Borlaug","Dr. Mariangela Hungria"]},
  {id:31, q:"World Food Prize 2025 was awarded to:", opts:["Dr. Mariangela Hungria","Dr. Geoffrey Hawtin","Dr. Cary Fowler","Dr. Heidi Kuhn"]},
  {id:32, q:"The first World Food Prize laureate was:", opts:["Norman Borlaug","Dr. M.S. Swaminathan","Verghese Kurien","B.P. Pal"]},
  {id:33, q:"India's first Biochar Centre of Excellence was inaugurated at:", opts:["Punjab Agricultural University","Kanha Shanti Vanam, Hyderabad","IARI New Delhi","NDRI Karnal"]},
  {id:34, q:"First National Co-operative University of India was established at:", opts:["Anand, Gujarat","New Delhi","Mumbai","Hyderabad"]},
  {id:35, q:"NaBFID (National Bank for Financing Infrastructure and Development) is for:", opts:["Crop loans","Long-term infrastructure financing","Microfinance","Subsidies"]},
  {id:36, q:"VKSA stands for:", opts:["Vikas Krishi Surakshit Abhiyan","Viksit Krishi Sankalp Abhiyan","Viksit Kisan Samagra Abhiyan","Vikasit Kisan Sahaayata Abhiyan"]},
  {id:37, q:"MGNREGA guarantees how many days of employment per year?", opts:["50","100","150","365"]},
  {id:38, q:"Which of these is NOT an agricultural input subsidy?", opts:["Fertilizer subsidy","Seed subsidy","Power subsidy for irrigation","GST"]},
  {id:39, q:"Minimum Support Price (MSP) is recommended by:", opts:["RBI","NITI Aayog","CACP (Commission for Agricultural Costs and Prices)","FCI"]},
  {id:40, q:"Currently MSP is announced for how many crops?", opts:["10","23","50","All crops"]},
  {id:41, q:"FRP for sugarcane stands for:", opts:["Fixed Rate Price","Fair and Remunerative Price","Final Rate Procurement","Farmer's Reservation Price"]},
  {id:42, q:"Buffer Stock of food grains in India is maintained by:", opts:["NAFED","CCI","FCI (Food Corporation of India)","NABARD"]},
  {id:43, q:"Public Distribution System (PDS) is operated by:", opts:["State Government only","Central Government only","Both Centre and State","RBI"]},
  {id:44, q:"India ranks ___ in world wheat production:", opts:["1st","2nd","3rd","4th"]},
  {id:45, q:"India ranks ___ in world rice production:", opts:["1st","2nd","3rd","4th"]},
  {id:46, q:"The largest mango-producing state in India is:", opts:["Maharashtra","Uttar Pradesh","Andhra Pradesh","Telangana"]},
  {id:47, q:"The Father of Hybrid Rice is:", opts:["Dr. M.S. Swaminathan","Yuan Long Ping","Norman Borlaug","Dr. B.P. Pal"]},
  {id:48, q:"India's largest producer state of cotton is:", opts:["Punjab","Maharashtra","Gujarat","Telangana"]},
  {id:49, q:"Largest producer state of sugarcane in India is:", opts:["Maharashtra","Uttar Pradesh","Karnataka","Tamil Nadu"]},
  {id:50, q:"The largest tea-producing state in India is:", opts:["Assam","West Bengal","Kerala","Tamil Nadu"]},
  // Group 3: Horticulture & Forestry
  {id:51, q:"The largest coffee-producing state in India is:", opts:["Karnataka","Kerala","Tamil Nadu","Andhra Pradesh"]},
  {id:52, q:"Largest fish-producing state in India is:", opts:["Andhra Pradesh","Kerala","West Bengal","Tamil Nadu"]},
  {id:53, q:"Indian Council of Agricultural Research (ICAR) is under which Ministry?", opts:["Education","Science","DARE Ministry of Agriculture","Commerce"]},
  {id:54, q:"Indian Agricultural Research Institute (IARI) is located at:", opts:["Mumbai","New Delhi (Pusa)","Pune","Hyderabad"]},
  {id:55, q:"NIPHM (National Institute of Plant Health Management) is located at:", opts:["Pusa","Hyderabad","Bangalore","New Delhi"]},
  {id:56, q:"Central Rice Research Institute (CRRI/NRRI) is at:", opts:["Cuttack, Odisha","New Delhi","Hyderabad","Coimbatore"]},
  {id:57, q:"Indian Institute of Pulses Research (IIPR) is at:", opts:["Hyderabad","Kanpur, UP","Pusa","Coimbatore"]},
  {id:58, q:"Sugarcane Breeding Institute (SBI) is located at:", opts:["Cuttack","Coimbatore","Pune","Nagpur"]},
  {id:59, q:"ICRISAT is located at:", opts:["New Delhi","Hyderabad (Patancheru)","Pune","Coimbatore"]},
  {id:60, q:"IRRI (International Rice Research Institute) is in:", opts:["India","Philippines (Los Banos)","China","Thailand"]},
  {id:61, q:"CIMMYT (International Maize and Wheat Improvement Center) is in:", opts:["USA","Mexico","India","Italy"]},
  {id:62, q:"The Svalbard Global Seed Vault is in:", opts:["USA","Norway","Italy","India"]},
  {id:63, q:"India's National Gene Bank for plant genetic resources is at:", opts:["IARI New Delhi","NBPGR New Delhi","NBAII Bangalore","CTCRI Trivandrum"]},
  {id:64, q:"India's first agricultural college was established at:", opts:["Pune (1879)","Pusa","Coimbatore","New Delhi"]},
  {id:65, q:"India's first State Agricultural University was established at:", opts:["Coimbatore","Pantnagar (1960)","Hyderabad","Bangalore"]},
  {id:66, q:"The 73rd Constitutional Amendment Act 1992 is related to:", opts:["Urban local bodies","Panchayati Raj (Rural local self-government)","Cooperative societies","Land reforms"]},
  {id:67, q:"The 74th Constitutional Amendment is related to:", opts:["Panchayati Raj","Urban local bodies (Municipalities)","Co-operatives","Land"]},
  {id:68, q:"India's National Mission for Sustainable Agriculture (NMSA) focuses on:", opts:["Heavy fertilizer use","Climate-resilient and sustainable farming","Plantation crops","Marine fishing"]},
  {id:69, q:"Genome-edited Rice varieties developed by ICAR (announced 2025):", opts:["DRR Dhan 100 and Pusa DST Rice 1","IR-8 and IR-36","Basmati 370 and Sona Masuri","Pusa 1121 and Pusa 1509"]},
  {id:70, q:"Bt Cotton (genetically modified) was approved in India in:", opts:["1995","2002","2010","2015"]},
  {id:71, q:"GEAC stands for:", opts:["Global Environment Assessment Committee","Genetic Engineering Appraisal Committee","Government Environmental Authority of Crops","Genetic Evaluation and Certification Committee"]},
  {id:72, q:"India's per capita arable land is approximately:", opts:["1.5 ha","0.5 ha","0.12 ha","2.0 ha"]},
  {id:73, q:"The largest source of agricultural credit in India is:", opts:["Cooperatives","Commercial banks","Money lenders","Regional Rural Banks (RRBs)"]},
  {id:74, q:"Kisan Credit Card (KCC) was launched in:", opts:["1995","1998-99","2005","2014"]},
  {id:75, q:"Largest organic farming state in India (first fully organic state) is:", opts:["Sikkim","Maharashtra","Madhya Pradesh","Karnataka"]},
  // Group 4: Farm Management, Extension & Farm Power
  {id:76, q:"The current N:P:K consumption ratio in India is approximately:", opts:["4:2:1 (ideal)","11:4:1 (actual, skewed)","1:1:1","10:5:1"]},
  {id:77, q:"From which year was 100% neem coating of subsidised urea made mandatory in India?", opts:["2012","2015","2018","2020"]},
  {id:78, q:"India's first genome-edited rice was named:", opts:["Kamala (DRR Dhan 100)","Sona Masuri","Pusa Basmati","IR-64"]},
  {id:79, q:"India's National Food Security Act was enacted in:", opts:["2005","2009","2013","2016"]},
  {id:80, q:"Pradhan Mantri Krishi Sinchayee Yojana motto is:", opts:["Health for all","Har Khet Ko Pani and Per Drop More Crop","Jai Jawan Jai Kisan","Land for landless"]},
  {id:81, q:"PJTSAU recently organized a state-wide campaign Rythu Mungitlo Shastravethalu during:", opts:["May 2025","July 2025","October 2025","2024"]},
  {id:82, q:"The current Director General of ICAR is:", opts:["Dr. Himanshu Pathak","Dr. Trilochan Mohapatra","Dr. M.L. Jat","Dr. R.S. Paroda"]},
  {id:83, q:"ATMA (Agricultural Technology Management Agency) operates at which level?", opts:["National level","State level","District level","Block level"]},
  {id:84, q:"Aspirational Districts Programme (ADP) was launched in:", opts:["2014","2018","2020","2022"]},
  {id:85, q:"PM-AASHA is for:", opts:["Soil health","Income protection of farmers at MSP","Irrigation","Insurance"]},
  {id:86, q:"In Indian Agriculture kharif season is approximately:", opts:["October to March","June to October (monsoon-dependent)","April to June","Throughout the year"]},
  {id:87, q:"Rabi season is:", opts:["June to October","October/November to March/April (winter)","July to September","All year round"]},
  {id:88, q:"Zaid season refers to:", opts:["Monsoon crops","Summer crops grown between Rabi and Kharif (March to June)","Winter crops","Perennial crops"]},
  {id:89, q:"India's largest exported agricultural commodity by value is:", opts:["Tea","Spices","Marine products and Basmati rice","Sugar"]},
  {id:90, q:"India's highest agricultural import (by value) is:", opts:["Wheat","Sugar","Edible oils","Fertilizers"]},
  {id:91, q:"Largest consumer of urea in the world is:", opts:["USA","China","India","Brazil"]},
  {id:92, q:"Agriculture's share in India's GDP is approximately:", opts:["5 percent","17 to 18 percent","30 percent","45 percent"]},
  {id:93, q:"World Pulses Day is celebrated on:", opts:["February 10","June 5","March 22","October 16"]},
  {id:94, q:"The first Five Year Plan in India primarily focused on:", opts:["Industry","Agriculture and irrigation","Service sector","Defence"]},
  {id:95, q:"AGRICET (Agriculture Common Entrance Test) is conducted by:", opts:["ICAR","PJTSAU (for Telangana state)","SCERT","Central Government"]},
  {id:96, q:"Father of Modern Agriculture in India is regarded as:", opts:["Norman Borlaug","Dr. M.S. Swaminathan","Dr. Verghese Kurien","Sir Albert Howard"]},
];

const GROUPS = [
  { label: "Group 1: Research Institutes & Agricultural Meteorology", from: 1, to: 25 },
  { label: "Group 2: Soil Science, Soil Properties & Agricultural Policies", from: 26, to: 50 },
  { label: "Group 3: Horticulture, Forestry & Biotechnology", from: 51, to: 75 },
  { label: "Group 4: Farm Management, Extension & Farm Power", from: 76, to: 96 },
];

// ─── Razorpay loader ──────────────────────────────────────────────────────────
declare global {
  interface Window {
    Razorpay: new (opts: Record<string, unknown>) => { open: () => void };
  }
}
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload  = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

// ─── Main component ───────────────────────────────────────────────────────────
export default function BookPage() {
  const { user, userData, refreshUserData } = useAuth();
  const isBookPaid = userData?.isBookPaid === true;

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({ 0: true });
  const [paying, setPaying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // ─── Toggle group open/closed ─────────────────────────────────────────────
  const toggleGroup = (i: number) =>
    setOpenGroups((g) => ({ ...g, [i]: !g[i] }));

  // ─── Score calculator ─────────────────────────────────────────────────────
  const score = QUESTIONS.filter(
    (q) => ["A","B","C","D"][selected[q.id] ?? -1] === ANSWER_KEY[q.id]
  ).length;
  const attempted = Object.keys(selected).length;

  // ─── Book payment ─────────────────────────────────────────────────────────
  const handleBookPayment = async () => {
    if (!user) { toast.error("Please login to purchase the book."); return; }
    setPaying(true);

    const ok = await loadRazorpay();
    if (!ok) { toast.error("Payment SDK failed to load."); setPaying(false); return; }

    let orderId: string, amount: number, currency: string;
    try {
      const res = await fetch("/api/create-book-order", { method: "POST" });
      if (!res.ok) throw new Error("Order failed");
      const data = await res.json();
      orderId = data.orderId; amount = data.amount; currency = data.currency;
    } catch {
      toast.error("Could not initiate payment. Please try again.");
      setPaying(false);
      return;
    }

    const rzp = new window.Razorpay({
      key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id:    orderId,
      amount,
      currency,
      name:        "AGRICET MOCKS",
      description: "AGRICET Objective Book – Lifetime Access + Download",
      prefill:     { name: userData?.name ?? "", email: user.email ?? "" },
      theme:       { color: "#16a34a" },
      retry:       { enabled: true, max_count: 4 },
      notes:       { user_id: user.uid, type: "book" },
      handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
        try {
          const verifyRes = await fetch("/api/verify-book-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
              userId:              user.uid,
            }),
          });
          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            toast.error(`Verification failed. Call helpline: +91 90593 36236 (Payment ID: ${response.razorpay_payment_id})`);
            setPaying(false);
            return;
          }

          await refreshUserData();
          toast.success("🎉 Book unlocked! You can now download the full PDF.");
        } catch {
          toast.error("Payment recorded but access failed. Call +91 90593 36236");
        }
        setPaying(false);
      },
      modal: {
        ondismiss: () => setPaying(false),
        confirm_close: true,
        escape: false,
        animation: true,
      },
    });
    rzp.open();
  };

  // ─── Download ─────────────────────────────────────────────────────────────
  const handleDownload = async () => {
    if (!user) return;
    setDownloading(true);
    try {
      const res = await fetch(`/api/download-book?userId=${user.uid}`);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = "AGRICET_Objective_Book.pdf";
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Download started!");
    } catch {
      toast.error("Download failed. Please try again or call +91 90593 36236");
    }
    setDownloading(false);
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Star className="w-3 h-3" /> AGRICET Best Objective Book
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            AGRICET Objective Book
          </h1>
          <p className="text-green-100 text-lg mb-2">
            3,400+ MCQs across all 17 subjects · Previous Year Papers 2023–2025
          </p>
          <p className="text-green-200 text-sm">
            General Agriculture (96 questions) — <span className="text-amber-300 font-semibold">FREE to practise below</span>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* ── Free Quiz Section ── */}
        <section>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                General Agriculture — Free Practice (96 Qs)
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">Mixed topics from all 17 AGRICET subjects</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {attempted > 0 && (
                <span className="text-sm bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-lg font-medium">
                  {attempted}/96 attempted · {score} correct
                </span>
              )}
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="text-sm bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg font-medium hover:bg-amber-100 transition-colors"
              >
                {showAnswers ? "Hide Answer Key" : "Show Answer Key"}
              </button>
              <button
                onClick={() => { setSelected({}); setShowAnswers(false); }}
                className="text-sm bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Progress bar */}
          {attempted > 0 && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${(attempted / 96) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {96 - attempted} questions remaining
              </p>
            </div>
          )}

          {/* Question groups */}
          {GROUPS.map((group, gi) => {
            const groupQs = QUESTIONS.filter((q) => q.id >= group.from && q.id <= group.to);
            const isOpen  = openGroups[gi] ?? false;
            return (
              <div key={gi} className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
                <button
                  onClick={() => toggleGroup(gi)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm">{group.label}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-5 border-t border-gray-50">
                    {groupQs.map((q) => {
                      const correct    = ANSWER_KEY[q.id];
                      const correctIdx = ["A","B","C","D"].indexOf(correct);
                      return (
                        <div key={q.id} className="pt-4">
                          <p className="text-sm font-medium text-gray-800 mb-3">
                            <span className="text-green-600 font-bold mr-1">{q.id}.</span>
                            {q.q}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.opts.map((opt, oi) => {
                              const letter  = ["A","B","C","D"][oi];
                              const isSel   = selected[q.id] === oi;
                              const isRight = showAnswers && oi === correctIdx;
                              const isWrong = showAnswers && isSel && oi !== correctIdx;
                              return (
                                <button
                                  key={oi}
                                  onClick={() => setSelected((s) => ({ ...s, [q.id]: oi }))}
                                  className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${
                                    isRight
                                      ? "bg-green-50 border-green-400 text-green-800 font-medium"
                                      : isWrong
                                      ? "bg-red-50 border-red-300 text-red-700"
                                      : isSel
                                      ? "bg-primary-50 border-primary-400 text-primary-800 font-medium"
                                      : "bg-gray-50 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50"
                                  }`}
                                >
                                  <span className="font-bold mr-1.5">{letter}.</span>
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                          {showAnswers && (
                            <p className="text-xs text-green-700 mt-2 font-medium flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Answer: {correct}) {q.opts[correctIdx]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* ── Paywall / Unlock Section ── */}
        <section className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 text-center text-white">
            {isBookPaid ? (
              // Unlocked state
              <>
                <div className="inline-flex items-center gap-2 bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <CheckCircle className="w-4 h-4" /> Full Access Unlocked
                </div>
                <h3 className="text-2xl font-black mb-2">You own the complete book!</h3>
                <p className="text-green-200 mb-6 text-sm">Download the full PDF with all 17 subjects + PYQ papers</p>
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105 disabled:opacity-60"
                >
                  <Download className="w-5 h-5" />
                  {downloading ? "Downloading..." : "Download Full PDF"}
                </button>
              </>
            ) : (
              // Locked state
              <>
                <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <Lock className="w-4 h-4" /> Full Book – One-time ₹100
                </div>
                <h3 className="text-2xl font-black mb-2">Unlock the Complete AGRICET Objective Book</h3>
                <p className="text-green-200 mb-6 text-sm max-w-lg mx-auto">
                  Get instant access to all 3,400+ MCQs across 17 diploma subjects + Previous Year Papers (2023, 2024, 2025) — download the full PDF forever.
                </p>

                {/* Feature bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                  {[
                    { icon: "📚", title: "17 Subjects", desc: "DA 101 to DA 291 — every diploma subject covered" },
                    { icon: "📅", title: "PYQ Papers", desc: "Complete 2023, 2024 & 2025 AGRICET papers with answers" },
                    { icon: "⬇️", title: "PDF Download", desc: "Download once, study forever — works offline" },
                  ].map((f) => (
                    <div key={f.title} className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl mb-1">{f.icon}</div>
                      <div className="font-bold text-sm">{f.title}</div>
                      <div className="text-green-200 text-xs mt-0.5">{f.desc}</div>
                    </div>
                  ))}
                </div>

                {user ? (
                  <div className="space-y-3">
                    <button
                      onClick={handleBookPayment}
                      disabled={paying}
                      className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-10 py-3.5 rounded-2xl text-lg transition-all hover:scale-105 disabled:opacity-60 shadow-lg"
                    >
                      <BookOpen className="w-5 h-5" />
                      {paying ? "Processing..." : "Unlock Book – ₹100"}
                    </button>
                    <p className="text-green-300 text-xs">
                      Payment issues? Call{" "}
                      <a href="tel:+919059336236" className="text-amber-300 underline font-medium">
                        +91 90593 36236
                      </a>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-green-200 text-sm mb-3">Login to unlock the full book</p>
                    <a
                      href="/login"
                      className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-3 rounded-2xl transition-all hover:scale-105"
                    >
                      Login to Purchase – ₹100
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
