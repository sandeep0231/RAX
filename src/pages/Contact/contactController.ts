import { useState } from 'react';
import type { ChangeEvent, SubmitEvent } from 'react';
import { useAdventureContext } from '../../context/provider';

const activityTags = [
  'Ganga Rafting',
  'Bungee (83m)',
  'Camping Combo',
  'Giant Swing',
  'Sunrise Trek',
  'Custom Combo',
];

const groupSizes = ['Solo Explorer', '2 - 5 Persons', '6 - 12 Raft Crew', '12+ Corp/College'];

export const useContact = () => {
  const { companyInfo, faqData, activities } = useAdventureContext();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('Ganga Rafting');
  const [groupSize, setGroupSize] = useState('2 - 5 Persons');
  const [message, setMessage] = useState('');
  const [agreedSafety, setAgreedSafety] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const validateForm = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^\+?[\d\s-]{8,15}$/.test(phone.trim())) {
      nextErrors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
    }
    if (!preferredDate) {
      nextErrors.preferredDate = 'Please choose your preferred adventure date.';
    }
    if (!agreedSafety) {
      nextErrors.agreedSafety = 'Please confirm Uttarakhand Tourism river safety guidelines.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setResult('Sending...');
    const formData = {
      access_key: "4ebb13d1-2c07-4424-b6d9-200717b3cc8b",
      subject: 'New Booking Enquiry',
      from_name: 'Rishikesh Adventure Website',
      replyto: email.trim(),
      name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      PreferredDate: preferredDate,
      DesiredActivity: selectedActivity,
      GroupSize: groupSize,
      message: message.trim(),
      safety_guidelines_accepted: agreedSafety ? 'Yes' : 'No',
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        setFullName('');
        setEmail('');
        setPhone('');
        setPreferredDate('');
        setSelectedActivity('Ganga Rafting');
        setGroupSize('2 - 5 Persons');
        setMessage('');
        setAgreedSafety(true);
      } else {
        setResult('Error');
      }
    } catch {
      setResult('Error');
    }
  };

  const handleSubmitAnotherInquiry = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => setFullName(event.target.value);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value);
  const handlePreferredDateChange = (event: ChangeEvent<HTMLInputElement>) => setPreferredDate(event.target.value);
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(event.target.value);
  const handleSafetyChange = (event: ChangeEvent<HTMLInputElement>) => setAgreedSafety(event.target.checked);
  const handleActivitySelect = (activity: string) => () => setSelectedActivity(activity);
  const handleGroupSizeSelect = (size: string) => () => setGroupSize(size);

  const basecampFaqs = faqData.filter((faq) => faq.category === 'basecamp' || faq.id === 'faq-2');
  const whatsappDirectHref = `https://wa.me/${companyInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Rishikesh Adventure X Basecamp! I would like to inquire about rafting and camping slots.')}`;

  return {
    activities,
    activityTags,
    agreedSafety,
    basecampFaqs,
    companyInfo,
    errors,
    groupSize,
    groupSizes,
    handleActivitySelect,
    handleEmailChange,
    handleFullNameChange,
    handleGroupSizeSelect,
    handleMessageChange,
    handlePhoneChange,
    handlePreferredDateChange,
    handleSafetyChange,
    handleSubmit,
    handleSubmitAnotherInquiry,
    message,
    phone,
    preferredDate,
    selectedActivity,
    submitted,
    fullName,
    email,
    whatsappDirectHref,
    result
  };
};