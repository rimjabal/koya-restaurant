import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUsers, 
  FaUtensils, 
  FaCheckCircle, 
  FaEnvelope, 
  FaPhone, 
  FaArrowRight, 
  FaInfoCircle,
  FaUser,
  FaMapMarkerAlt,
  FaInstagram
} from "react-icons/fa";

const ReservationsContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  min-height: 100vh;
`;

const PageHeader = styled.section`
  position: relative;
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/images/reservations-header.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ReservationsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightBg};
  min-height: 70vh;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BookingContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  margin-top: -80px;
`;

const BookingHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RestaurantTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
`;

const BookingContent = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const BookingSidebar = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-top: 1px solid #f0f0f0;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #555;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    min-width: 18px;
  }
`;

const BookingStep = styled(motion.div)`
  padding: 3rem 2rem;
`;

const StepTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 500;
`;

const StepContent = styled.div``;

const StepActions = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const FormInput = styled.input`
  padding: 0.9rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;

const FormSelect = styled.select`
  padding: 0.9rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.9rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const GuestSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const GuestButton = styled.button`
  min-width: 3rem;
  padding: 0.75rem;
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : '#e1e1e1'};
  background-color: ${props => props.selected ? props.theme.colors.primary : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.primary};
  }
`;

const DateSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const DateButton = styled.button`
  padding: 0.75rem 0.25rem;
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : '#e1e1e1'};
  background-color: ${props => props.selected ? props.theme.colors.primary : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .day-name {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  .day-number {
    font-size: 1rem;
    font-weight: 500;
  }
  
  &:hover {
    border-color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f9f9f9;
  }
`;

const TimeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const TimeButton = styled.button`
  padding: 0.75rem;
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : '#e1e1e1'};
  background-color: ${props => props.selected ? props.theme.colors.primary : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f9f9f9;
  }
`;

const FormMessage = styled(motion.div)`
  padding: 0.9rem;
  margin-top: 1.5rem;
  border-radius: 4px;
  text-align: center;
  background-color: ${props => props.$isError ? "#fff2f2" : "#f1fdf1"};
  color: ${props => props.$isError ? "#cc0000" : "#007e33"};
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #555;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const PolicyNote = styled.div`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #777;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const MonthName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
`;

const MonthButton = styled.button`
  background: none;
  border: 1px solid #e1e1e1;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StepDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.colors.primary : '#e1e1e1'};
  margin: 0 0.25rem;
  transition: all 0.3s ease;
`;

const SuccessContainer = styled(motion.div)`
  padding: 3rem 2rem;
  text-align: center;
`;

const SuccessIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ReservationDetails = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: left;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
  }
`;

const DetailTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const PolicySection = styled.section`
  padding: 3rem 0;
  background-color: #f9f9f9;
`;

const PolicyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PolicyTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
`;

const PolicyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PolicyCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const PolicyCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const PolicyText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  font-size: 0.9rem;
`;

const FooterLink = styled.a`
  color: #555;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Reservations = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: 2,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    occasion: "none",
    specialRequests: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });
  
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  
  // Calculate dates for the next 14 days
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [availableDates, setAvailableDates] = useState([]);
  
  useEffect(() => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push({
        fullDate: date,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        available: true, // You could check availability against API here
      });
    }
    
    setAvailableDates(dates);
  }, []);
  
  // Generate available times
  const generateTimeSlots = () => {
    // First service: 12:00 PM to 3:00 PM
    // Second service: 7:00 PM to 10:30 PM
    const timeSlots = [];
    
    // Lunch hours (12 PM to 3 PM)
    for (let hour = 12; hour <= 15; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 15 && min > 0) continue; // Stop at 3:00 PM
        
        const period = "PM";
        const formattedHour = hour > 12 ? hour - 12 : hour;
        const formattedMin = min === 0 ? "00" : min;
        timeSlots.push({
          time: `${formattedHour}:${formattedMin} ${period}`,
          available: true,
          service: "lunch"
        });
      }
    }
    
    // Dinner hours (7 PM to 10:30 PM)
    for (let hour = 19; hour <= 22; hour++) {
      for (let min = 0; min < 60; min += 30) {
        if (hour === 22 && min > 30) continue; // Stop at 10:30 PM
        
        const period = "PM";
        const formattedHour = hour - 12;
        const formattedMin = min === 0 ? "00" : min;
        timeSlots.push({
          time: `${formattedHour}:${formattedMin} ${period}`,
          available: true,
          service: "dinner"
        });
      }
    }
    
    return timeSlots;
  };
  
  const timeSlots = generateTimeSlots();
  
  const handleGuestSelection = (guests) => {
    setFormData({
      ...formData,
      guests,
    });
  };
  
  const handleDateSelection = (date, index) => {
    setSelectedDateIndex(index);
    setFormData({
      ...formData,
      date: date.fullDate,
    });
  };
  
  const handleTimeSelection = (time) => {
    setFormData({
      ...formData,
      time,
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const nextStep = () => {
    // Validate current step
    if (currentStep === 1 && !formData.guests) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please select the number of guests.",
      });
      return;
    }
    
    if (currentStep === 2 && !formData.date) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please select a date for your reservation.",
      });
      return;
    }
    
    if (currentStep === 3 && !formData.time) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please select a time for your reservation.",
      });
      return;
    }
    
    // Clear any error messages
    setFormStatus({
      submitted: false,
      error: false,
      message: "",
    });
    
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all required fields.",
      });
      setFormSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address.",
      });
      setFormSubmitting(false);
      return;
    }
    
    // Phone validation - adjust regex for international numbers
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid phone number.",
      });
      setFormSubmitting(false);
      return;
    }
    
    try {
      // Format the date properly for MongoDB
      const formattedDate = formData.date instanceof Date 
        ? formData.date.toISOString() 
        : new Date().toISOString();
      
      // Create reservation object
      const reservationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formattedDate,
        time: formData.time,
        guests: formData.guests,
        specialRequests: formData.specialRequests || "",
        status: "pending" // Default status for new reservations
      };
      
      console.log('Sending reservation data:', reservationData);
      
      // Send reservation data to API
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create reservation');
      }
      
      const data = await response.json();
      console.log('Reservation created successfully:', data);
      
      // Reservation created successfully
      setFormSubmitting(false);
      setReservationSuccess(true);
    } catch (error) {
      console.error('Error creating reservation:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: error.message || "Failed to create reservation. Please try again.",
      });
      setFormSubmitting(false);
    }
  };
  
  return (
    <ReservationsContainer>
      <PageHeader>
        <div>
          <PageTitle>Reservations</PageTitle>
          <PageSubtitle>
            Book a table at our restaurant and enjoy an unforgettable dining experience.
          </PageSubtitle>
        </div>
      </PageHeader>
      
      <ReservationsSection>
        <Container>
          <BookingContainer>
            <BookingHeader>
              <RestaurantTitle>KÔYA Restaurant</RestaurantTitle>
            </BookingHeader>
            
            <BookingContent>
              {!reservationSuccess ? (
                <>
                  <StepIndicator>
                    <StepDot active={currentStep >= 1} />
                    <StepDot active={currentStep >= 2} />
                    <StepDot active={currentStep >= 3} />
                    <StepDot active={currentStep >= 4} />
                  </StepIndicator>
                
                  {currentStep === 1 && (
                    <BookingStep
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <StepTitle>How many guests?</StepTitle>
                      <StepContent>
                        <GuestSelector>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                            <GuestButton 
                              key={num} 
                              selected={formData.guests === num}
                              onClick={() => handleGuestSelection(num)}
                            >
                              {num}
                            </GuestButton>
                          ))}
                          <GuestButton 
                            selected={formData.guests > 13}
                            onClick={() => handleGuestSelection(14)}
                          >
                            +
                          </GuestButton>
                        </GuestSelector>
                      </StepContent>
                      
                      <StepActions>
                        <Button onClick={nextStep}>
                          Continue <FaArrowRight size={12} />
                        </Button>
                      </StepActions>
                      
                      {formStatus.submitted && formStatus.error && (
                        <FormMessage 
                          isError={true}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {formStatus.message}
                        </FormMessage>
                      )}
                    </BookingStep>
                  )}
                  
                  {currentStep === 2 && (
                    <BookingStep
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <StepTitle>Select date</StepTitle>
                      <StepContent>
                        <MonthNavigation>
                          <MonthButton disabled>
                            &lt;
                          </MonthButton>
                          <MonthName>
                            {availableDates.length > 0 && availableDates[selectedDateIndex].fullDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </MonthName>
                          <MonthButton disabled>
                            &gt;
                          </MonthButton>
                        </MonthNavigation>
                        
                        <DateSelector>
                          {availableDates.map((date, index) => (
                            <DateButton 
                              key={index} 
                              selected={selectedDateIndex === index}
                              disabled={!date.available}
                              onClick={() => handleDateSelection(date, index)}
                            >
                              <span className="day-name">{date.dayName}</span>
                              <span className="day-number">{date.day}</span>
                            </DateButton>
                          ))}
                        </DateSelector>
                      </StepContent>
                      
                      <StepActions>
                        <Button onClick={prevStep} style={{ marginRight: 'auto', backgroundColor: '#6c757d' }}>
                          Back
                        </Button>
                        <Button onClick={nextStep}>
                          Continue <FaArrowRight size={12} />
                        </Button>
                      </StepActions>
                      
                      {formStatus.submitted && formStatus.error && (
                        <FormMessage 
                          isError={true}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {formStatus.message}
                        </FormMessage>
                      )}
                    </BookingStep>
                  )}
                  
                  {currentStep === 3 && (
                    <BookingStep
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <StepTitle>Select time</StepTitle>
                      <StepContent>
                        <h4 style={{marginBottom: '1rem', fontSize: '1rem', fontWeight: '500'}}>First Service (Lunch)</h4>
                        <TimeSelector>
                          {timeSlots.filter(slot => slot.service === "lunch").map((timeSlot, index) => (
                            <TimeButton 
                              key={index} 
                              selected={formData.time === timeSlot.time}
                              disabled={!timeSlot.available}
                              onClick={() => handleTimeSelection(timeSlot.time)}
                            >
                              {timeSlot.time}
                            </TimeButton>
                          ))}
                        </TimeSelector>
                        
                        <h4 style={{marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1rem', fontWeight: '500'}}>Second Service (Dinner)</h4>
                        <TimeSelector>
                          {timeSlots.filter(slot => slot.service === "dinner").map((timeSlot, index) => (
                            <TimeButton 
                              key={index} 
                              selected={formData.time === timeSlot.time}
                              disabled={!timeSlot.available}
                              onClick={() => handleTimeSelection(timeSlot.time)}
                            >
                              {timeSlot.time}
                            </TimeButton>
                          ))}
                        </TimeSelector>
                      </StepContent>
                      
                      <StepActions>
                        <Button onClick={prevStep} style={{ marginRight: 'auto', backgroundColor: '#6c757d' }}>
                          Back
                        </Button>
                        <Button onClick={nextStep}>
                          Continue <FaArrowRight size={12} />
                        </Button>
                      </StepActions>
                      
                      {formStatus.submitted && formStatus.error && (
                        <FormMessage 
                          isError={true}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {formStatus.message}
                        </FormMessage>
                      )}
                    </BookingStep>
                  )}
                  
                  {currentStep === 4 && (
                    <BookingStep
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      as="form"
                      onSubmit={handleSubmit}
                    >
                      <StepTitle>Your details</StepTitle>
                      <StepContent>
                        <FormGroup>
                          <FormLabel htmlFor="name">
                            <FaUser size={14} /> Full Name *
                          </FormLabel>
                          <FormInput 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="email">
                            <FaEnvelope size={14} /> Email *
                          </FormLabel>
                          <FormInput 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="phone">
                            <FaPhone size={14} /> Phone Number *
                          </FormLabel>
                          <FormInput 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            placeholder="e.g., 555-123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="specialRequests">
                            <FaInfoCircle size={14} /> Special Requests
                          </FormLabel>
                          <FormTextarea
                            id="specialRequests"
                            name="specialRequests"
                            placeholder="Any special requirements or dietary restrictions?"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </StepContent>
                      
                      <StepActions>
                        <Button type="button" onClick={prevStep} style={{ marginRight: 'auto', backgroundColor: '#6c757d' }}>
                          Back
                        </Button>
                        <Button type="submit" disabled={formSubmitting}>
                          {formSubmitting ? "Processing..." : "Complete Reservation"}
                        </Button>
                      </StepActions>
                      
                      {formStatus.submitted && (
                        <FormMessage 
                          isError={formStatus.error}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {formStatus.message}
                        </FormMessage>
                      )}
                    </BookingStep>
                  )}
                  
                  <BookingSidebar>
                    <RestaurantInfo>
                      <InfoItem>
                        <FaMapMarkerAlt />
                        <div>123 Restaurant Avenue, New York, NY 10001</div>
                      </InfoItem>
                      <InfoItem>
                        <FaPhone />
                        <div>(555) 123-4567</div>
                      </InfoItem>
                      <InfoItem>
                        <FaClock />
                        <div>
                          <strong>Hours:</strong><br />
                          Lunch: 12:00 PM - 3:00 PM<br />
                          Dinner: 7:00 PM - 10:30 PM
                        </div>
                      </InfoItem>
                      <SocialLinks>
                        <SocialLink href="#" aria-label="Instagram">
                          <FaInstagram />
                        </SocialLink>
                      </SocialLinks>
                    </RestaurantInfo>
                    
                    <PolicyNote>
                      Your table will be released 15 minutes after the start of your reservation.
                      For the second service starting from 10:30 PM, it is likely that you will have to
                      wait a little before being seated. Thank you for your understanding.
                      <br /><br />
                      Our dress code is smart casual. We kindly request that guests refrain from wearing athletic
                      clothing, shorts, flip-flops, sandals (men) or caps.
                    </PolicyNote>
                  </BookingSidebar>
                </>
              ) : (
                <SuccessContainer
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SuccessIcon>
                    <FaCheckCircle />
                  </SuccessIcon>
                  <SuccessTitle>Reservation Confirmed!</SuccessTitle>
                  <SuccessMessage>
                    Thank you for choosing KÔYA Restaurant. We've received your reservation request and will send you a confirmation email shortly.
                  </SuccessMessage>
                  
                  <ReservationDetails>
                    <DetailTitle>Reservation Details:</DetailTitle>
                    <DetailItem>
                      <FaUsers />
                      <span>{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</span>
                    </DetailItem>
                    <DetailItem>
                      <FaCalendarAlt />
                      <span>Date: {formData.date instanceof Date ? formData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not specified'}</span>
                    </DetailItem>
                    <DetailItem>
                      <FaClock />
                      <span>Time: {formData.time}</span>
                    </DetailItem>
                    <DetailItem>
                      <FaMapMarkerAlt />
                      <span>KÔYA Restaurant, 123 Restaurant Avenue, New York, NY 10001</span>
                    </DetailItem>
                  </ReservationDetails>
                  
                  <Button as="a" href="/menu" style={{ margin: '0 auto' }}>
                    View Our Menu
                  </Button>
                </SuccessContainer>
              )}
            </BookingContent>
          </BookingContainer>
        </Container>
      </ReservationsSection>
      
      <PolicySection>
        <PolicyContainer>
          <PolicyTitle>Reservation Policies</PolicyTitle>
          <PolicyGrid>
            <PolicyCard>
              <PolicyCardTitle>
                <FaCalendarAlt /> Cancellation Policy
              </PolicyCardTitle>
              <PolicyText>
                We kindly ask for 24-hour notice for cancellations. For parties of 6 or more, we require 48-hour notice to avoid a cancellation fee.
              </PolicyText>
            </PolicyCard>
            
            <PolicyCard>
              <PolicyCardTitle>
                <FaClock /> Seating Duration
              </PolicyCardTitle>
              <PolicyText>
                For parties of 2-4, we allocate a 2-hour dining period. For larger groups, we offer a 2.5-hour dining period to ensure everyone enjoys their experience.
              </PolicyText>
            </PolicyCard>
            
            <PolicyCard>
              <PolicyCardTitle>
                <FaUsers /> Large Parties
              </PolicyCardTitle>
              <PolicyText>
                For groups of 8 or more, please contact us directly at (555) 123-4567 or email reservations@koyarestaurant.com to arrange your reservation.
              </PolicyText>
            </PolicyCard>
          </PolicyGrid>
          
          <FooterLinks>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </FooterLinks>
        </PolicyContainer>
      </PolicySection>
    </ReservationsContainer>
  );
};

export default Reservations;
