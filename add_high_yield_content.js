const { createPost, createPage } = require('./blogger_tool.js');

// -----------------------------------------------------------------------------
// POST 1: MPSC Standard Reference Booklist 2026-2027
// -----------------------------------------------------------------------------
const booklistContent = `
<div class="callout callout-info" style="margin-top: 0;">
  <div>
    <strong>🎯 MPSC Aspirants Comprehensive Guide:</strong><br/>
    MPSC राज्यसेवा (Civil Services) तसेच संयुक्त गट 'ब' आणि गट 'क' (Combine Group B & C) परीक्षांच्या तयारीसाठी महाराष्ट्रातील यशस्वी अधिकारी व तज्ज्ञ मार्गदर्शकांनी सुचवलेली प्रामाणिक व परिपूर्ण <strong>विषयनिहाय संदर्भ पुस्तकांची यादी (Standard Booklist)</strong> येथे दिली आहे.
  </div>
</div>

<h2>१. आधुनिक भारताचा व महाराष्ट्राचा इतिहास (History)</h2>
<p>इतिहासात प्रामुख्याने महाराष्ट्रातील समाजसुधारक, १८५७ चा उठाव, राष्ट्रीय चळवळ आणि स्वातंत्र्योत्तर महाराष्ट्र यांवर सर्वाधिक प्रश्न विचारले जातात.</p>
<div style="overflow-x: auto; margin-bottom: 1.5rem;">
  <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0; font-size: 15px;">
    <thead>
      <tr style="background: #f1f5f9; color: #1e293b; text-align: left;">
        <th style="padding: 12px; border: 1px solid #cbd5e1;">घटक / Topic</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">प्रमाणित संदर्भ पुस्तक (Recommended Book)</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">लेखक / प्रकाशन (Author/Publisher)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>महाराष्ट्राचा इतिहास व समाजसुधारक</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">महाराष्ट्रातील समाजसुधारक / आधुनिक महाराष्ट्राचा इतिहास</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">समाधान महाजन (Deepstambh) / डॉ. जयसिंगराव पवार</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>आधुनिक भारताचा इतिहास</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">आधुनिक भारताचा इतिहास (मराठी अनुवाद)</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">बी. एल. ग्रोव्हर (B.L. Grover)</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>मूलभूत पाया (Basic Foundation)</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">महाराष्ट्र राज्य पाठ्यपुस्तक मंडळ (स्टेट बोर्ड)</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">इयत्ता ८ वी, ११ वी (जुने पुस्तक अत्यंत महत्त्वाचे)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>२. महाराष्ट्र व भारताचा भूगोल (Geography)</h2>
<p>प्राकृतिक भूगोल, नद्यांची खोरी, हवामान, वने, खनिज संपत्ती आणि २०२१/२०११ ची जनगणना यावर जास्त भर असतो.</p>
<div style="overflow-x: auto; margin-bottom: 1.5rem;">
  <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0; font-size: 15px;">
    <thead>
      <tr style="background: #f1f5f9; color: #1e293b; text-align: left;">
        <th style="padding: 12px; border: 1px solid #cbd5e1;">घटक / Topic</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">प्रमाणित संदर्भ पुस्तक (Recommended Book)</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">लेखक / प्रकाशन</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>महाराष्ट्राचा संपूर्ण भूगोल</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">महाराष्ट्राचा भूगोल (नकाशांसह सविस्तर)</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">प्रा. ए. बी. सवदी (निराली प्रकाशन) / दीपस्तंभ</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>भारताचा भूगोल</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">भारत व जगाचा भूगोल</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">प्रा. ए. बी. सवदी / माजिद हुसेन</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>नकाशे (Atlas)</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">ऑक्सफर्ड स्कूल ॲटलास (मराठी/इंग्रजी)</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">Oxford University Press</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>३. भारतीय राज्यघटना व पंचायत राज (Polity & Governance)</h2>
<p>कमी वेळेत सर्वाधिक अचूक मार्क्स मिळवून देणारा विषय म्हणजे राज्यव्यवस्था.</p>
<div style="overflow-x: auto; margin-bottom: 1.5rem;">
  <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0; font-size: 15px;">
    <thead>
      <tr style="background: #f1f5f9; color: #1e293b; text-align: left;">
        <th style="padding: 12px; border: 1px solid #cbd5e1;">घटक / Topic</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">प्रमाणित संदर्भ पुस्तक</th>
        <th style="padding: 12px; border: 1px solid #cbd5e1;">लेखक / प्रकाशन</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>भारतीय राज्यघटना (Polity Bible)</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">भारतीय राज्यव्यवस्था (मराठी अनुवाद)</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">एम. लक्ष्मीकांत (M. Laxmikanth - K. Sagar)</td>
      </tr>
      <tr style="background: #f8fafc;">
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>सुलभ राज्यशास्त्र व घटना</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">भारतीय राज्यघटना आणि घटनात्मक प्रक्रिया</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">रंजन कोळंबे (भागीरथी प्रकाशन)</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;"><strong>पंचायत राज (Panchayat Raj)</strong></td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">महाराष्ट्रातील पंचायत राज</td>
        <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">किशोर लवटे / दीपस्तंभ स्पर्धा परीक्षा केंद्र</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>४. भारतीय अर्थव्यवस्था (Indian Economy)</h2>
<p>दारिद्र्य, बेरोजगारी, बँकिंग, चलनवाढ, सरकारी योजना, केंद्रीय अर्थसंकल्प आणि महाराष्ट्राचा आर्थिक पाहणी अहवाल यावर विशेष लक्ष केंद्रित करा.</p>
<ul>
  <li><strong>भारतीय अर्थव्यवस्था (भाग १ व २):</strong> किरण देसले (दीपस्तंभ प्रकाशन) - <em>सर्वाधिक परिपूर्ण आणि संकल्पना स्पष्ट करणारे पुस्तक.</em></li>
  <li><strong>भारतीय अर्थव्यवस्था:</strong> रंजन कोळंबे (भागीरथी प्रकाशन) - <em>रिव्हिजनसाठी सुटसुटीत.</em></li>
  <li><strong>महाराष्ट्राची आर्थिक पाहणी (Economic Survey of Maharashtra):</strong> चालू वर्षाचा अहवाल व सांख्यिकी.</li>
</ul>

<h2>५. सामान्य विज्ञान (General Science)</h2>
<p>भौतिकशास्त्र (Physics), रसायनशास्त्र (Chemistry), जीवशास्त्र (Biology) आणि आरोग्यशास्त्र (Hygiene & Diseases).</p>
<ul>
  <li><strong>सामान्य विज्ञान:</strong> डॉ. सचिन भस्के (Sachin Bhaske) - इन्फिनिटी स्पर्धा अकॅडमी.</li>
  <li><strong>स्टेट बोर्ड पाठ्यपुस्तके:</strong> इयत्ता ५ वी ते १० वी (अत्यंत अनिवार्य).</li>
</ul>

<h2>६. चालू घडामोडी (Current Affairs)</h2>
<ul>
  <li><strong>मासिक:</strong> पृथ्वी परिक्रमा (Prithvi Parikrama) किंवा अभिनव चालू घडामोडी (देवा जाधवर).</li>
  <li><strong>दैनिक वर्तमानपत्र:</strong> लोकसत्ता (Loksatta) / महाराष्ट्र टाइम्स (विशेषतः संपादकीय व शासन निर्णय).</li>
  <li><strong>ऑनलाइन सराव:</strong> दररोज आमच्या <strong><a href="/search/label/Daily%20Quiz">Daily Quiz</a></strong> वरून १० प्रश्नांचा सराव करा.</li>
</ul>

<h2>७. अंकगणित व बुद्धिमत्ता चाचणी (CSAT / Aptitude & Reasoning)</h2>
<ul>
  <li><strong>अंकगणित व बुद्धिमत्ता:</strong> सचिन ढवळे (Sachin Dhawale - पॅटर्ननुसार ट्रिक्स).</li>
  <li><strong>स्पर्धा परीक्षा बुद्धिमत्ता चाचणी:</strong> ज्ञानप्रबोधिनी / अनिल अंकलगी.</li>
</ul>

<div style="background: linear-gradient(135deg, #0088cc, #006699); color: white; padding: 22px; border-radius: 10px; text-align: center; margin-top: 30px;">
  <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffffff;">📱 MPSC मोफत टेस्ट सिरीज व नोट्स</h4>
  <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.95;">
    सर्व विषयांच्या मागील १० वर्षांच्या प्रश्नपत्रिका (PYQ) आणि उत्तरांचे विश्लेषण मोफत मिळवण्यासाठी आजच आमचे टेलिग्राम चॅनेल जॉइन करा!
  </p>
  <a href="https://t.me/MpscQuizPrep" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: white; color: #0088cc; padding: 10px 24px; border-radius: 6px; font-weight: 700; text-decoration: none;">
    👉 जॉइन करा @MpscQuizPrep
  </a>
</div>
`;

// -----------------------------------------------------------------------------
// POST 2: महाराष्ट्रातील समाजसुधारक - Top 12 High-Yield PYQs
// -----------------------------------------------------------------------------
const socialReformersQuizData = {
  date: "2026-11-20",
  topic: "महाराष्ट्रातील समाजसुधारक (Social Reformers of Maharashtra)",
  totalQuestions: 8,
  quiz: [
    {
      question: "महात्मा जोतीराव फुले यांनी २४ सप्टेंबर १८७३ रोजी कोणत्या संस्थेची स्थापना केली आणि तिचा मुख्य उद्देश काय होता?",
      options: [
        "प्रार्थना समाज - धार्मिक सुधारणा",
        "सत्यशोधक समाज - शूद्र व अतिशूद्रांना ब्राह्मणी वर्चस्वापासून मुक्त करणे",
        "आर्य समाज - वेदांकडे परत चला",
        "मानवधर्म सभा - एकेश्वरवादाचा प्रसार"
      ],
      correctAnswer: 1,
      explanation: "महात्मा जोतीराव फुले यांनी २४ सप्टेंबर १८७३ रोजी पुण्यात 'सत्यशोधक समाज' स्थापन केला. समाजाचे ब्रीदवाक्य 'सर्वसाक्षी जगत्पती । त्याला नकोच मध्यस्थी ॥' हे होते. पुरोहितांच्या मध्यस्थीशिवाय लग्न, मुंज व विधी पार पाडणे, शूद्र-अतिशूद्रांना शिक्षणाचा अधिकार मिळवून देणे हा या संस्थेचा प्रमुख उद्देश होता."
    },
    {
      question: "छत्रपती राजर्षी शाहू महाराजांनी कोल्हापूर संस्थानात प्राथमिक शिक्षण मोफत व सक्तीचे करणारा ऐतिहासिक जाहीरनामा कोणत्या वर्षी काढला?",
      options: [
        "२६ जुलै १९०२",
        "२५ जुलै १९१७",
        "११ जानेवारी १९११",
        "१ मे १९२०"
      ],
      correctAnswer: 1,
      explanation: "राजर्षी शाहू महाराजांनी २५ जुलै १९१७ रोजी प्राथमिक शिक्षण सक्तीचे व मोफत करणारा ऐतिहासिक कायदा लागू केला. तसेच पालकांनी मुलांना शाळेत न पाठवल्यास दरमहा १ रुपया दंडाची तरतूद केली होती. (२६ जुलै १९०२ रोजी शाहू महाराजांनी संस्थानात ५०% मागासवर्गीय आरक्षणाचा जाहीरनामा काढला होता)."
    },
    {
      question: "भारतरत्न डॉ. बाबासाहेब आंबेडकरांनी अस्पृश्यांना सार्वजनिक पाणवठ्यावर पिण्याच्या पाण्याचा अधिकार मिळवून देण्यासाठी 'महाडचा सत्याग्रह' (चवदार तळे) कधी केला?",
      options: [
        "२० मार्च १९२७",
        "२५ डिसेंबर १९२७",
        "१४ ऑक्टोबर १९५६",
        "२ मार्च १९३०"
      ],
      correctAnswer: 0,
      explanation: "२० मार्च १९२७ रोजी डॉ. बाबासाहेब आंबेडकरांच्या नेतृत्वाखाली महाड येथील चवदार तळ्याचा ऐतिहासिक सत्याग्रह झाला. म्हणूनच २० मार्च हा दिवस भारतात 'सामाजिक सक्षमीकरण दिन' (Social Empowerment Day) म्हणून साजरा केला जातो. (२५ डिसेंबर १९२७ रोजी महाड येथेच मनुस्मृती दहन करण्यात आले)."
    },
    {
      question: "महर्षी धोंडो केशव कर्वे यांनी १९१६ मध्ये पुण्यात स्थापन केलेल्या भारतातील पहिल्या महिला विद्यापीठाचे (SNDT) उद्घाटन कोणाच्या हस्ते झाले होते?",
      options: [
        "गोपाळ कृष्ण गोखले",
        "सर रामकृष्ण भांडारकर",
        "न्यायमूर्ती महादेव गोविंद रानडे",
        "लॉर्ड वेलिंग्टन"
      ],
      correctAnswer: 1,
      explanation: "महर्षी धोंडो केशव कर्वे यांनी जपानच्या महिला विद्यापीठापासून प्रेरणा घेऊन १९१६ मध्ये हिंगणे (पुणे) येथे महिला विद्यापीठाची स्थापना केली. सर रामकृष्ण भांडारकर हे या विद्यापीठाचे पहिले कुलपती (Chancellor) होते आणि त्यांच्या हस्ते उद्घाटन झाले. सर विठ्ठलदास ठाकरसी यांनी आपल्या आईच्या स्मरणार्थ १५ लाख रुपयांची देणगी दिल्यानंतर यास 'श्रीमती नाथीबाई दामोदर ठाकरसी (SNDT) महिला विद्यापीठ' नाव देण्यात आले."
    },
    {
      question: "गोपाळ गणेश आगरकर यांनी लोकमान्य टिळकांपासून वैचारिक मतभेदांनंतर 'केसरी' वृत्तपत्राच्या संपादकपदाचा राजीनामा देऊन १८८८ मध्ये कोणते स्वतंत्र वृत्तपत्र सुरू केले?",
      options: [
        "प्रभाकर",
        "सुधारक",
        "ज्ञानप्रकाश",
        "दर्पण"
      ],
      correctAnswer: 1,
      explanation: "गोपाळ गणेश आगरकर यांनी 'आधी राजकीय स्वातंत्र्य की आधी सामाजिक सुधारणा?' या वादातून केसरीचे संपादकपद सोडले आणि १८८८ मध्ये 'सुधारक' हे वृत्तपत्र सुरू केले. 'इष्ट असेल ते बोलणार आणि साध्य असेल ते करणार' हे सुधारकचे ब्रीदवाक्य होते. सुधारकच्या इंग्रजी आवृत्तीचे संपादन नामदार गोपाळ कृष्ण गोखले करत असत."
    },
    {
      question: "पुण्यातील बुधवार पेठेतील भिडे वाड्यात १ जानेवारी १८४८ रोजी मुलींची भारतातील पहिली स्वदेशी शाळा कोणी सुरू केली?",
      options: [
        "महात्मा फुले व क्रांतीज्योती सावित्रीबाई फुले",
        "पंडिता रमाबाई व आनंदीबाई जोशी",
        "महर्षी कर्वे व रमाबाई रानडे",
        "ताराबाई शिंदे व सावित्रीबाई फुले"
      ],
      correctAnswer: 0,
      explanation: "१ जानेवारी १८४८ रोजी महात्मा जोतीराव फुले आणि त्यांच्या अर्धांगिनी क्रांतीज्योती सावित्रीबाई फुले यांनी तात्याराव भिडे यांच्या बुधवार पेठेतील वाड्यात मुलींची भारतातील पहिली शाळा सुरू केली. सावित्रीबाई फुले या भारताच्या पहिल्या मुख्याध्यापिका व आद्य शिक्षिका बनल्या."
    },
    {
      question: "अस्पृश्योद्धारासाठी १८ ऑक्टोबर १९०६ रोजी मुंबईत 'डिप्रेस्ड क्लासेस मिशन सोसायटी ऑफ इंडिया' ची स्थापना कोणी केली?",
      options: [
        "कर्मवीर भाऊराव पाटील",
        "महर्षी विठ्ठल रामजी शिंदे",
        "गोपाळबाबा वलंगकर",
        "किसान फागुजी बनसोडे"
      ],
      correctAnswer: 1,
      explanation: "महर्षी विठ्ठल रामजी शिंदे यांनी १८ ऑक्टोबर १९०६ रोजी मुंबईत 'डिप्रेस्ड क्लासेस मिशन'ची स्थापना केली. या संस्थेमार्फत अस्पृश्यांसाठी मोफत शाळा, वसतिगृहे, उद्योगशाळा व दवाखाने सुरू करण्यात आले. सर न्यायमूर्ती एन. जी. चंदावरकर हे या संस्थेचे पहिले अध्यक्ष होते."
    },
    {
      question: "स्वातंत्र्यलढ्यात १९४२ च्या चले जाव आंदोलनादरम्यान महाराष्ट्रात सातारा जिल्ह्यात समांतर 'प्रतिसरकार' (पत्री सरकार) कोणी स्थापन केले होते?",
      options: [
        "सेनापती बापट",
        "क्रांतीसिंह नाना पाटील",
        "अच्युतराव पटवर्धन",
        "एस. एम. जोशी"
      ],
      correctAnswer: 1,
      explanation: "१९४२ च्या आंदोलनात क्रांतीसिंह नाना पाटील यांनी किसन वीर, वसंतदादा पाटील, नागनाथ नायकवडी यांच्या सहकार्याने सातारा जिल्ह्यात ब्रिटिश सत्ता उलथवून 'प्रतिसरकार' स्थापन केले. त्यांनी 'तुफान दल' या सशस्त्र दलाची स्थापना केली होती आणि जनअदालत भरवून अन्यायी सावकारांवर कारवाया केल्या."
    }
  ]
};

function generateQuizHtml(quizData) {
  const { date, topic, quiz, totalQuestions } = quizData;
  let html = `
<div class="quiz-container">
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border-left: 5px solid #2563eb; padding: 18px 22px; border-radius: 8px; margin-bottom: 25px;">
    <h3 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 20px;">🚩 ${topic}</h3>
    <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6;">
      MPSC राज्यसेवा पूर्व व मुख्य, संयुक्त गट ब व क परीक्षांमध्ये विचारले जाणारे सर्वाधिक महत्त्वाचे प्रश्न, उत्तरे आणि सविस्तर संदर्भ स्पष्टीकरण. पर्यायावर क्लिक करून लगेच योग्य उत्तर तपासा.
    </p>
  </div>

  <div class="quiz-summary" style="margin-bottom: 25px; padding: 12px 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-weight: 500; color: #475569; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
    <span>🎯 विषय: <strong>महाराष्ट्राचा इतिहास व समाजसुधारक</strong></span>
    <span>❓ एकूण प्रश्न: <strong>${totalQuestions}</strong></span>
    <span>⏱️ परीक्षा: <strong>MPSC राज्यसेवा / संयुक्त परीक्षा</strong></span>
  </div>

  <div class="qa-list">
`;

  quiz.forEach((q, index) => {
    const qNum = index + 1;
    const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer] || 'A';
    const correctText = q.options[q.correctAnswer] || '';

    html += `
    <div class="qa-item" id="q${qNum}" style="border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 22px; padding: 18px; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
      <div class="qa-question" style="font-weight: 600; font-size: 16px; color: #0f172a; margin-bottom: 14px; line-height: 1.5;">
        <span style="display: inline-block; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; margin-right: 6px; font-size: 14px;">प्रश्न ${qNum}</span>
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
          👉 उत्तर आणि सविस्तर स्पष्टीकरण पहा
        </summary>
        <div style="margin-top: 12px; padding: 14px; background: #ecfdf5; border-left: 4px solid #059669; border-radius: 6px; color: #064e3b; font-size: 15px; line-height: 1.6;">
          <p style="margin: 0 0 6px 0; font-weight: 700; color: #047857;">
            ✓ योग्य उत्तर: पर्याय (${correctLetter}) - ${correctText}
          </p>
          <div style="margin: 0; color: #065f46;">
            <strong>स्पष्टीकरण:</strong> ${q.explanation}
          </div>
        </div>
      </details>
    </div>
`;
  });

  html += `
  </div>

  <div style="background: linear-gradient(135deg, #0088cc, #006699); color: white; padding: 22px; border-radius: 10px; text-align: center; margin-top: 30px;">
    <h4 style="margin: 0 0 8px 0; font-size: 18px; color: #ffffff;">📱 अधिक मोफत इतिहास सराव प्रश्नोत्तरांसाठी</h4>
    <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.95;">
      दररोज चालू घडामोडी आणि सर्व विषयांच्या मोफत क्विझसाठी आमचे टेलिग्राम चॅनेल जॉइन करा आणि ॲप डाउनलोड करा!
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
</div>
`;
  return html;
}

// -----------------------------------------------------------------------------
// PAGE: Interactive Negative Marking & Score Calculator
// -----------------------------------------------------------------------------
const calculatorPageContent = `
<div class="callout callout-info" style="margin-top: 0;">
  <div>
    <strong>🎯 MPSC अचूक गुण व निगेटिव्ह मार्किंग कॅल्क्युलेटर:</strong><br/>
    MPSC राज्यसेवा (पूर्व व मुख्य) तसेच संयुक्त गट ब व क परीक्षांमध्ये १/४ (0.25) निगेटिव्ह मार्किंग असते. तुमची बरोबर आणि चुकीची उत्तरे टाकून अचूक निव्वळ गुण (Net Marks) आणि अचूकतेचे प्रमाण (Accuracy %) एका क्लिकवर काढा.
  </div>
</div>

<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin: 24px 0; max-width: 600px;">
  
  <div style="margin-bottom: 18px;">
    <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 6px; font-size: 15px;">परीक्षेचा प्रकार निवडा (Exam Pattern):</label>
    <select id="calcExamType" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 15px; outline: none; background: #f8fafc;">
      <option value="combine">संयुक्त गट ब व क (१०० प्रश्न • १०० गुण • १/४ निगेटिव्ह)</option>
      <option value="rajyaseva_gs">राज्यसेवा पूर्व GS Paper 1 (१०० प्रश्न • २०० गुण • १/४ निगेटिव्ह)</option>
      <option value="rajyaseva_csat">राज्यसेवा पूर्व CSAT (८० प्रश्न • २०० गुण • १/४ निगेटिव्ह • २.५ गुण/प्रश्न)</option>
    </select>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
    <div>
      <label style="display: block; font-weight: 600; color: #047857; margin-bottom: 6px; font-size: 15px;">✓ बरोबर उत्तरे (Correct):</label>
      <input type="number" id="calcCorrect" min="0" max="100" placeholder="उदा. 65" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 16px; outline: none; box-sizing: border-box;"/>
    </div>
    <div>
      <label style="display: block; font-weight: 600; color: #dc2626; margin-bottom: 6px; font-size: 15px;">✗ चुकीची उत्तरे (Wrong):</label>
      <input type="number" id="calcWrong" min="0" max="100" placeholder="उदा. 20" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 16px; outline: none; box-sizing: border-box;"/>
    </div>
  </div>

  <button type="button" id="btnCalculateScore" style="width: 100%; background: #2563eb; color: #ffffff; border: none; padding: 12px; border-radius: 8px; font-size: 16px; font-weight: 700; cursor: pointer; transition: background 0.2s;">
    📊 गुणांची गणना करा (Calculate Net Marks)
  </button>

  <div id="calcResultBox" style="display: none; margin-top: 24px; padding: 18px; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
    <h3 style="margin: 0 0 12px 0; color: #0f172a; font-size: 18px; text-align: center;">🎯 तुमचा गुण निकाल (Score Summary)</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 15px; margin-bottom: 14px;">
      <div>एकूण सोडवलेले प्रश्न: <strong id="resAttempted" style="color:#2563eb;">-</strong></div>
      <div>अचूकता (Accuracy): <strong id="resAccuracy" style="color:#047857;">-</strong></div>
      <div>मिळालेले धन गुण (+): <strong id="resPositive" style="color:#047857;">-</strong></div>
      <div>वजा झालेले गुण (-): <strong id="resNegative" style="color:#dc2626;">-</strong></div>
    </div>
    <div style="background: #eff6ff; border: 2px dashed #2563eb; padding: 12px; border-radius: 8px; text-align: center;">
      <span style="font-size: 16px; color: #1e3a8a;">अंतिम निव्वळ गुण (Final Net Marks):</span>
      <div id="resFinalScore" style="font-size: 28px; font-weight: 800; color: #1e40af; margin-top: 4px;">0.00</div>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btnCalculateScore');
  if (!btn) return;
  btn.addEventListener('click', function() {
    var exam = document.getElementById('calcExamType').value;
    var correct = parseInt(document.getElementById('calcCorrect').value) || 0;
    var wrong = parseInt(document.getElementById('calcWrong').value) || 0;

    var marksPerQ = 1;
    var maxMarks = 100;
    var maxQs = 100;

    if (exam === 'rajyaseva_gs') {
      marksPerQ = 2;
      maxMarks = 200;
      maxQs = 100;
    } else if (exam === 'rajyaseva_csat') {
      marksPerQ = 2.5;
      maxMarks = 200;
      maxQs = 80;
    }

    var penaltyPerWrong = marksPerQ * 0.25;
    var posMarks = correct * marksPerQ;
    var negMarks = wrong * penaltyPerWrong;
    var netMarks = posMarks - negMarks;
    if (netMarks < 0) netMarks = 0;

    var attempted = correct + wrong;
    var accuracy = attempted > 0 ? ((correct / attempted) * 100).toFixed(1) + '%' : '0%';

    document.getElementById('resAttempted').textContent = attempted + ' / ' + maxQs;
    document.getElementById('resAccuracy').textContent = accuracy;
    document.getElementById('resPositive').textContent = '+' + posMarks.toFixed(2);
    document.getElementById('resNegative').textContent = '-' + negMarks.toFixed(2);
    document.getElementById('resFinalScore').textContent = netMarks.toFixed(2) + ' / ' + maxMarks;

    document.getElementById('calcResultBox').style.display = 'block';
  });
});
</script>

<h2>MPSC निगेटिव्ह मार्किंग नियमावली (MPSC Negative Marking Rules)</h2>
<ul>
  <li><strong>१/४ (25%) निगेटिव्ह मार्किंग:</strong> प्रत्येक ४ चुकीच्या उत्तरांमागे एका बरोबर प्रश्नाचे गुण वजा केले जातात.</li>
  <li><strong>अनुत्तरित प्रश्न:</strong> ज्या प्रश्नांचे उत्तर सोडवलेले नाही, त्यांसाठी कोणतेही गुण कापले जात नाहीत (0 Marks).</li>
  <li><strong>CSAT पात्रता निकष:</strong> राज्यसेवा पूर्व परीक्षेत CSAT पेपर २ मध्ये किमान ३३% (६६ गुण) मिळवणे अनिवार्य आहे, तरच Paper 1 चे गुण मेरीटसाठी ग्राह्य धरले जातात.</li>
</ul>
`;

async function publishAll() {
  console.log('Publishing High-Yield MPSC Content...\n');

  // 1. Publish Booklist Guide
  console.log('1. Publishing MPSC Booklist Guide...');
  const post1 = await createPost(
    'MPSC Booklist 2026-2027: राज्यसेवा आणि संयुक्त (गट ब व क) परीक्षांसाठी सर्वोत्तम संदर्भ पुस्तके (Complete Guide)',
    booklistContent,
    ['MPSC Booklist', 'Study Material', 'Syllabus', 'MPSC Prelims', 'MPSC Rajyaseva', 'Group B Non-Gazetted']
  );
  console.log('Post 1 URL:', post1.data?.url);

  // 2. Publish Social Reformers Quiz
  console.log('\n2. Publishing Social Reformers PYQ Quiz...');
  const post2 = await createPost(
    'महाराष्ट्रातील समाजसुधारक (Social Reformers): MPSC परीक्षेत विचारले जाणारे महत्त्वाचे सराव प्रश्न व उत्तरे (PYQ Solutions)',
    generateQuizHtml(socialReformersQuizData),
    ['History', 'PYQ Solutions', 'MPSC Prelims', 'Practice Test', 'Maharashtra']
  );
  console.log('Post 2 URL:', post2.data?.url);

  // 3. Publish Calculator Tool Page
  console.log('\n3. Creating Negative Marking Calculator Page...');
  const pageCalc = await createPage('MPSC Negative Marking & Score Calculator', calculatorPageContent);
  console.log('Calculator Page URL:', pageCalc.data?.url);

  console.log('\n=============================================');
  console.log('ALL HIGH-YIELD CONTENT SUCCESSFULLY PUBLISHED!');
  console.log('=============================================');
}

publishAll();
