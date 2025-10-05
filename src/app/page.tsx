"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Initialize visitor counter from localStorage
    const count = localStorage.getItem("visitorCount");
    if (count) {
      const newCount = parseInt(count) + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      setVisitorCount(newCount);
    } else {
      localStorage.setItem("visitorCount", "1");
      setVisitorCount(1);
    }
  }, []);

  const phoneNumber = "8879797777";
  const whatsappMessage = "Hi, I'd like to know more about SIVA Tuitions and Coaching Center";

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#ED1C24] text-white py-3 text-center font-semibold">
        🎓 Admissions Open • Personalized Coaching
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Offical-Logo-1759671765864.jpg"
              alt="SIVA Tuitions Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#318CE7] hover:bg-[#2a7bc7] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              aria-label="Call us now"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          {/* Left: Portrait Photo */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/NEW-FACE-1759671767254.jpg"
                alt="Yadlapalli Naga Murali Krishna - Founder"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full"
                priority
              />
            </div>
          </div>

          {/* Right: Credentials and CTA */}
          <div className="space-y-6">
            <div className="inline-block bg-[#F3F146] text-[#111111] px-4 py-2 rounded-full font-semibold text-sm">
              ✨ Trusted Educational Coaching
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#6495ed] leading-tight">
              🚀 SIVA TUITIONS<br />
              Your Path to Academic Success
            </h1>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#6495ed]">
              <h2 className="font-bold text-xl text-[#111111] mb-2">
                Yadlapalli Naga Murali Krishna
              </h2>
              <p className="text-gray-700 font-medium">
                M.Tech., M.C.A., M.B.A., M.Sc
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-[#318CE7] mt-1">✓</span>
                <span>Short Term EAMCET EAPCET preparation</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#318CE7] mt-1">✓</span>
                <span>Get good marks in Betterment & Supplementary Examination</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#318CE7] mt-1">✓</span>
                <span>Intermediate and 10th standard students</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#318CE7] mt-1">✓</span>
                <span>CBSE, STATE, ICSE boards supported</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#318CE7] mt-1">✓</span>
                <span>Foundation classes for students between 6th and 10th</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-semibold"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-[#318CE7] hover:bg-[#2a7bc7] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-semibold"
              >
                <Phone size={20} />
                Call: {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-8">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/offical-Ad-1759671766333.jpg"
            alt="SIVA Tuitions Promotional Banner"
            width={1200}
            height={400}
            className="w-full rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6495ed] text-center mb-12">
            About SIVA Tuitions
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
            At SIVA Tuitions and Coaching Center, we are committed to providing exceptional educational support 
            to help students achieve their academic goals. With experienced faculty and proven teaching methods, 
            we ensure every student reaches their full potential.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What We Offer */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#6495ed] mb-6">📚 What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#318CE7] font-bold mt-1">•</span>
                  <div>
                    <strong className="text-[#111111]">Comprehensive Coaching:</strong>
                    <p className="text-gray-600">Specialized programs for EAMCET, EAPCET, and all board examinations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#318CE7] font-bold mt-1">•</span>
                  <div>
                    <strong className="text-[#111111]">Foundation Courses:</strong>
                    <p className="text-gray-600">Strong foundation building for classes 6th to 10th</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#318CE7] font-bold mt-1">•</span>
                  <div>
                    <strong className="text-[#111111]">Exam Preparation:</strong>
                    <p className="text-gray-600">Betterment and supplementary exam coaching with proven results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#318CE7] font-bold mt-1">•</span>
                  <div>
                    <strong className="text-[#111111]">Multiple Board Support:</strong>
                    <p className="text-gray-600">Expert guidance for CBSE, STATE, and ICSE syllabi</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#318CE7] font-bold mt-1">•</span>
                  <div>
                    <strong className="text-[#111111]">Personalized Attention:</strong>
                    <p className="text-gray-600">Small batch sizes ensuring individual focus on every student</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#6495ed] mb-6">⭐ Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <div>
                    <strong className="text-[#111111]">Highly Qualified Faculty:</strong>
                    <p className="text-gray-600">Led by Yadlapalli Naga Murali Krishna (M.Tech, M.C.A, M.B.A, M.Sc)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <div>
                    <strong className="text-[#111111]">Proven Track Record:</strong>
                    <p className="text-gray-600">Hundreds of students achieving excellent results year after year</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <div>
                    <strong className="text-[#111111]">Flexible Timings:</strong>
                    <p className="text-gray-600">Classes scheduled to accommodate students' school hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <div>
                    <strong className="text-[#111111]">Regular Assessments:</strong>
                    <p className="text-gray-600">Periodic tests and progress tracking for continuous improvement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <div>
                    <strong className="text-[#111111]">Affordable Fees:</strong>
                    <p className="text-gray-600">Quality education at competitive prices accessible to all</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block bg-[#318CE7] hover:bg-[#2a7bc7] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Enroll Now - Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6495ed] text-center mb-8">
            <MapPin className="inline-block mr-2 mb-2" size={36} />
            Find Us
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Visit us at our coaching center or contact us for more information
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.942797977318!2d80.4117892742783!3d16.3258667843915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7564ff317641%3A0x6ec8b552762c8f82!2sSIVA%20TUITIONS%20%26%20COACHINGS%20%2C%20SVN%20COLONY%2C%20GUNTUR-6!5e0!3m2!1sen!2sin!4v1759672175119!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIVA Tuitions Location Map"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://maps.app.goo.gl/coFa2GZ4AfMARrzMA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#318CE7] hover:bg-[#2a7bc7] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MapPin className="inline-block mr-2" size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} SIVA Tuitions and Coaching Center. All rights reserved.
              <br />
              <span className="text-sm text-gray-400">
                Developed by HR innovations
              </span>
            </p>
            <div className="text-center">
              <p className="text-sm text-gray-400">Visitor Count</p>
              <p className="text-2xl font-bold text-[#F3F146]">{visitorCount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}