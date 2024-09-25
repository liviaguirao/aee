import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/App.css';
import '../styles/Style.css';
import Navbar from '../components/navbar';

function Filtro_artista() {
  const navigate = useNavigate();
  
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const countries = [
    { name: 'Brasil', code: 'BR' },
    { name: 'Estados Unidos', code: 'US' },
    { name: 'França', code: 'FR' },
    { name: 'Alemanha', code: 'DE' }
  ];

  const statesData = {
    'BR': ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'],
    'US': ['Califórnia', 'Nova York', 'Texas'],
    'FR': ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes'],
    'DE': ['Baviera', 'Berlim', 'Baden-Württemberg']
  };

  const citiesData = {
    'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Contagem'],
    'Califórnia': ['Los Angeles', 'San Francisco', 'San Diego'],
    'Nova York': ['Nova York', 'Buffalo', 'Rochester'],
    'Texas': ['Houston', 'Austin', 'Dallas'],
    'Île-de-France': ['Paris', 'Versalhes', 'Saint-Denis'],
    'Provence-Alpes-Côte d\'Azur': ['Marselha', 'Nice', 'Toulon'],
    'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Clermont-Ferrand'],
    'Baviera': ['Munique', 'Nuremberg', 'Augsburgo'],
    'Berlim': ['Berlim'],
    'Baden-Württemberg': ['Stuttgart', 'Mannheim', 'Karlsruhe']
  };

  const handleFilterClickCriar = () => {
    navigate('/'); 
  };

  const handleExpandFilter = (filter) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  const filters = [
    { label: 'Tipo de artista', options: ['Cantor', 'Ator', 'Dançarino', 'Músico', 'Artista plástico', 'Humorista', 'Outro'] },
    { label: 'País', options: countries.map(country => country.name) },
    { label: 'Estado', options: selectedCountry ? statesData[countries.find(country => country.name === selectedCountry)?.code] || [] : [] },
    { label: 'Cidade', options: selectedState ? citiesData[selectedState] || [] : [] },
    { label: 'Gênero', options: ['Comédia', 'Drama', 'Terror'] },
    { label: 'Data', options: [] } // Filtro de data tratado separadamente
  ];

  const Button = ({ text, onClick, className }) => {
    return (
      <div className={`button-base ${className}`} onClick={onClick}>
        {text}
      </div>
    );
  };

  const handleCityChange = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter(c => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'white', width: '100vw' }}>
      <Navbar />
      <div style={{ width: '80vw', padding: '2vh', overflowY: 'auto' }}>
        <Button 
          text="Finalizar"
          onClick={handleFilterClickCriar}
          className='button-finalizar'
        />

        {filters.map((filter, index) => (
          <div key={index} style={{ marginBottom: '2vh' }}>
            {/* Filtro principal */}
            <div 
              style={{ 
                width: '30vw', 
                height: '6vh', 
                background: 'rgba(255, 0, 84, 0.19)', 
                borderRadius: 16, 
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 1vw'
              }} 
              onClick={() => handleExpandFilter(filter.label)}
            >
              <div style={{ fontSize: '150%', fontFamily: 'Manjari', color: 'black' }}>
                {filter.label}
              </div>
              <div style={{ transform: expandedFilter === filter.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </div>
            </div>

            {/* Opções do filtro quando expandido */}
            {expandedFilter === filter.label && (
              <div 
                style={{
                  marginTop: '2vh',
                  color: 'black',
                  padding: '0.5vw 0',
                  background: 'rgba(255, 0, 84, 0.1)', 
                  borderRadius: '1vh',
                  width: 'calc(40vw)',
                }}
              >
                {/* Renderização condicional dos filtros */}
                {filter.label === 'País' ? (
                  filter.options.map((option, idx) => (
                    <div key={idx} style={{ marginBottom: '1vh', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="radio" 
                        id={`country-${option}`} 
                        name="country" 
                        value={option} 
                        checked={selectedCountry === option}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                          setSelectedState(''); // Resetar estado ao mudar de país
                          setSelectedCities([]); // Resetar cidades ao mudar de país
                        }} 
                      />
                      <label htmlFor={`country-${option}`} style={{ marginLeft: '1vw', fontSize: '100%' }}>
                        {option}
                      </label>
                    </div>
                  ))
                ) : filter.label === 'Estado' ? (
                  filter.options.map((option, idx) => (
                    <div key={idx} style={{ marginBottom: '1vh', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="radio" 
                        id={`state-${option}`} 
                        name="state" 
                        value={option} 
                        checked={selectedState === option}
                        onChange={(e) => {
                          setSelectedState(e.target.value);
                          setSelectedCities([]); // Resetar cidades ao mudar de estado
                        }} 
                      />
                      <label htmlFor={`state-${option}`} style={{ marginLeft: '1vw', fontSize: '100%' }}>
                        {option}
                      </label>
                    </div>
                  ))
                ) : filter.label === 'Cidade' ? (
                  filter.options.map((option, idx) => (
                    <div key={idx} style={{ marginBottom: '1vh', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="checkbox" 
                        id={`city-${option}`} 
                        name="city"
                        value={option}
                        checked={selectedCities.includes(option)} 
                        onChange={() => handleCityChange(option)} 
                      />
                      <label htmlFor={`city-${option}`} style={{ marginLeft: '1vw', fontSize: '100%' }}>
                        {option}
                      </label>
                    </div>
                  ))
                ) : filter.label === 'Data' ? (
                  <div style={{ marginTop: '1vh', display: 'flex', justifyContent: 'flex-start' }}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Selecione uma data"
                      className="date-picker"
                    />
                  </div>
                ) : (
                  filter.options.map((option, idx) => (
                    <div key={idx} style={{ marginBottom: '1vh', display: 'flex', alignItems: 'center' }}>
                      <input type="checkbox" id={`${filter.label}-${option}`} />
                      <label htmlFor={`${filter.label}-${option}`} style={{ marginLeft: '1vw', fontSize: '100%' }}>
                        {option}
                      </label>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtro_artista;
