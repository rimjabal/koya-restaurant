import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaSave, 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLink, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter 
} from "react-icons/fa";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  color: #6c757d;
  margin: 0;
  font-size: 0.9rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  outline: none;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  outline: none;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
  }
`;

const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 1rem;
    color: #6c757d;
  }
`;

const IconInput = styled(Input)`
  padding-left: 2.5rem;
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : '#6c757d'};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primaryDark : '#f8f9fa'};
  }
`;

const TimeRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Settings = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "Koya Restaurant",
    description: "A modern dining experience with Japanese fusion cuisine in a comfortable, elegant setting.",
    phone: "+212-522-222-333",
    email: "info@koyarestaurant.com",
    address: "123 Boulevard Mohammed V, Casablanca, Morocco",
    website: "https://koyarestaurant.com",
    facebook: "https://facebook.com/koyarestaurant",
    instagram: "https://instagram.com/koyarestaurant",
    twitter: "https://twitter.com/koyarestaurant"
  });
  
  const [openingHours, setOpeningHours] = useState([
    { day: 'Monday', isOpen: true, openTime: '11:00', closeTime: '23:00' },
    { day: 'Tuesday', isOpen: true, openTime: '11:00', closeTime: '23:00' },
    { day: 'Wednesday', isOpen: true, openTime: '11:00', closeTime: '23:00' },
    { day: 'Thursday', isOpen: true, openTime: '11:00', closeTime: '23:00' },
    { day: 'Friday', isOpen: true, openTime: '10:00', closeTime: '00:00' },
    { day: 'Saturday', isOpen: true, openTime: '10:00', closeTime: '00:00' },
    { day: 'Sunday', isOpen: false, openTime: '12:00', closeTime: '22:00' }
  ]);
  
  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setRestaurantInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const toggleDayOpen = (index) => {
    const newHours = [...openingHours];
    newHours[index].isOpen = !newHours[index].isOpen;
    setOpeningHours(newHours);
  };
  
  const handleTimeChange = (index, field, value) => {
    const newHours = [...openingHours];
    newHours[index][field] = value;
    setOpeningHours(newHours);
  };
  
  const handleSaveSettings = () => {
    // Here you would save the settings to your backend
    console.log("Saving settings:", { restaurantInfo, openingHours });
    alert("Settings saved successfully!");
  };
  
  return (
    <SettingsContainer>
      <SettingsHeader>
        <Title>Restaurant Settings</Title>
        <SaveButton onClick={handleSaveSettings}>
          <FaSave />
          Save Changes
        </SaveButton>
      </SettingsHeader>
      
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Update your restaurant's basic information</CardDescription>
        </CardHeader>
        
        <FormGrid>
          <FormGroup>
            <Label>Restaurant Name</Label>
            <Input 
              type="text" 
              name="name" 
              value={restaurantInfo.name} 
              onChange={handleInfoChange} 
            />
          </FormGroup>
          
          <FormGroup style={{ gridColumn: "1 / -1" }}>
            <Label>Description</Label>
            <Textarea 
              name="description" 
              value={restaurantInfo.description} 
              onChange={handleInfoChange}
            />
          </FormGroup>
        </FormGrid>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Manage how customers can reach your restaurant</CardDescription>
        </CardHeader>
        
        <FormGrid>
          <FormGroup>
            <Label>Phone Number</Label>
            <InputWithIcon>
              <FaPhone size={14} />
              <IconInput 
                type="tel" 
                name="phone" 
                value={restaurantInfo.phone} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
          
          <FormGroup>
            <Label>Email Address</Label>
            <InputWithIcon>
              <FaEnvelope size={14} />
              <IconInput 
                type="email" 
                name="email" 
                value={restaurantInfo.email} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
          
          <FormGroup style={{ gridColumn: "1 / -1" }}>
            <Label>Address</Label>
            <InputWithIcon>
              <FaMapMarkerAlt size={14} />
              <IconInput 
                type="text" 
                name="address" 
                value={restaurantInfo.address} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
        </FormGrid>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Opening Hours</CardTitle>
          <CardDescription>Set when your restaurant is open for business</CardDescription>
        </CardHeader>
        
        {openingHours.map((hours, index) => (
          <div key={hours.day} style={{ marginBottom: '1rem' }}>
            <DaysRow>
              <DayButton 
                active={hours.isOpen}
                onClick={() => toggleDayOpen(index)}
              >
                {hours.day.substring(0, 3)}
              </DayButton>
            </DaysRow>
            
            {hours.isOpen && (
              <TimeRow>
                <FormGroup>
                  <Label>Opening Time</Label>
                  <InputWithIcon>
                    <FaClock size={14} />
                    <IconInput 
                      type="time" 
                      value={hours.openTime}
                      onChange={(e) => handleTimeChange(index, 'openTime', e.target.value)}
                    />
                  </InputWithIcon>
                </FormGroup>
                
                <FormGroup>
                  <Label>Closing Time</Label>
                  <InputWithIcon>
                    <FaClock size={14} />
                    <IconInput 
                      type="time" 
                      value={hours.closeTime}
                      onChange={(e) => handleTimeChange(index, 'closeTime', e.target.value)}
                    />
                  </InputWithIcon>
                </FormGroup>
              </TimeRow>
            )}
          </div>
        ))}
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Online Presence</CardTitle>
          <CardDescription>Manage your restaurant's website and social media links</CardDescription>
        </CardHeader>
        
        <FormGrid>
          <FormGroup>
            <Label>Website</Label>
            <InputWithIcon>
              <FaLink size={14} />
              <IconInput 
                type="url" 
                name="website" 
                value={restaurantInfo.website} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
          
          <FormGroup>
            <Label>Facebook</Label>
            <InputWithIcon>
              <FaFacebook size={14} />
              <IconInput 
                type="url" 
                name="facebook" 
                value={restaurantInfo.facebook} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
          
          <FormGroup>
            <Label>Instagram</Label>
            <InputWithIcon>
              <FaInstagram size={14} />
              <IconInput 
                type="url" 
                name="instagram" 
                value={restaurantInfo.instagram} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
          
          <FormGroup>
            <Label>Twitter</Label>
            <InputWithIcon>
              <FaTwitter size={14} />
              <IconInput 
                type="url" 
                name="twitter" 
                value={restaurantInfo.twitter} 
                onChange={handleInfoChange}
              />
            </InputWithIcon>
          </FormGroup>
        </FormGrid>
      </Card>
    </SettingsContainer>
  );
};

export default Settings;
