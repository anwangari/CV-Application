import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import './styles/App.css';

function App() {
  // State for general information
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isEditingGeneral, setIsEditingGeneral] = useState(true);

  // State for education
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: ''
  });
  const [isEditingEducation, setIsEditingEducation] = useState(true);

  // State for experience
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: ''
  });
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  // Handlers for general information
  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
    setIsEditingGeneral(false);
  };

  const handleGeneralEdit = () => {
    setIsEditingGeneral(true);
  };

  // Handlers for education
  const handleEducationSubmit = (data) => {
    setEducation(data);
    setIsEditingEducation(false);
  };

  const handleEducationEdit = () => {
    setIsEditingEducation(true);
  };

  // Handlers for experience
  const handleExperienceSubmit = (data) => {
    setExperience(data);
    setIsEditingExperience(false);
  };

  const handleExperienceEdit = () => {
    setIsEditingExperience(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="cv-container text-center">
          <h1>CV Builder</h1>
          <p>Create your professional CV by filling out the sections below</p>
        </div>
      </header>

      <main className="cv-container">
        <GeneralInfo
          data={generalInfo}
          onSubmit={handleGeneralSubmit}
          onEdit={handleGeneralEdit}
          isEditing={isEditingGeneral}
        />

        <Education
          data={education}
          onSubmit={handleEducationSubmit}
          onEdit={handleEducationEdit}
          isEditing={isEditingEducation}
        />

        <Experience
          data={experience}
          onSubmit={handleExperienceSubmit}
          onEdit={handleExperienceEdit}
          isEditing={isEditingExperience}
        />
      </main>
    </div>
  );
}

export default App;