import React from 'react';
import { HeartPulse, Stethoscope, Syringe, Microscope, Bone, Activity, Plus, Heart, Waves } from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'General' | 'Specialty' | 'Surgical';
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
    id: 's1',
    name: 'General Checkup',
    description: 'Comprehensive health assessments for all ages to monitor and maintain your wellbeing.',
    icon: <HeartPulse />,
    category: 'General',
  },
  {
    id: 's2',
    name: 'Cardiology',
    description: 'Specialized care for heart conditions, including diagnosis, treatment, and prevention.',
    icon: <Stethoscope />,
    category: 'Specialty',
  },
  {
    id: 's3',
    name: 'Vaccinations',
    description: 'Stay protected with our full range of vaccinations for children and adults.',
    icon: <Syringe />,
    category: 'General',
  },
  {
    id: 's4',
    name: 'Dermatology',
    description: 'Expert care for skin, hair, and nail conditions, from acne to skin cancer screenings.',
    icon: <Activity />,
    category: 'Specialty',
  },
  {
    id: 's5',
    name: 'Orthopedics',
    description: 'Treatment for musculoskeletal issues, including sports injuries and joint problems.',
    icon: <Bone />,
    category: 'Specialty',
  },
  {
    id: 's6',
    name: 'Lab Tests',
    description: 'On-site laboratory for fast and accurate diagnostic testing and results.',
    icon: <Microscope />,
    category: 'General',
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