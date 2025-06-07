//Slider card
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const diseases = [
      {
        img: '../public/img/Diseases/Arachnoid_Cyst_Treated_using_a_VP_Shunt.png',
        badge: '1th - 12th Weeks',
        title: 'Arachnoid Cyst',
        description: "is a fluid-filled sac that usually forms in the brain or spinal cord, within the arachnoid membrane surrounding the central nervous system. Often, it is congenital (present from birth), but it can also develop due to brain injury or infection.<br><br>" +
                    "<strong>Symptoms</strong><br>Most arachnoid cysts are asymptomatic and are discovered incidentally. However, if the cyst is large or exerts pressure on brain tissue, it may lead to:<br>" +
                    "- Persistent headache<br>" +
                    "- Dizziness or balance issues<br>" +
                    "- Visual or hearing impairment<br>" +
                    "- Concentration difficulties or memory issues<br><br>" +
                    "<strong>Treatment</strong><br>" +
                    "- <em>Monitoring</em>: If the cyst does not cause symptoms, doctors may prefer regular monitoring.<br>" +
                    "- <em>Surgical Intervention</em>: If symptoms significantly impact the patient’s quality of life, surgery may be performed to drain the cyst fluid or partially or fully remove it to relieve pressure on the brain.<br><br>" +
                    "<strong>Awareness</strong><br>" +
                    "- Early diagnosis is important, especially if symptoms appear.<br>" +
                    "- Raising awareness that most arachnoid cysts are benign and often harmless, though they may need regular check-ups.<br>" +
                    "- Guiding individuals with symptoms to seek specialist help if they experience unusual symptoms like persistent headaches or balance problems."
      },
      {
        img: '../public/img/Diseases/Clinical-impression-of-siblings-of-family-1-a-patient-1-b-patient-2.png',
        badge: '1th - 12th Weeks',
        title: 'Cerebellar Hypoplasia',
        description: "is a condition where the cerebellum (the part of the brain responsible for coordination, balance, and motor control) does not develop properly. It can be <strong>congenital</strong> (present at birth) or <strong>acquired</strong> (due to brain damage after birth).<br>"+
              "<strong>Causes:</strong><br>- <strong>Congenital:</strong> Genetic disorders, prenatal infections (e.g., rubella), or lack of oxygen during pregnancy.<br>- <strong>Acquired:</strong> Brain damage due to lack of oxygen at birth, trauma, or infections like meningitis.<br>"+
              "<strong>Symptoms:</strong><br>- <strong>Coordination issues</strong> (ataxia), difficulty walking, and muscle weakness.<br>- <strong>Speech problems</strong> (slurred speech).<br>- <strong>Balance difficulties</strong> and possible <strong>seizures</strong>.<br>- <strong>Cognitive delays</strong> or developmental problems in some cases.<br>"+
              "<strong>Diagnosis:</strong><br>- <strong>MRI scans</strong> to visualize the cerebellum and assess its development.<br>- <strong>Genetic testing</strong> to identify underlying genetic causes.<br>- <strong>Neurological exams</strong> to assess coordination and motor function.<br>"+
              "<strong>Treatment:</strong><br>- <strong>Physical Therapy</strong> to improve coordination, balance, and strength.<br>- <strong>Occupational Therapy</strong> to help with daily tasks.<br>- <strong>Speech Therapy</strong> if speech is affected.<br>- <strong>Medications</strong> to manage symptoms like muscle spasms or seizures.<br>- <strong>Surgical interventions</strong> are rare but may be needed for certain complications.<br>"+
              "<strong>Prevention:</strong><br>- <strong>Good prenatal care</strong> to monitor fetal development.<br>- <strong>Vaccinations</strong> (e.g., rubella) before pregnancy to avoid infections.<br>- <strong>Genetic counseling</strong> for families with a history of genetic disorders.<br>"+
              "<strong>Prognosis:</strong> The outcome depends on the severity of the condition. Some individuals may lead independent lives with therapy, while others may need lifelong support for mobility and daily activities.<br>"+
              "In summary, <strong>Cerebellar Hypoplasia</strong> is a neurological condition affecting coordination and balance, and while there is no cure, early treatment with therapy and support can help improve quality of life."
                    },
      {
        img: '../public/img/Diseases/767679ab89a64fa5285bea4d60f36dce.jpg',
        badge: '1th - 26th Weeks',
        title: 'Colphocephaly',
        description: "Colpocephaly is a rare congenital brain abnormality characterized by the disproportionate enlargement " +
              "of the occipital horns of the brain's lateral ventricles. This occurs due to abnormal brain development, " +
              "often associated with issues in the white matter.<br>" +
              "<br>" +
              "<strong>Causes:</strong><br>" +
              "- <strong>Developmental Brain Abnormalities:</strong> Problems in neuronal migration during fetal development.<br>" +
              "- <strong>Associated Conditions:</strong> Corpus callosum agenesis or hypoplasia (underdevelopment or absence of the corpus callosum).<br>" +
              "- <strong>Genetic or Environmental Factors:</strong> Chromosomal abnormalities, prenatal infections, or injuries.<br>" +
              "<br>" +
              "<strong>Symptoms:</strong><br>" +
              "Varies depending on severity; common symptoms include:<br>" +
              "- <strong>Developmental delays:</strong> Slower milestones in motor and cognitive skills.<br>" +
              "- <strong>Seizures:</strong> Common in severe cases.<br>" +
              "- <strong>Intellectual disabilities:</strong> Ranging from mild to severe.<br>" +
              "- <strong>Muscle weakness:</strong> Spasticity or lack of coordination.<br>" +
              "<br>" +
              "<strong>Diagnosis:</strong><br>" +
              "- <strong>Imaging Studies:</strong> MRI or CT scans show enlarged occipital horns and reduced white matter.<br>" +
              "- <strong>Prenatal Ultrasound:</strong> Sometimes identifies abnormalities during pregnancy.<br>" +
              "- <strong>Genetic Testing:</strong> To investigate potential chromosomal issues.<br>" +
              "<br>" +
              "<strong>Treatment:</strong><br>" +
              "No cure; management focuses on symptoms:<br>" +
              "- <strong>Physical therapy:</strong> For motor skills.<br>" +
              "- <strong>Medications:</strong> For seizures.<br>" +
              "- <strong>Special education:</strong> To address learning disabilities.<br>" +
              "- <strong>Speech therapy:</strong> For communication difficulties.<br>" +
              "<br>" +
              "<strong>Prognosis:</strong><br>" +
              "Varies by severity:<br>" +
              "- Mild cases may lead relatively normal lives with support.<br>" +
              "- Severe cases may require lifelong care and face significant neurological challenges."
      },
      {
        img: '../public/img/Diseases/WhatsApp Image 2025-01-09 at 18.00.51_fed83f97.jpg',
        badge: '3th - 4th Months',
        title: 'Encephalocele',
        description: "Encephalocele is a rare congenital condition where brain tissue and membranes protrude through an opening " +
              "in the skull. It is a type of neural tube defect that occurs during early fetal development when the skull " +
              "bones do not close completely.<br>" +
              "<br>" +
              "<strong>Causes:</strong><br>" +
              "- <strong>Genetic Factors:</strong> Family history of neural tube defects.<br>" +
              "- <strong>Environmental Factors:</strong> Maternal folic acid deficiency. Exposure to certain toxins or medications during pregnancy.<br>" +
              "- <strong>Associated Syndromes:</strong> Often linked to other genetic conditions or syndromes.<br>" +
              "<br>" +
              "<strong>Symptoms:</strong><br>" +
              "Visible sac-like protrusion on the head (can be at the back, front, or base of the skull).<br>" +
              "Neurological problems depending on the severity, such as:<br>" +
              "- <strong>Developmental delays:</strong> May be present.<br>" +
              "- <strong>Seizures:</strong> May occur in some cases.<br>" +
              "- <strong>Vision or motor impairments:</strong> Can be seen depending on the severity.<br>" +
              "- <strong>Hydrocephalus:</strong> Fluid buildup in the brain.<br>" +
              "<br>" +
              "<strong>Diagnosis:</strong><br>" +
              "<strong>Prenatal Testing:</strong><br>" +
              "- <strong>Ultrasound:</strong> Detects encephalocele during pregnancy.<br>" +
              "- <strong>Alpha-fetoprotein (AFP) Test:</strong> High levels may indicate neural tube defects.<br>" +
              "<strong>Postnatal Imaging:</strong><br>" +
              "- <strong>MRI or CT scans:</strong> Assess the extent and content of the protrusion.<br>" +
              "<br>" +
              "<strong>Treatment:</strong><br>" +
              "<strong>Surgical Repair:</strong><br>" +
              "- Remove the sac and return brain tissue to the skull.<br>" +
              "- Close the skull defect.<br>" +
              "<strong>Supportive Care:</strong><br>" +
              "- Physical and occupational therapy for developmental support.<br>" +
              "- Seizure management with medications.<br>" +
              "<br>" +
              "<strong>Prognosis:</strong><br>" +
              "Depends on the size, location, and associated complications.<br>" +
              "- Small encephaloceles with no brain tissue involvement may have a good outcome after surgery.<br>" +
              "- Larger or complex cases may lead to significant neurological and developmental challenges."

      },
      {
        img: '../public/img/Diseases/Ventriculomegaly-Illustration_2021-05-04-152710.png',
        badge: '18th - 24 Weeks',
        title: 'Mild Ventriculomegaly',
        description: "Mild Ventriculomegaly is a condition characterized by a slight enlargement of the brain's ventricles, " +
          "which are fluid-filled spaces containing cerebrospinal fluid (CSF). This condition can be detected through " +
          "prenatal ultrasounds or postnatally via imaging techniques like <strong>MRI</strong> or <strong>CT scans</strong>.<br>" +
          "<br>" +
          "<strong>Causes:</strong><br>" +
          "- <strong>Genetic conditions:</strong> Associated with certain genetic disorders or brain abnormalities.<br>" +
          "- <strong>Developmental brain issues:</strong> May result from abnormal brain development during pregnancy.<br>" +
          "- <strong>Brain injuries or infections:</strong> Brain damage or infections can sometimes lead to ventricular enlargement.<br>" +
          "- <strong>Increased intracranial pressure:</strong> Elevated pressure within the skull can cause the ventricles to expand.<br>" +
          "<br>" +
          "<strong>When It Occurs During Pregnancy:</strong><br>" +
          "Mild ventriculomegaly is often detected during routine ultrasound scans in the second trimester (18th–22nd week). " +
          "It is diagnosed when the ventricles measure between 10–15 millimeters. In many cases, it is a benign finding, " +
          "particularly when no other abnormalities are present.<br>" +
          "<br>" +
          "<strong>Effects and Symptoms:</strong><br>" +
          "- Often asymptomatic and resolves over time.<br>" +
          "- If associated with other conditions, it may cause developmental delays or neurological issues, though this is not common.<br>" +
          "<br>" +
          "<strong>Diagnosis:</strong><br>" +
          "- Typically identified through prenatal ultrasound.<br>" +
          "- Additional imaging (e.g., <strong>MRI</strong>) may be required to monitor progression or resolution.<br>" +
          "<br>" +
          "<strong>Treatment:</strong><br>" +
          "- In most cases, no treatment is necessary, only regular monitoring via follow-up ultrasounds.<br>" +
          "- If linked to an underlying condition (e.g., genetic disorder or brain abnormality), treatment targets the root cause.<br>" +
          "<br>" +
          "<strong>Prognosis:</strong><br>" +
          "Mild ventriculomegaly is often not a cause for concern, and with proper monitoring, pregnancies proceed normally. " +
          "Developmental outcomes are typically positive when the condition resolves on its own or occurs in isolation."
      },
      {
        img: '../public/img/Diseases/WhatsApp Image 2025-01-10 at 14.37.12_76b0cb58.jpg',
        badge: '18th - 22th Weeks',
        title: 'Moderate Ventriculomegaly',
        description: "Moderate Ventriculomegaly is a condition where the brain's ventricles are enlarged more than in mild ventriculomegaly " +
          "but not as severely as in more serious cases. The ventricles are fluid-filled spaces that contain cerebrospinal fluid (CSF), " +
          "which helps protect and nourish the brain. Ventricular enlargement can indicate underlying issues with brain development or function.<br>" +
          "<br>" +
          "<strong>Causes:</strong><br>" +
          "- <strong>Genetic disorders:</strong> Conditions like Down syndrome, Edwards syndrome, or other chromosomal abnormalities can lead to moderate ventriculomegaly.<br>" +
          "- <strong>Brain development problems:</strong> Abnormal brain development during pregnancy, such as hydrocephalus or other brain conditions, can cause this condition.<br>" +
          "- <strong>Infections during pregnancy:</strong> Infections like toxoplasmosis or cytomegalovirus (CMV) can result in ventriculomegaly.<br>" +
          "- <strong>Traumatic brain injuries:</strong> Brain damage from trauma or infection may enlarge the ventricles.<br>" +
          "- <strong>Obstructions in cerebrospinal fluid flow:</strong> Blockages like tumors or cysts can cause the ventricles to expand.<br>" +
          "<br>" +
          "<strong>When It Occurs During Pregnancy:</strong><br>" +
          "Moderate ventriculomegaly is usually diagnosed through ultrasound scans between the 18th and 22nd weeks of pregnancy. " +
          "Ventricles measuring between 15 and 20 millimeters are considered enlarged. Detailed anatomical scans often detect this condition.<br>" +
          "<br>" +
          "<strong>Effects and Symptoms:</strong><br>" +
          "- <strong>During pregnancy:</strong> Moderate ventriculomegaly may not show immediate symptoms in the fetus but can signal an underlying issue affecting brain development.<br>" +
          "- <strong>At birth:</strong> The effects depend on the underlying cause. Some children may show no long-term impact, while others could experience developmental delays, cognitive challenges, or motor issues.<br>" +
          "<br>" +
          "<strong>Diagnosis:</strong><br>" +
          "- Detected via prenatal ultrasound.<br>" +
          "- Further imaging like <strong>MRI</strong> may be recommended for a clearer view of the brain and ventricles.<br>" +
          "- Genetic testing (e.g., amniocentesis or CVS) may be performed to check for chromosomal abnormalities.<br>" +
          "<br>" +
          "<strong>Treatment:</strong><br>" +
          "- If caused by hydrocephalus, surgery (e.g., shunt insertion) may be needed to drain excess cerebrospinal fluid.<br>" +
          "- For genetic disorders, specialized care and developmental support may be required after birth.<br>" +
          "- If no major brain abnormalities are present, regular monitoring through follow-up imaging may suffice.<br>" +
          "<br>" +
          "<strong>Prognosis:</strong><br>" +
          "The outcome depends on the underlying cause. Some children may develop normally, while others might face cognitive or physical delays. " +
          "Early detection, close monitoring, and timely intervention can significantly improve the prognosis.<br>" +
          "<br>" +
          "Expecting parents should work closely with their healthcare provider to understand the condition and its implications. Regular follow-ups and " +
          "additional testing are essential to monitor the baby’s development and health."

      },
      {
        img: '../public/img/Diseases/Porencephaly-1.png',
        badge: '8th - 24th Weeks',
        title: 'Polencephaly',
        description:
        "Polencephaly is a rare brain malformation where the cortex develops abnormally, leading to small, irregular folds " +
          "instead of the normal structure. This condition can cause developmental delays, seizures, intellectual disabilities, " +
          "and motor issues.<br>" +
          "<br>" +
          "<strong>Causes:</strong><br>" +
          "- <strong>Genetic Mutations:</strong> (e.g., TUBA1A, DCX).<br>" +
          "- <strong>Infections During Pregnancy:</strong> (e.g., Zika virus, CMV).<br>" +
          "- <strong>Oxygen Deprivation:</strong> during fetal development.<br>" +
          "- <strong>Toxic Exposures:</strong> during pregnancy.<br>" +
          "<br>" +
          "<strong>Symptoms:</strong><br>" +
          "- Developmental delays.<br>" +
          "- Seizures.<br>" +
          "- Muscle weakness or spasticity.<br>" +
          "- Cognitive and speech impairments.<br>" +
          "<br>" +
          "<strong>Diagnosis:</strong><br>" +
          "- <strong>MRI:</strong> for brain imaging.<br>" +
          "- <strong>Genetic Testing:</strong> to identify mutations.<br>" +
          "<br>" +
          "<strong>Treatment:</strong><br>" +
          "- Medications for seizures.<br>" +
          "- Physical, speech, and occupational therapy.<br>" +
          "- Supportive care for mobility and learning challenges.<br>" +
          "<br>" +
          "<strong>Prognosis:</strong><br>" +
          "Varies by severity; supportive therapies improve quality of life, but no cure exists."

      },
      {
        img: '../public/img/Diseases/ventriculmegaly.gif',
        badge: '18th - 24th Weeks',
        title: 'Severe Ventriculomegaly',
        description: "Severe Ventriculomegaly is a condition where the brain's ventricles (fluid-filled spaces) become abnormally enlarged. " +
          "It is classified as severe when the ventricles measure ≥15 mm on ultrasound.<br>" +
          "<br>" +
          "<strong>Causes:</strong><br>" +
          "- <strong>Obstruction of CSF Flow:</strong> Conditions like hydrocephalus.<br>" +
          "- <strong>Brain Abnormalities:</strong> Polencephaly, neural tube defects, or brain malformations.<br>" +
          "- <strong>Infections:</strong> Congenital infections like Cytomegalovirus (CMV) or Toxoplasmosis.<br>" +
          "- <strong>Chromosomal Abnormalities:</strong> Linked to syndromes like Down or Edwards syndrome.<br>" +
          "<br>" +
          "<strong>Symptoms:</strong><br>" +
          "May not be apparent in utero, but postnatal symptoms can include:<br>" +
          "- Increased head size.<br>" +
          "- Developmental delays.<br>" +
          "- Neurological impairments.<br>" +
          "<br>" +
          "<strong>Diagnosis:</strong><br>" +
          "- <strong>Prenatal Ultrasound:</strong> Identifies ventricle size.<br>" +
          "- <strong>MRI:</strong> Provides detailed brain imaging.<br>" +
          "- <strong>Amniocentesis:</strong> To detect infections or genetic abnormalities.<br>" +
          "<br>" +
          "<strong>Treatment:</strong><br>" +
          "Depends on the cause.<br>" +
          "- <strong>Surgical Intervention:</strong> Ventriculoperitoneal (VP) shunt for hydrocephalus.<br>" +
          "- <strong>Supportive Therapies:</strong> Physical, occupational, and speech therapy.<br>" +
          "<br>" +
          "<strong>Prognosis:</strong><br>" +
          "Varies widely:<br>" +
          "- Mild cases may resolve spontaneously.<br>" +
          "- Severe cases depend on underlying causes and associated conditions."
      }
    ];
  
    // Select the card list container
    const cardList = document.querySelector('.card-list');
  
    // Function to generate cards
    diseases.forEach((disease, index) => {
      const cardItem = document.createElement('li');
      cardItem.classList.add('card-item', 'swiper-slide');
      cardItem.innerHTML = `
        <a class="card-link">
          <img src="${disease.img}" class="card-image">
          <p class="badge">${disease.badge}</p>
          <h2 class="card-title">${disease.title}</h2>
          <p class="description">${disease.description}</p>
          <button class="card-btn" data-index="${index}">see more</button>
        </a>
      `;
      cardList.appendChild(cardItem);
    });
  
    // Function to update the details section
    const detailsSection = document.querySelector('.Disease_detail_content');
    const diseaseImg = detailsSection.querySelector('.Disease_img img');
    const diseaseName = detailsSection.querySelector('.name span');
    const diseaseDescription = detailsSection.querySelector('.description span');
  
    // Function to display details of a selected disease
    function displayDiseaseDetails(index) {
      const disease = diseases[index];
      diseaseImg.src = disease.img;
      diseaseName.textContent = disease.title;
      diseaseDescription.innerHTML = disease.description;
    }
  
    // Initial load: display details of the first disease
    displayDiseaseDetails(0);
  
    // Event listener to handle card button clicks
    cardList.addEventListener('click', (event) => {
      const btn = event.target.closest('.card-btn');
      if (!btn) return; // If no button was clicked, exit
      const index = btn.getAttribute('data-index');
      displayDiseaseDetails(index);

      document.querySelector('#DiseaseDetails').scrollIntoView({ behavior: 'smooth' });
    });
  });
  




  // استهداف الزر
const darkModeToggle = document.getElementById('darkModeToggle');

// إضافة خاصية الوضع الداكن عند الضغط على الزر
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList=='dark-mode') {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.innerHTML='<span class="toggle-off"><i class="fa-regular fa-lightbulb"></i></span>'
    } else {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.innerHTML='<span class="toggle-on"><i class="fa-solid fa-lightbulb"></i></span>'
    }
});
