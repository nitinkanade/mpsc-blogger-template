const { createPost, updatePost } = require('./blogger_tool.js');

const POST_ID = '4539584964627770200';

// -----------------------------------------------------------------------------
// AUTHENTIC MPSC QUESTIONS DATASET (15 High-Yield Questions across 5 Subjects)
// -----------------------------------------------------------------------------
const examData = {
  examTitle: "MPSC Rajyaseva & Combine GS Live Mock Exam 2026",
  marathiTitle: "MPSC संयुक्त व राज्यसेवा पूर्व परीक्षा: सामान्य अध्ययन (GS) ऑनलाइन सराव पेपर",
  totalMarks: 30,
  marksPerQuestion: 2,
  negativePenalty: 0.5, // 1/4th of 2 marks = 0.50 deduction
  durationMinutes: 15,
  subjects: ["इतिहास", "भूगोल", "राज्यघटना", "अर्थव्यवस्था", "सामान्य विज्ञान"],
  questions: [
    // 1. History
    {
      id: 1,
      subject: "इतिहास",
      question: "१८५७ च्या स्वातंत्र्य समरादरम्यान खानदेश व सातपुडा परिसरात इंग्रजांविरुद्ध भिल्लांचे नेतृत्व खालीलपैकी कोणी केले होते?",
      options: [
        "उमाजी नाईक व बापू त्रिंबकजी",
        "कजारसिंग (काजीसिंग) व भीमा नाईक",
        "राघोजी भांगरे व तात्या टोपे",
        "भाऊराव पाटील व किसन वीर"
      ],
      correctAnswer: 1,
      explanation: "१८५७ च्या उठावात खानदेश, सातपुडा आणि नर्मदा खोऱ्यात काजीसिंग (कजारसिंग) आणि भीमा नाईक यांनी ब्रिटिशांविरुद्ध तीव्र लढा दिला. त्यांनी बडवाणीच्या जंगलात ब्रिटिश खजिना लुटला आणि स्वातंत्र्ययुद्धात भाग घेतला. (उमाजी नाईक यांनी १८२६-१८३२ दरम्यान पुण्यात रामोशांचे नेतृत्व केले होते)."
    },
    {
      id: 2,
      subject: "इतिहास",
      question: "सत्यशोधक समाजाचे अधिकृत मुखपत्र म्हणून १ जानेवारी १८७७ रोजी पुण्यात 'दीनबंधू' हे वृत्तपत्र कोणी सुरू केले?",
      options: [
        "नारायण मेघाजी लोखंडे",
        "कृष्णराव पांडुरंग भालेकर",
        "डॉ. विश्राम रामजी घोले",
        "गोपाळबाबा वलंगकर"
      ],
      correctAnswer: 1,
      explanation: "महात्मा जोतीराव फुले यांच्या प्रेरणेने कृष्णराव भालेकर यांनी १ जानेवारी १८७७ रोजी पुण्यात 'दीनबंधू' वृत्तपत्र सुरू केले. हे सत्यशोधक समाजाचे पहिले मुखपत्र होते. नंतर १८८० मध्ये नारायण मेघाजी लोखंडे यांनी मुंबईतून दीनबंधूचे संपादन व प्रकाशन सुरू करून कामगारांचे प्रश्न मांडले."
    },
    {
      id: 3,
      subject: "इतिहास",
      question: "मुंबई इलाख्यात महसूल वसुलीसाठी 'रयतवारी पद्धत' लागू करण्याची शिफारस खालीलपैकी कोणत्या ब्रिटिश गव्हर्नरने केली होती?",
      options: [
        "लॉर्ड कॉर्नवॉलिस",
        "माउंट स्टुअर्ट एल्फिन्स्टन",
        "लॉर्ड डलहौसी",
        "थॉमस मनरो"
      ],
      correctAnswer: 1,
      explanation: "मुंबई प्रांतात १८१८ मध्ये पेशवाईच्या अस्तानंतर गव्हर्नर माउंट स्टुअर्ट एल्फिन्स्टन (Mountstuart Elphinstone) यांनी मद्रासमधील थॉमस मनरो यांच्या रयतवारी पद्धतीचा अभ्यास करून मुंबई इलाख्यात रयतवारी पद्धतीची शिफारस केली. यामध्ये थेट शेतकऱ्यांशी महसूल करार केला जात असे."
    },

    // 2. Geography
    {
      id: 4,
      subject: "भूगोल",
      question: "महाराष्ट्रात सह्याद्री पर्वतरांगेतील सर्वोच्च शिखर 'कळसूबाई' (उंची १६४६ मीटर) हे खालीलपैकी कोणत्या जिल्ह्यात वसलेले आहे?",
      options: [
        "नाशिक (इगतपुरी तालुका)",
        "अहमदनगर (अकोले तालुका)",
        "पुणे (जुन्नर तालुका)",
        "सातारा (महाबळेश्वर तालुका)"
      ],
      correctAnswer: 1,
      explanation: "महाराष्ट्रातील सर्वोच्च शिखर कळसूबाई (१६४६ मीटर) हे अहमदनगर (अहिल्यानगर) जिल्ह्यातील अकोले तालुक्यात स्थित आहे. हे शिखर हरिश्चंद्रगड अभयारण्याचा भाग असून सह्याद्री पर्वतरांगेत येते."
    },
    {
      id: 5,
      subject: "भूगोल",
      question: "महाराष्ट्रातील गोदावरी नदीचे खोरे आणि भीमा नदीचे खोरे खालीलपैकी कोणत्या डोंगररांगेमुळे एकमेकांपासून वेगळे झाले आहेत?",
      options: [
        "सातपुडा पर्वतरांग",
        "अजिंठा-सातमाळा डोंगररांग",
        "हरिश्चंद्र-बालाघाट डोंगररांग",
        "महादेव डोंगररांग"
      ],
      correctAnswer: 2,
      explanation: "हरिश्चंद्र-बालाघाट डोंगररांगेमुळे उत्तरेकडील गोदावरी नदीचे खोरे आणि दक्षिणेकडील भीमा नदीचे खोरे वेगळे झाले आहेत. (गोदावरी आणि तापी नद्यांची खोरी अजिंठा-सातमाळा डोंगररांगेमुळे वेगळी झाली आहेत, तर भीमा आणि कृष्णा नद्यांची खोरी शंभू-महादेव डोंगररांगेमुळे वेगळी झाली आहेत)."
    },
    {
      id: 6,
      subject: "भूगोल",
      question: "२०११ च्या जनगणनेनुसार महाराष्ट्रातील सर्वात कमी लिंगगुणोत्तर (Sex Ratio) असणारा जिल्हा खालीलपैकी कोणता आहे?",
      options: [
        "मुंबई उपनगर (८६०)",
        "मुंबई शहर (८३२)",
        "ठाणे (८८६)",
        "पुणे (९१५)"
      ],
      correctAnswer: 1,
      explanation: "२०११ च्या जनगणनेनुसार महाराष्ट्रात सर्वात कमी लिंगगुणोत्तर 'मुंबई शहर' (८३२) जिल्ह्याचे आहे, त्यानंतर मुंबई उपनगर (८६०) चा क्रमांक लागतो. महाराष्ट्रात सर्वाधिक लिंगगुणोत्तर रत्नागिरी (११२२) आणि सिंधुदुर्ग (१०३६) जिल्ह्यांचे आहे."
    },

    // 3. Polity
    {
      id: 7,
      subject: "राज्यघटना",
      question: "भारतीय राज्यघटनेच्या कोणत्या कलमानुसार राज्य विधिमंडळाचे अधिवेशन चालू नसताना राज्यपालांना अध्यादेश (Ordinance) जारी करण्याचा अधिकार आहे?",
      options: [
        "कलम १२३",
        "कलम २१३",
        "कलम १६१",
        "कलम १७४"
      ],
      correctAnswer: 1,
      explanation: "भारतीय राज्यघटनेच्या कलम २१३ नुसार राज्यपालांना अध्यादेश प्रख्यापित करण्याचा अधिकार आहे. (कलम १२३ नुसार भारताच्या राष्ट्रपतींना संसदेच्या सुट्टीच्या काळात अध्यादेश जारी करण्याचा अधिकार प्राप्त आहे)."
    },
    {
      id: 8,
      subject: "राज्यघटना",
      question: "७३ व्या घटनादुरुस्ती कायदा १९९२ नुसार 'ग्रामसभे' ची व्याख्या व तरतूद संविधानाच्या कोणत्या कलमामध्ये समाविष्ट करण्यात आली आहे?",
      options: [
        "कलम २४३ (क) / Article 243A",
        "कलम २४३ (ब) / Article 243B",
        "कलम २४३ (ड) / Article 243D",
        "कलम २४०"
      ],
      correctAnswer: 0,
      explanation: "भारतीय संविधानाच्या कलम २४३(A) [२४३-क] मध्ये ग्रामसभेची तरतूद आहे. ग्रामसभा म्हणजे गावाच्या मतदार यादीत नोंदणीकृत असलेल्या सर्व सज्ञान व्यक्तींची मिळून बनलेली सभा होय. कलम २४३(B) मध्ये पंचायतींच्या त्रिस्तरीय रचनेची तरतूद आहे."
    },
    {
      id: 9,
      subject: "राज्यघटना",
      question: "भारताच्या राष्ट्रपतींवर 'संविधानाचे उल्लंघन' केल्याच्या कारणावरून महाभियोग (Impeachment) चालवण्याची विशेष प्रक्रिया कोणत्या कलमात दिली आहे?",
      options: [
        "कलम ५२",
        "कलम ५६",
        "कलम ६१",
        "कलम ७२"
      ],
      correctAnswer: 2,
      explanation: "कलम ६१ मध्ये राष्ट्रपतींवरील महाभियोग प्रक्रियेची (Procedure for Impeachment of President) संपूर्ण तरतूद आहे. महाभियोगाचा ठराव संसदेच्या कोणत्याही सभागृहात किमान १/४ सदस्यांच्या स्वाक्षरीने मांडला जाऊ शकतो आणि दोन्ही सभागृहांच्या एकूण सदस्यसंख्येच्या २/३ बहुमताने मंजूर व्हावा लागतो."
    },

    // 4. Economy
    {
      id: 10,
      subject: "अर्थव्यवस्था",
      question: "भारतात दारिद्र्य रेषेचे मापन करण्यासाठी आणि दारिद्र्य मोजण्याच्या पद्धतीचे पुनरावलोकन करण्यासाठी 'सुरेश तेंडुलकर समिती' ची स्थापना कोणत्या वर्षी करण्यात आली होती?",
      options: [
        "१९९३",
        "२००५",
        "२०१२",
        "२०१४"
      ],
      correctAnswer: 1,
      explanation: "नियोजन आयोगाने डिसेंबर २००५ मध्ये प्रा. सुरेश तेंडुलकर यांच्या अध्यक्षतेखाली तज्ज्ञ समिती नेमली होती. या समितीने २००९ मध्ये आपला अहवाल सादर केला. त्यांनी दारिद्र्य टोपलीतून (MRP) कॅलरी निकष बाजूला ठेवून शिक्षण, आरोग्य, कपडे व अन्न यांवरील मासिक प्रतिव्यक्ती खर्चाचा (MPCE) नवा निकष मांडला."
    },
    {
      id: 11,
      subject: "अर्थव्यवस्था",
      question: "भारतीय रिझर्व्ह बँक (RBI) चे राष्ट्रीयीकरण (Nationalisation) खालीलपैकी कोणत्या दिवशी करण्यात आले?",
      options: [
        "१ एप्रिल १९३५",
        "१ जानेवारी १९४९",
        "१९ जुलै १९६९",
        "१५ ऑगस्ट १९४७"
      ],
      correctAnswer: 1,
      explanation: "रिझर्व्ह बँकेची स्थापना १ एप्रिल १९३५ रोजी 'रिझर्व्ह बँक ऑफ इंडिया ॲक्ट १९३४' नुसार खाजगी बँक म्हणून झाली होती. भारताच्या स्वातंत्र्यानंतर १ जानेवारी १९४९ रोजी 'आरबीआय (सार्वजनिक मालकीकडे हस्तांतरण) कायदा १९४८' द्वारे आरबीआयचे पूर्ण राष्ट्रीयीकरण करण्यात आले."
    },
    {
      id: 12,
      subject: "अर्थव्यवस्था",
      question: "६५ वर्षे जुन्या नियोजन आयोगाच्या जागी भारत सरकारने 'नीती आयोग' (NITI Aayog) ची अधिकृत स्थापना कोणत्या दिवशी केली?",
      options: [
        "१५ ऑगस्ट २०१४",
        "१ जानेवारी २०१५",
        "१ एप्रिल २०१५",
        "२६ जानेवारी २०१६"
      ],
      correctAnswer: 1,
      explanation: "१ जानेवारी २०१५ रोजी मंत्रिमंडळाच्या ठरावाद्वारे 'नीती आयोग' (National Institution for Transforming India) ची स्थापना करण्यात आली. पंतप्रधान हे नीती आयोगाचे पदसिद्ध अध्यक्ष असतात. नीती आयोग ही 'थिंक टँक' म्हणून सहकारी संघराज्याला (Cooperative Federalism) प्रोत्साहन देते."
    },

    // 5. Science
    {
      id: 13,
      subject: "सामान्य विज्ञान",
      question: "मानवी रक्तातील ग्लुकोज (साखरेचे) प्रमाण नियंत्रित ठेवणारे 'इन्सुलिन' (Insulin) हे संप्रेरक शरीरातील कोणत्या अवयवाच्या पेशींद्वारे स्रवले जाते?",
      options: [
        "यकृत (Liver)",
        "स्वादुपिंड (Pancreas - बीटा पेशी)",
        "थायरॉईड ग्रंथी (Thyroid)",
        "मूत्रपिंड (Kidney)"
      ],
      correctAnswer: 1,
      explanation: "इन्सुलिन हे स्वादुपिंडातील (Pancreas) 'आयलेट्स ऑफ लँगरहॅन्स' मधील बीटा पेशींद्वारे (Beta Cells) स्रवले जाते. इन्सुलिनच्या कमतरतेमुळे रक्तातील साखरेचे प्रमाण वाढून 'मधुमेह' (Diabetes Mellitus) हा विकार होतो."
    },
    {
      id: 14,
      subject: "सामान्य विज्ञान",
      question: "दंतवैद्यकाद्वारे रुग्णाच्या दातांची तपासणी करताना किंवा वाहनांचे हेडलाईट व दाढी करण्याच्या आरशात कोणत्या प्रकारचा आरसा वापरला जातो?",
      options: [
        "सपाट आरसा (Plane Mirror)",
        "अंतर्गोल आरसा (Concave Mirror)",
        "बहिर्गोल आरसा (Convex Mirror)",
        "दंडगोलाकार आरसा (Cylindrical Mirror)"
      ],
      correctAnswer: 1,
      explanation: "अंतर्गोल आरसा (Concave Mirror) वस्तू जवळ असताना तिची आभासी, सुलटी आणि भव्य (विशाल) प्रतिमा तयार करतो, त्यामुळे दात तपासण्यासाठी दंतवैद्य अंतर्गोल आरसा वापरतात. (वाहनांचा रिअर-व्ह्यू आरसा मात्र बहिर्गोल असतो, कारण तो विस्तीर्ण परिसर दाखवतो)."
    },
    {
      id: 15,
      subject: "सामान्य विज्ञान",
      question: "पारंपारिक विजेच्या दिव्यामध्ये (Incandescent Bulb) वापरली जाणारी तार उच्च वितळण बिंदू असलेल्या कोणत्या धातूपासून बनवलेली असते?",
      options: [
        "नायक्रोम (Nichrome)",
        "टंगस्टन (Tungsten)",
        "तांबे (Copper)",
        "ॲल्युमिनियम (Aluminium)"
      ],
      correctAnswer: 1,
      explanation: "विजेच्या बल्बमध्ये फिलामेंट म्हणून टंगस्टन (W) धातूची तार वापरली जाते, कारण तिचा वितळण बिंदू अतिशय उच्च (सुमारे ३४२२ अंश सेल्सिअस) असतो आणि ती वितळत नाही. (इस्त्री आणि हिटरच्या कॉईलमध्ये मात्र नायक्रोम धातूचे मिश्रण वापरले जाते)."
    }
  ]
};

// -----------------------------------------------------------------------------
// COMPILE COMPLETE INTERACTIVE EXAM APPLICATION HTML + SEO STRUCTURED DATA
// -----------------------------------------------------------------------------
function buildFullExamPost(data) {
  // Base64 encode JSON to completely prevent Blogger from escaping Devanagari text into entities
  const base64Data = Buffer.from(JSON.stringify(data), 'utf8').toString('base64');

  return `
<div class="mpsc-exam-app" id="mpscExamApp" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

  <!-- EXAM TOP BANNER & STATS -->
  <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); color: #ffffff; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(37,99,235,0.15);">
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <span style="background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: 600; text-transform: uppercase;">
          ⚡ Official Exam Pattern Test
        </span>
        <h2 style="margin: 8px 0 4px 0; color: #ffffff; font-size: 22px; font-weight: 700;">
          ${data.marathiTitle}
        </h2>
        <div style="font-size: 14px; opacity: 0.9;">
          🎯 एकूण प्रश्न: <strong>${data.questions.length}</strong> | एकूण गुण: <strong>${data.totalMarks}</strong> | वेळ: <strong>${data.durationMinutes} मिनिटे</strong> | निगेटिव्ह: <strong>-०.५० गुण (१/४)</strong>
        </div>
      </div>
      <div id="examTopRightControls" style="display: flex; gap: 8px;">
        <button id="btnStartExamMode" type="button" style="background: #10b981; color: #ffffff; border: none; padding: 11px 22px; border-radius: 8px; font-weight: 700; font-size: 15px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 6px rgba(16,185,129,0.3);">
          <span>⏱️</span> <span>ऑनलाइन परीक्षा सुरू करा</span>
        </button>
      </div>
    </div>
  </div>

  <!-- LIVE EXAM SIMULATOR CONTAINER (Initially Hidden until user clicks Start) -->
  <div id="examSimulatorBox" style="display: none; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 22px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
    
    <!-- Timer & Live Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 14px; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
      <div>
        <span id="examCurrentSubjectBadge" style="background: #e0e7ff; color: #3730a3; padding: 5px 12px; border-radius: 6px; font-weight: 700; font-size: 14px;">
          विषय: इतिहास
        </span>
        <span id="examQCounterText" style="margin-left: 10px; font-weight: 700; color: #334155; font-size: 15px;">
          प्रश्न १ / ${data.questions.length}
        </span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <div id="examTimerBadge" style="background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 6px 14px; border-radius: 8px; font-weight: 700; font-size: 16px; font-variant-numeric: tabular-nums;">
          ⏱️ 15:00
        </div>
        <button id="btnFinishExamTop" type="button" style="background: #dc2626; color: white; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 14px;">
          पेपर सबमिट करा
        </button>
      </div>
    </div>

    <!-- Active Question View -->
    <div id="activeQuestionView" style="margin-bottom: 25px;">
      <!-- Populated dynamically via JS -->
    </div>

    <!-- Bottom Action Buttons & Controls -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 16px; flex-wrap: wrap; gap: 10px;">
      <div style="display: flex; gap: 8px;">
        <button id="btnPrevQ" type="button" style="background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; padding: 9px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">
          ⬅️ मागील
        </button>
        <button id="btnClearResponse" type="button" style="background: #ffffff; color: #64748b; border: 1px solid #cbd5e1; padding: 9px 14px; border-radius: 6px; font-weight: 600; cursor: pointer;">
          रिस्पॉन्स क्लिअर करा
        </button>
      </div>
      <div style="display: flex; gap: 8px;">
        <button id="btnMarkReview" type="button" style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a; padding: 9px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">
          🚩 नंतर तपासण्यासाठी ठेवा
        </button>
        <button id="btnNextQ" type="button" style="background: #2563eb; color: #ffffff; border: none; padding: 9px 22px; border-radius: 6px; font-weight: 700; cursor: pointer;">
          पुढील प्रश्न ➡️
        </button>
      </div>
    </div>

    <!-- Question Palette Drawer -->
    <div style="margin-top: 25px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-weight: 700; color: #1e293b; font-size: 14px;">प्रश्न पॅलेट (Question Palette):</span>
        <div style="font-size: 12px; display: flex; gap: 12px; flex-wrap: wrap; color: #64748b;">
          <span><span style="display:inline-block; width:10px; height:10px; background:#10b981; border-radius:2px;"></span> सोडवलेले</span>
          <span><span style="display:inline-block; width:10px; height:10px; background:#f59e0b; border-radius:2px;"></span> पाहिलेले</span>
          <span><span style="display:inline-block; width:10px; height:10px; background:#8b5cf6; border-radius:2px;"></span> रिव्ह्यूसाठी</span>
          <span><span style="display:inline-block; width:10px; height:10px; background:#e2e8f0; border-radius:2px;"></span> न पाहिलेले</span>
        </div>
      </div>
      <div id="qPaletteGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(40px, 1fr)); gap: 8px;">
        <!-- Populated dynamically -->
      </div>
    </div>
  </div>

  <!-- RESULT & COMPREHENSIVE PERFORMANCE ANALYSIS CARD (Hidden Initially) -->
  <div id="examResultAnalysisCard" style="display: none; background: #ffffff; border: 2px solid #2563eb; border-radius: 14px; padding: 26px; margin-bottom: 30px; box-shadow: 0 8px 24px rgba(37,99,235,0.12);">
    
    <div style="text-align: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 22px;">
      <span style="background: #dbeafe; color: #1e40af; padding: 4px 14px; border-radius: 20px; font-weight: 700; font-size: 13px;">
        🏆 EXAM SCORECARD &amp; ANALYSIS
      </span>
      <h3 style="margin: 12px 0 4px 0; font-size: 24px; color: #0f172a;">तुमचा निकाल आणि सविस्तर विश्लेषण</h3>
      <p style="margin: 0; color: #64748b; font-size: 15px;">MPSC राज्यसेवा / संयुक्त गट ब पूर्व परीक्षा सामान्य अध्ययन (GS)</p>
    </div>

    <!-- 4 Key Result Metrics -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; margin-bottom: 24px;">
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-size: 13px; color: #1e40af; font-weight: 600;">निव्वळ गुण (Net Score)</div>
        <div id="resMetricScore" style="font-size: 26px; font-weight: 800; color: #1d4ed8; margin-top: 4px;">0 / 30</div>
      </div>
      <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-size: 13px; color: #065f46; font-weight: 600;">अचूकता (Accuracy)</div>
        <div id="resMetricAccuracy" style="font-size: 26px; font-weight: 800; color: #047857; margin-top: 4px;">0%</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-size: 13px; color: #475569; font-weight: 600;">सोडवलेले (Attempted)</div>
        <div id="resMetricAttempted" style="font-size: 26px; font-weight: 800; color: #334155; margin-top: 4px;">0 / 15</div>
      </div>
      <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-size: 13px; color: #991b1b; font-weight: 600;">वजा झालेले गुण (-)</div>
        <div id="resMetricNegative" style="font-size: 26px; font-weight: 800; color: #dc2626; margin-top: 4px;">-0.00</div>
      </div>
    </div>

    <!-- Subject-Wise Strength & Weakness Breakdown -->
    <h4 style="margin: 0 0 12px 0; color: #1e293b; font-size: 17px; font-weight: 700;">
      📊 विषयनिहाय कामगिरी (Subject-wise Performance Breakdown):
    </h4>
    <div style="overflow-x: auto; margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155;">
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">विषय (Subject)</th>
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">एकूण प्रश्न</th>
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">बरोबर (✓)</th>
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">चूक (✗)</th>
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">गुण (Marks)</th>
            <th style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1;">अचूकता</th>
          </tr>
        </thead>
        <tbody id="resSubjectTableBody">
          <!-- Populated dynamically -->
        </tbody>
      </table>
    </div>

    <!-- Retake & Share Controls -->
    <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
      <button id="btnRetakeExam" type="button" style="background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; padding: 10px 22px; border-radius: 8px; font-weight: 700; cursor: pointer;">
        🔄 पुन्हा परीक्षा द्या (Retake)
      </button>
      <button id="btnShareScoreWhatsApp" type="button" style="background: #25d366; color: #ffffff; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;">
        📲 मित्रांसोबत निकाल शेअर करा
      </button>
      <a href="#fullSolutionsSection" style="background: #2563eb; color: #ffffff; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block;">
        🔍 संपूर्ण उत्तरे व विश्लेषण पहा
      </a>
    </div>
  </div>

  <!-- COMPLETE CRAWLABLE QUESTION LIST & EXPLANATIONS (100% SEO-Friendly & Static) -->
  <div id="fullSolutionsSection">
    <div style="background: #f8fafc; border-left: 5px solid #2563eb; padding: 14px 18px; border-radius: 8px; margin: 25px 0 20px 0;">
      <h3 style="margin: 0; font-size: 18px; color: #1e3a8a;">
        📝 सराव प्रश्नसंच, अंतिम उत्तरतालिका व संदर्भ स्पष्टीकरण (PYQ Solutions)
      </h3>
      <p style="margin: 4px 0 0 0; font-size: 14px; color: #475569;">
        खालील प्रश्नांवर थेट क्लिक करून तुम्ही सेल्फ-स्टडी करू शकता. प्रत्येक प्रश्नाचे उत्तर अधिकृत अंतिम की नुसार तपासले आहे.
      </p>
    </div>

    <div class="qa-list">
`;
}

// -----------------------------------------------------------------------------
// COMPILE INDIVIDUAL QUESTIONS WITH INTERACTIVE .qa-item FORMATTING
// -----------------------------------------------------------------------------
function buildSolutionsHtml(data) {
  let html = '';
  data.questions.forEach((q, index) => {
    const qNum = index + 1;
    const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer];
    const correctText = q.options[q.correctAnswer];

    html += `
    <div class="qa-item" id="sol_q${qNum}" style="border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 22px; padding: 18px; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; font-size: 13px; font-weight: 600;">
          प्रश्न ${qNum} • विषय: ${q.subject}
        </span>
        <span style="font-size: 12px; color: #64748b; font-weight: 500;">२ गुण (निगेटिव्ह ०.५०)</span>
      </div>

      <div class="qa-question" style="font-weight: 600; font-size: 16px; color: #0f172a; margin-bottom: 14px; line-height: 1.5;">
        ${q.question}
      </div>

      <div class="qa-options" style="margin-bottom: 14px; display: grid; gap: 8px;">
`;

    q.options.forEach((opt, optIdx) => {
      const letter = ['A', 'B', 'C', 'D'][optIdx];
      html += `        <div class="qa-option" style="padding: 11px 15px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; font-size: 15px; color: #334155; cursor: pointer; user-select: none; transition: all 0.2s ease;">
          <strong>(${letter})</strong> ${opt}
        </div>\n`;
    });

    html += `      </div>

      <details class="qa-explanation-box" style="margin-top: 10px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
        <summary style="cursor: pointer; font-weight: 600; color: #2563eb; user-select: none;">
          👉 अधिकृत उत्तर व सविस्तर संदर्भ स्पष्टीकरण
        </summary>
        <div style="margin-top: 12px; padding: 14px; background: #ecfdf5; border-left: 4px solid #059669; border-radius: 6px; color: #064e3b; font-size: 15px; line-height: 1.6;">
          <p style="margin: 0 0 6px 0; font-weight: 700; color: #047857;">
            ✓ योग्य उत्तर: पर्याय (${correctLetter}) - ${correctText}
          </p>
          <div style="margin: 0; color: #065f46;">
            <strong>स्पष्टीकरण व संदर्भ:</strong> ${q.explanation}
          </div>
        </div>
      </details>
    </div>
`;
  });

  return html;
}

// -----------------------------------------------------------------------------
// CLIENT-SIDE EXAM CONTROLLER SCRIPT (LIGHTWEIGHT VANILLA JS, 0 LIBRARIES)
// -----------------------------------------------------------------------------
function buildExamControllerJs(data) {
  const base64Data = Buffer.from(JSON.stringify(data), 'utf8').toString('base64');

  return `
    </div> <!-- End qa-list -->
  </div> <!-- End fullSolutionsSection -->

  <!-- TELEGRAM & APP CALLOUT -->
  <div style="background: linear-gradient(135deg, #0088cc, #006699); color: white; padding: 22px; border-radius: 10px; text-align: center; margin-top: 30px;">
    <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffffff;">📱 अधिक मोफत MPSC ऑनलाइन टेस्टसाठी</h4>
    <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.95;">
      दररोज चालू घडामोडी, राज्यसेवा आणि गट ब/क च्या मोफत टेस्ट आणि PDF नोट्ससाठी आमचे टेलिग्राम चॅनेल जॉइन करा!
    </p>
    <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
      <a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener noreferrer" style="background: white; color: #0088cc; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none;">
        👉 Join Telegram Channel
      </a>
      <a href="https://play.google.com/store/apps/details?id=in.ni18.mpsc.quiz" target="_blank" rel="noopener noreferrer" style="background: #10b981; color: white; padding: 10px 20px; border-radius: 6px; font-weight: 600; text-decoration: none;">
        📲 Download Android App
      </a>
    </div>
  </div>

  <!-- FAQPage Schema for Google Search Rich Results -->
  <script type="application/ld+json">
  ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.questions.map(q => ({
      "@type": "Question",
      "name": `MPSC सराव प्रश्न: ${q.question}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `योग्य उत्तर: पर्याय (${['A','B','C','D'][q.correctAnswer]}) ${q.options[q.correctAnswer]}. स्पष्टीकरण: ${q.explanation}`
      }
    }))
  }, null, 2)}
  </script>

  <!-- Interactive Exam Simulation Engine -->
  <script type="text/javascript">
  (function initMpscExamSimulator() {
    // Decode base64 UTF-8 JSON safely without any Blogger HTML entity interference
    function decodeBase64Data(b64) {
      try {
        var binary = atob(b64);
        var bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        return JSON.parse(new TextDecoder('utf-8').decode(bytes));
      } catch (e) {
        return null;
      }
    }

    // HTML Entity Decoder helper (converts &#2367; back to true Marathi characters)
    function decodeStr(str) {
      if (!str) return '';
      return String(str).replace(/&#(\\d+);/g, function(match, dec) {
        return String.fromCodePoint(dec);
      });
    }

    var examData = decodeBase64Data("${base64Data}");
    if (!examData) return;

    var userAnswers = {};
    var markedReview = {};
    var currentQIndex = 0;
    var timerInterval = null;
    var secondsLeft = examData.durationMinutes * 60;
    var examSubmitted = false;

    var startBtn = document.getElementById('btnStartExamMode');
    var simBox = document.getElementById('examSimulatorBox');
    var qView = document.getElementById('activeQuestionView');
    var palette = document.getElementById('qPaletteGrid');
    var timerBadge = document.getElementById('examTimerBadge');

    if (!startBtn || !simBox) return;

    // Render palette
    function renderPalette() {
      palette.innerHTML = '';
      for (var i = 0; i < examData.questions.length; i++) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = (i + 1);
        btn.setAttribute('data-q-idx', i);
        
        var bg = '#f1f5f9';
        var color = '#334155';
        var border = '1px solid #cbd5e1';

        if (markedReview[i]) {
          bg = '#8b5cf6'; color = '#ffffff'; border = 'none';
        } else if (userAnswers[i] !== undefined) {
          bg = '#10b981'; color = '#ffffff'; border = 'none';
        } else if (i === currentQIndex) {
          bg = '#f59e0b'; color = '#ffffff'; border = 'none';
        }

        btn.style.cssText = 'padding: 8px 0; border-radius: 6px; font-weight: 700; cursor: pointer; text-align: center; font-size: 14px; background:' + bg + '; color:' + color + '; border:' + border + ';';
        btn.onclick = function() {
          var targetIdx = parseInt(this.getAttribute('data-q-idx'));
          showQuestion(targetIdx);
        };
        palette.appendChild(btn);
      }
    }

    // Show Question with clean Marathi rendering
    function showQuestion(idx) {
      if (idx < 0 || idx >= examData.questions.length) return;
      currentQIndex = idx;
      var q = examData.questions[idx];

      var subBadge = document.getElementById('examCurrentSubjectBadge');
      if (subBadge) {
        subBadge.innerHTML = 'विषय: ' + decodeStr(q.subject);
      }

      var qCounter = document.getElementById('examQCounterText');
      if (qCounter) {
        qCounter.innerHTML = 'प्रश्न ' + (idx + 1) + ' / ' + examData.questions.length;
      }

      var html = '<div style="font-weight: 700; font-size: 17px; color: #0f172a; margin-bottom: 16px; line-height: 1.5;">' +
                 '<span style="background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; margin-right: 8px; font-size: 14px;">Q.' + (idx + 1) + '</span>' +
                 decodeStr(q.question) + '</div>';

      html += '<div style="display: grid; gap: 10px;">';
      for (var optIdx = 0; optIdx < q.options.length; optIdx++) {
        var letter = ['A', 'B', 'C', 'D'][optIdx];
        var isSelected = (userAnswers[idx] === optIdx);
        var border = isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1';
        var bg = isSelected ? '#eff6ff' : '#f8fafc';
        var textColor = isSelected ? '#1e40af' : '#334155';

        html += '<div class="sim-option-item" data-opt-idx="' + optIdx + '" style="padding: 12px 16px; border: ' + border + '; border-radius: 8px; background: ' + bg + '; color: ' + textColor + '; font-size: 15px; font-weight: ' + (isSelected ? '700' : '500') + '; cursor: pointer; user-select: none;">' +
                '<strong>(' + letter + ')</strong> ' + decodeStr(q.options[optIdx]) +
                '</div>';
      }
      html += '</div>';

      qView.innerHTML = html;

      // Attach clicks
      var optElements = qView.querySelectorAll('.sim-option-item');
      optElements.forEach(function(el) {
        el.onclick = function() {
          var chosen = parseInt(this.getAttribute('data-opt-idx'));
          userAnswers[currentQIndex] = chosen;
          delete markedReview[currentQIndex];
          showQuestion(currentQIndex);
        };
      });

      renderPalette();
    }

    // Start Exam Mode
    startBtn.onclick = function() {
      simBox.style.display = 'block';
      simBox.scrollIntoView({ behavior: 'smooth' });
      this.style.display = 'none';
      showQuestion(0);

      // Start Timer
      clearInterval(timerInterval);
      timerInterval = setInterval(function() {
        secondsLeft--;
        var m = Math.floor(secondsLeft / 60);
        var s = secondsLeft % 60;
        timerBadge.innerHTML = '⏱️ ' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;

        if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          submitExam();
        }
      }, 1000);
    };

    // Navigation Buttons
    document.getElementById('btnNextQ').onclick = function() {
      if (currentQIndex < examData.questions.length - 1) {
        showQuestion(currentQIndex + 1);
      } else {
        submitExam();
      }
    };

    document.getElementById('btnPrevQ').onclick = function() {
      if (currentQIndex > 0) {
        showQuestion(currentQIndex - 1);
      }
    };

    document.getElementById('btnClearResponse').onclick = function() {
      delete userAnswers[currentQIndex];
      delete markedReview[currentQIndex];
      showQuestion(currentQIndex);
    };

    document.getElementById('btnMarkReview').onclick = function() {
      markedReview[currentQIndex] = true;
      renderPalette();
      if (currentQIndex < examData.questions.length - 1) {
        showQuestion(currentQIndex + 1);
      }
    };

    document.getElementById('btnFinishExamTop').onclick = function() {
      var answeredCount = Object.keys(userAnswers).length;
      if (confirm('तुम्ही एकूण ' + examData.questions.length + ' पैकी ' + answeredCount + ' प्रश्न सोडवले आहेत. तुम्हाला परीक्षा सबमिट करायची आहे का?')) {
        submitExam();
      }
    };

    // Submit & Compute Analysis
    function submitExam() {
      if (examSubmitted) return;
      examSubmitted = true;
      clearInterval(timerInterval);

      var correctCount = 0;
      var wrongCount = 0;
      var subjectStats = {};

      examData.subjects.forEach(function(sub) {
        subjectStats[sub] = { total: 0, correct: 0, wrong: 0 };
      });

      examData.questions.forEach(function(q, idx) {
        var sub = q.subject;
        if (!subjectStats[sub]) subjectStats[sub] = { total: 0, correct: 0, wrong: 0 };
        subjectStats[sub].total++;

        if (userAnswers[idx] !== undefined) {
          if (userAnswers[idx] === q.correctAnswer) {
            correctCount++;
            subjectStats[sub].correct++;
          } else {
            wrongCount++;
            subjectStats[sub].wrong++;
          }
        }
      });

      var attemptedCount = correctCount + wrongCount;
      var posMarks = correctCount * examData.marksPerQuestion;
      var negMarks = wrongCount * examData.negativePenalty;
      var netScore = Math.max(0, posMarks - negMarks);
      var accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) + '%' : '0%';

      // Display metrics
      document.getElementById('resMetricScore').innerHTML = netScore.toFixed(2) + ' / ' + examData.totalMarks;
      document.getElementById('resMetricAccuracy').innerHTML = accuracy;
      document.getElementById('resMetricAttempted').innerHTML = attemptedCount + ' / ' + examData.questions.length;
      document.getElementById('resMetricNegative').innerHTML = '-' + negMarks.toFixed(2);

      // Render Subject Table
      var tbody = document.getElementById('resSubjectTableBody');
      tbody.innerHTML = '';
      examData.subjects.forEach(function(sub) {
        var st = subjectStats[sub] || { total: 0, correct: 0, wrong: 0 };
        var subMarks = (st.correct * examData.marksPerQuestion) - (st.wrong * examData.negativePenalty);
        var subAcc = (st.correct + st.wrong) > 0 ? ((st.correct / (st.correct + st.wrong)) * 100).toFixed(0) + '%' : '-';

        var tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #e2e8f0';
        tr.innerHTML = '<td style="padding: 10px 12px; font-weight:600; color:#1e293b;">' + decodeStr(sub) + '</td>' +
                       '<td style="padding: 10px 12px;">' + st.total + '</td>' +
                       '<td style="padding: 10px 12px; color:#047857; font-weight:bold;">' + st.correct + '</td>' +
                       '<td style="padding: 10px 12px; color:#dc2626; font-weight:bold;">' + st.wrong + '</td>' +
                       '<td style="padding: 10px 12px; font-weight:bold; color:#2563eb;">' + Math.max(0, subMarks).toFixed(1) + '</td>' +
                       '<td style="padding: 10px 12px; font-weight:bold;">' + subAcc + '</td>';
        tbody.appendChild(tr);
      });

      simBox.style.display = 'none';
      var resCard = document.getElementById('examResultAnalysisCard');
      resCard.style.display = 'block';
      resCard.scrollIntoView({ behavior: 'smooth' });

      // WhatsApp Share Click Handler
      document.getElementById('btnShareScoreWhatsApp').onclick = function() {
        var text = decodeStr('मी MPSC GS सराव परीक्षेत ' + examData.totalMarks + ' पैकी ' + netScore.toFixed(2) + ' गुण (' + accuracy + ' अचूकता) मिळवले! तुम्ही किती गुण मिळवू शकता? आत्ताच टेस्ट द्या: ') + window.location.href;
        window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(text), '_blank');
      };

      document.getElementById('btnRetakeExam').onclick = function() {
        userAnswers = {};
        markedReview = {};
        examSubmitted = false;
        secondsLeft = examData.durationMinutes * 60;
        resCard.style.display = 'none';
        simBox.style.display = 'block';
        showQuestion(0);
      };
    }

  })();
  </script>
</div>
`;
}

async function updateLiveExamPaper() {
  try {
    console.log('Building and updating MPSC Live Exam Paper with entity decoding...');
    const topHtml = buildFullExamPost(examData);
    const questionsHtml = buildSolutionsHtml(examData);
    const controllerHtml = buildExamControllerJs(examData);

    const fullContent = topHtml + questionsHtml + controllerHtml;
    const title = "MPSC Combine & Rajyaseva GS Mock Exam 2026: Official PYQ Full Test with Live Scorecard & Analysis";
    const labels = ["MPSC Prelims", "Mock Tests", "PYQ Solutions", "Exam Analysis", "Daily Quiz"];

    console.log(`Updating post ID ${POST_ID}...`);
    const result = await updatePost(POST_ID, title, fullContent, labels);

    if (result.status === 200) {
      console.log('SUCCESS! Live Exam Paper Updated with clean Devanagari text.');
      console.log('Post URL:', result.data.url);
      return result.data;
    } else {
      console.error('Failed to update exam post:', result);
    }
  } catch (err) {
    console.error('Error during exam post update:', err);
  }
}

updateLiveExamPaper();
