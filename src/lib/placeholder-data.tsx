import React from 'react';
import { HeartPulse, Stethoscope, Syringe, Microscope, Bone, Activity, Plus, Heart, Waves } from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'General' | 'Specialty' | 'Surgical';
  duration?: string;
  details?: {
    whatToExpect?: string[];
    procedure?: string;
    recovery?: string;
    recoveryTime?: string;
    anesthesia?: string;
    faqs?: Array<{ question: string; answer: string }>;
    pricing?: {
      basePrice: number;
      consultationFee?: number;
      followUpPrice?: number;
      includes?: string[];
      additionalFees?: Array<{
        name: string;
        price: number;
        description?: string;
      }>;
      insuranceInfo?: string;
      paymentOptions?: string[];
    };
  };
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageId: string;
  tags: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  time: string;
  quote: string;
  imageId: string;
  rating: number;
};

export type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  service: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
};

export type Patient = {
    id: string;
    name: string;
    email: string;
    phone: string;
    lastVisit: string;
    imageId: string;
}

export type Post = {
    id: string;
    title: string;
    excerpt: string;
    imageId: string;
    category: string;
    author: string;
    authorImageId: string;
    date: string;
    readTime: number;
};

export const services: Service[] = [
  {
    id: 'general-checkup',
    name: 'General Checkup',
    description: 'Comprehensive health assessments for all ages to monitor and maintain your wellbeing.',
    icon: <HeartPulse />,
    category: 'General',
    duration: '30-45 minutes',
    details: {
      whatToExpect: [
        'Review of medical history',
        'Vital signs check (blood pressure, heart rate, etc.)',
        'Physical examination',
        'Basic vision and hearing tests',
        'Preventive health counseling'
      ],
      procedure: 'A general checkup involves a comprehensive review of your health status, including medical history, lifestyle factors, and any current concerns. The doctor will perform a physical examination and may order basic lab tests if needed.',
      recovery: 'No recovery time is needed for a general checkup. You can resume your normal activities immediately after the visit.',
      recoveryTime: 'None',
      faqs: [
        {
          question: 'How often should I get a general checkup?',
          answer: 'Most healthy adults should have a general checkup once a year. However, your doctor may recommend more frequent visits based on your age, medical history, and risk factors.'
        },
        {
          question: 'Do I need to fast before a general checkup?',
          answer: 'Fasting is typically not required for a basic checkup, but your doctor may ask you to fast if blood tests are planned.'
        }
      ]
    }
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Specialized care for heart conditions, including diagnosis, treatment, and prevention.',
    icon: <Stethoscope />,
    category: 'Specialty',
    duration: '45-60 minutes',
    details: {
      pricing: {
        basePrice: 4999,
        consultationFee: 1999,
        followUpPrice: 2499,
        includes: [
          'Comprehensive cardiac evaluation',
          'Electrocardiogram (ECG/EKG)',
          'Blood pressure monitoring',
          'Personalized treatment plan'
        ],
        additionalFees: [
          { name: 'Echocardiogram', price: 3499, description: 'If recommended by the cardiologist' },
          { name: 'Stress Test', price: 4299, description: 'If clinically indicated' }
        ],
        insuranceInfo: 'We work with most cardiac care insurance providers. Prior authorization may be required for some tests.',
        paymentOptions: ['Credit/Debit', 'HSA/FSA', 'Insurance', 'Payment Plans']
      },
      whatToExpect: [
        'Detailed medical history review',
        'Cardiovascular examination',
        'Electrocardiogram (ECG/EKG)',
        'Blood pressure monitoring',
        'Discussion of symptoms and risk factors'
      ],
      procedure: 'Cardiology consultations involve a thorough evaluation of heart health, including listening to heart sounds, checking for irregular heartbeats, and reviewing any symptoms. Additional tests like echocardiograms or stress tests may be recommended.',
      recovery: 'Most cardiology consultations don\'t require recovery time. If procedures are performed, recovery will vary based on the specific test.',
      recoveryTime: 'Varies by procedure',
      faqs: [
        {
          question: 'What are the warning signs of heart disease?',
          answer: 'Common signs include chest pain, shortness of breath, palpitations, dizziness, and swelling in the legs. However, some people may have no symptoms.'
        },
        {
          question: 'How can I prepare for my first cardiology appointment?',
          answer: 'Bring a list of your medications, medical history, and any previous test results. Wear comfortable clothing and avoid applying lotions or powders to your chest area.'
        }
      ]
    }
  },
  {
    id: 'vaccinations',
    name: 'Vaccinations',
    description: 'Stay protected with our full range of vaccinations for children and adults.',
    icon: <Syringe />,
    category: 'General',
    duration: '15-30 minutes',
    details: {
      whatToExpect: [
        'Review of vaccination history',
        'Medical history assessment',
        'Vaccine administration',
        'Observation period (if required)', 
        'Documentation and next dose scheduling'
      ],
      procedure: 'Vaccination appointments are quick and typically involve a brief health check, administration of the vaccine (usually via injection), and a short observation period to monitor for any immediate reactions.',
      recovery: 'Mild side effects like soreness at the injection site, low-grade fever, or fatigue are common and usually resolve within 1-2 days.',
      recoveryTime: '1-2 days for minor side effects',
      faqs: [
        {
          question: 'What vaccines do adults need?',
          answer: 'Recommended vaccines for adults include flu (annual), Tdap/Td (tetanus, diphtheria, pertussis), shingles (after age 50), pneumonia (after 65 or for certain conditions), and COVID-19 boosters.'
        },
        {
          question: 'Can I get multiple vaccines at once?',
          answer: 'Yes, most vaccines can be given during the same visit. Your healthcare provider will determine which vaccines are appropriate based on your age, health status, and vaccination history.'
        }
      ]
    }
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Expert care for skin, hair, and nail conditions, from acne to skin cancer screenings.',
    icon: <Activity />,
    category: 'Specialty',
    duration: '30-45 minutes',
    details: {
      whatToExpect: [
        'Skin examination',
        'Discussion of skin concerns',
        'Diagnosis and treatment planning',
        'Procedures (if needed, such as biopsies or cryotherapy)', 
        'Skincare recommendations'
      ],
      procedure: 'A dermatology visit typically involves a full-body skin check, examination of specific areas of concern, and discussion of symptoms. The dermatologist may perform procedures like biopsies, cryotherapy, or prescribe medications.',
      recovery: 'Recovery depends on the procedure. Most routine exams require no recovery time, while procedures like biopsies may require a few days of wound care.',
      recoveryTime: 'Varies by procedure',
      faqs: [
        {
          question: 'How often should I get a skin cancer screening?',
          answer: 'Annual skin checks are recommended for most adults, especially those with a history of sun exposure, fair skin, or a family history of skin cancer.'
        },
        {
          question: 'Should I wear makeup to my dermatology appointment?',
          answer: 'It\'s best to come with clean, makeup-free skin so the dermatologist can properly examine your skin. Avoid wearing nail polish if you have concerns about your nails.'
        }
      ]
    }
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Treatment for musculoskeletal issues, including sports injuries and joint problems.',
    icon: <Bone />,
    category: 'Specialty',
    duration: '30-60 minutes',
    details: {
      pricing: {
        basePrice: 3499,
        consultationFee: 1499,
        followUpPrice: 1999,
        includes: [
          'Comprehensive evaluation',
          'Range of motion assessment',
          'Diagnostic imaging review',
          'Personalized treatment plan'
        ],
        additionalFees: [
          { name: 'X-rays', price: 1299, description: 'If needed' },
          { name: 'Joint injection', price: 1799, description: 'If clinically indicated' },
          { name: 'Bracing/supports', price: 799, description: 'Varies by type' }
        ],
        insuranceInfo: 'We accept most major insurance plans. Some procedures may require pre-authorization.',
        paymentOptions: ['Credit/Debit', 'HSA/FSA', 'Insurance', 'Payment Plans']
      },
      whatToExpect: [
        'Medical history review',
        'Physical examination',
        'Range of motion assessment',
        'Imaging review (if applicable)',
        'Treatment planning'
      ],
      procedure: 'An orthopedic consultation includes evaluation of your symptoms, physical examination of the affected area, review of any imaging studies, and development of a personalized treatment plan which may include physical therapy, medications, or surgical options.',
      recovery: 'Recovery varies widely depending on the condition and treatment. Some patients may require physical therapy, while others might need surgical intervention with longer recovery periods.',
      recoveryTime: 'Varies by condition and treatment',
      faqs: [
        {
          question: 'When should I see an orthopedist?',
          answer: 'Consider seeing an orthopedist for persistent joint pain, difficulty with daily activities, sports injuries, or if you have a musculoskeletal condition that isn\'t improving with rest and over-the-counter treatments.'
        },
        {
          question: 'What should I bring to my first orthopedic appointment?',
          answer: 'Bring any relevant medical records, imaging studies (X-rays, MRIs), a list of medications, and be prepared to discuss your symptoms, when they started, and what makes them better or worse.'
        }
      ]
    }
  },
  {
    id: 'lab-tests',
    name: 'Lab Tests',
    description: 'On-site laboratory for fast and accurate diagnostic testing and results.',
    icon: <Microscope />,
    category: 'General',
    duration: '15-30 minutes',
    details: {
      whatToExpect: [
        'Registration and check-in',
        'Sample collection (blood, urine, etc.)',
        'Processing of samples',
        'Results communication',
        'Follow-up if needed'
      ],
      procedure: 'Lab tests involve collecting samples such as blood, urine, or other specimens for analysis. The specific preparation depends on the test being performed (fasting, medication restrictions, etc.).',
      recovery: 'Most lab tests require no recovery time. You may experience minor bruising at blood draw sites which typically resolves within a few days.',
      recoveryTime: 'Minimal to none',
      faqs: [
        {
          question: 'How long does it take to get lab results?',
          answer: 'Most routine test results are available within 1-3 business days. Some specialized tests may take longer. Your healthcare provider will discuss the expected timeline for your specific tests.'
        },
        {
          question: 'Do I need to fast before my lab test?',
          answer: 'Some tests require fasting (typically 8-12 hours without food or drink except water). Your healthcare provider will give you specific instructions based on the tests ordered.'
        }
      ]
    }
  },
  {
    id: 's7',
    name: 'Laser Piles Treatment',
    description: 'Advanced, minimally invasive laser procedures for effective piles treatment.',
    icon: <Plus />,
    category: 'Surgical',
  },
  {
    id: 's8',
    name: 'Anal Fissure Treatment',
    description: 'Specialized care for anal fissures, providing relief and promoting healing.',
    icon: <Heart />,
    category: 'Surgical',
  },
  {
    id: 's9',
    name: 'Laser Fistula Treatment',
    description: 'Effective and safe laser treatment for fistula, ensuring quicker recovery.',
    icon: <Waves />,
    category: 'Surgical',
  },
  {
    id: 's10',
    name: 'Circumcision',
    description: 'Safe and precise circumcision procedures performed by experienced specialists.',
    icon: <Stethoscope />,
    category: 'Surgical',
  },
];

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cardiologist',
    bio: 'Dr. Evelyn Reed has over 15 years of experience in cardiology and is passionate about preventive heart care and patient education.',
    imageId: 'doctor-1',
    tags: ['Heart Health', 'Cholesterol Management']
  },
  {
    id: 'd2',
    name: 'Dr. Marcus Thorne',
    specialty: 'General Practitioner',
    bio: 'Dr. Marcus Thorne is a dedicated family doctor with a focus on holistic wellness and long-term patient relationships.',
    imageId: 'doctor-2',
    tags: ['Family Medicine', 'Annual Physicals']
  },
  {
    id: 'd3',
    name: 'Dr. Lena Petrova',
    specialty: 'Dermatologist',
    bio: 'Dr. Lena Petrova specializes in both medical and cosmetic dermatology, helping patients achieve healthy, beautiful skin.',
    imageId: 'doctor-3',
    tags: ['Acne Treatment', 'Skin Cancer Screening']
  },
   {
    id: 'd4',
    name: 'Dr. Kenji Tanaka',
    specialty: 'Orthopedist',
    bio: 'Dr. Kenji Tanaka is a leading orthopedic surgeon with expertise in sports medicine and joint replacement surgery.',
    imageId: 'doctor-4',
    tags: ['Sports Injuries', 'Knee & Hip Surgery']
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah L.',
    time: '2 weeks ago',
    quote: 'The care I received at ClinicWave was exceptional. Dr. Reed was thorough, kind, and truly listened to my concerns. I feel much more confident about my health now.',
    imageId: 'patient-1',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Michael B.',
    time: 'a month ago',
    quote: 'Booking an appointment was so easy, and the clinic is modern and clean. The entire staff was friendly and professional. Highly recommended!',
    imageId: 'patient-2',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Emily C.',
    time: '3 months ago',
    quote: 'I had a virtual consultation, and it was seamless. The doctor was punctual and addressed all my questions. A fantastic service for busy people.',
    imageId: 'patient-3',
    rating: 5,
  },
];

export const appointments: Appointment[] = [
    { id: 'a1', patientName: 'John Doe', doctorName: 'Dr. Evelyn Reed', service: 'Cardiology Consultation', date: '2024-09-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 'a2', patientName: 'Jane Smith', doctorName: 'Dr. Marcus Thorne', service: 'General Checkup', date: '2024-09-15', time: '11:30 AM', status: 'Confirmed' },
    { id: 'a3', patientName: 'Peter Jones', doctorName: 'Dr. Lena Petrova', service: 'Dermatology Follow-up', date: '2024-09-16', time: '02:00 PM', status: 'Pending' },
    { id: 'a4', patientName: 'Mary Johnson', doctorName: 'Dr. Kenji Tanaka', service: 'Orthopedic Consultation', date: '2024-09-18', time: '09:00 AM', status: 'Confirmed' },
    { id: 'a5', patientName: 'David Williams', doctorName: 'Dr. Marcus Thorne', service: 'Vaccination', date: '2024-09-20', time: '04:00 PM', status: 'Cancelled' },
];

export const patients: Patient[] = [
    { id: 'p1', name: 'Amelia Grant', email: 'amelia.grant@example.com', phone: '(555) 123-4567', lastVisit: '2024-08-20', imageId: 'patient-avatar-1' },
    { id: 'p2', name: 'Benjamin Hayes', email: 'ben.hayes@example.com', phone: '(555) 234-5678', lastVisit: '2024-08-18', imageId: 'patient-avatar-2' },
    { id: 'p3', name: 'Carter Evans', email: 'carter.e@example.com', phone: '(555) 345-6789', lastVisit: '2024-07-30', imageId: 'patient-avatar-3' },
    { id: 'p4', name: 'Diana Wells', email: 'diana.wells@example.com', phone: '(555) 456-7890', lastVisit: '2024-09-01', imageId: 'patient-avatar-4' },
    { id: 'p5', name: 'Ethan Reed', email: 'ethan.reed@example.com', phone: '(555) 567-8901', lastVisit: '2024-08-25', imageId: 'patient-avatar-5' },
];

export const posts: Post[] = [
    {
        id: 'post-1',
        title: 'The Importance of Regular Health Checkups',
        excerpt: 'Learn why regular health checkups are crucial for early detection of diseases and maintaining a healthy lifestyle.',
        imageId: 'blog-post-1',
        category: 'Wellness',
        author: 'Dr. Marcus Thorne',
        authorImageId: 'doctor-2',
        date: '2024-09-01',
        readTime: 5,
    },
    {
        id: 'post-2',
        title: 'Managing High Blood Pressure: A Comprehensive Guide',
        excerpt: 'Dr. Evelyn Reed shares expert advice on how to manage high blood pressure through lifestyle changes and medical treatments.',
        imageId: 'blog-post-2',
        category: 'Heart Health',
        author: 'Dr. Evelyn Reed',
        authorImageId: 'doctor-1',
        date: '2024-08-25',
        readTime: 7,
    },
    {
        id: 'post-3',
        title: 'Sun Protection: Your Best Defense Against Skin Aging',
        excerpt: 'Discover the best practices for sun protection and how to choose the right sunscreen for your skin type.',
        imageId: 'blog-post-3',
        category: 'Skincare',
        author: 'Dr. Lena Petrova',
        authorImageId: 'doctor-3',
        date: '2024-08-18',
        readTime: 6,
    },
    {
        id: 'post-4',
        title: 'Common Sports Injuries and How to Prevent Them',
        excerpt: 'An insightful article on preventing and treating common sports-related injuries, by our orthopedic expert.',
        imageId: 'blog-post-4',
        category: 'Orthopedics',
        author: 'Dr. Kenji Tanaka',
        authorImageId: 'doctor-4',
        date: '2024-08-12',
        readTime: 8,
    },
    {
        id: 'post-5',
        title: 'Understanding Proctology: When to See a Specialist',
        excerpt: 'A guide to understanding common proctological issues and when it is time to seek professional medical advice.',
        imageId: 'featured-post-1',
        category: 'Proctology',
        author: 'Dr. Marcus Thorne',
        authorImageId: 'doctor-2',
        date: '2024-09-05',
        readTime: 6,
    },
    {
        id: 'post-6',
        title: 'Laser Treatments for Anal Fissures: What to Expect',
        excerpt: 'Explore the benefits of laser treatment for anal fissures, a minimally invasive option with faster recovery times.',
        imageId: 'speciality-2',
        category: 'Surgical',
        author: 'Dr. Evelyn Reed',
        authorImageId: 'doctor-1',
        date: '2024-09-08',
        readTime: 7,
    },
];