import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/filtro.module.css'
import Navbar from '../components/navbar';

function Filtro_Evento() {
    const location = useLocation();
  const data = location.state?.data;
  console.log("ola perfil: " + data.cidade);
    const navigate = useNavigate();

    // Usando um único estado para armazenar todos os filtros
    const [filters, setFilters] = useState({
        expandedFilter: null,
        selectedCountry: '',
        selectedState: '',
        selectedCities: [],
        selectedDate: null,
        selectedGenres: []
    });

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
        console.log("Filtros Selecionados:", filters); // Adiciona um console.log
        navigate('/pagina-inicial/criar-publicação', { state: { data: data, filters  } });
    };

    const handleExpandFilter = (filter) => {
        setFilters(prev => ({ ...prev, expandedFilter: prev.expandedFilter === filter ? null : filter }));
    };

    const handleCityChange = (city) => {
        setFilters(prev => ({
            ...prev,
            selectedCities: prev.selectedCities.includes(city)
                ? prev.selectedCities.filter(c => c !== city)
                : [...prev.selectedCities, city]
        }));
    };

    const handleCountryChange = (country) => {
        setFilters(prev => ({
            ...prev,
            selectedCountry: country,
            selectedState: '', // Resetar estado ao mudar de país
            selectedCities: [] // Resetar cidades ao mudar de país
        }));
    };

    const handleStateChange = (state) => {
        setFilters(prev => ({
            ...prev,
            selectedState: state,
            selectedCities: [] // Resetar cidades ao mudar de estado
        }));
    };

    const handleDateChange = (date) => {
        setFilters(prev => ({ ...prev, selectedDate: date }));
    };

    const handleGenreChange = (genre) => {
        setFilters(prev => ({
            ...prev,
            selectedGenres: prev.selectedGenres.includes(genre)
                ? prev.selectedGenres.filter(g => g !== genre)
                : [...prev.selectedGenres, genre]
        }));
    };

    const filtersConfig = [
        { label: 'Tipo de eventos', options: ['Show','Musical', 'Teatro', 'Dança', 'Cultural', 'Humorístico', 'Esportivo', 'Festival', 'Feira', 'Congresso', 'Palestra', 'Outro'] },
        { label: 'País', options: countries.map(country => country.name) },
        { label: 'Estado', options: filters.selectedCountry ? statesData[countries.find(country => country.name === filters.selectedCountry)?.code] || [] : [] },
        { label: 'Cidade', options: filters.selectedState ? citiesData[filters.selectedState] || [] : [] },
        { label: 'Gênero', options: [ 'Comédia', 'Drama', 'Terror', 'Romance', 'Aventura', 'Ficção Científica', 'Documentário', 'Infantil', 
            'Ação', 'Suspense', 'Musical', 'Fantasia', 'Histórico', 'Biografia', 'Guerra', 'Mistério', 'Animação', 
            'Faroeste', 'Reality Show', 'Experimental', 'Crime', 'Super-herói', 'Thriller', 'Musical de Palco', 
            'Stand-up', 'Ópera', 'Improviso', 'Show de Talentos', 'Clássico', 'Sertanejo', 'Rock', 'Pop', 
            'Samba', 'Forró', 'Pagode', 'MPB', 'Funk', 'Eletrônica', 'Jazz', 'Hip Hop', 'Rap', 'Reggae', 
            'Gospel', 'Bossa Nova', 'Heavy Metal', 'Indie', 'Country', 'K-Pop', 'Música Clássica'] },
        { label: 'Data', options: [] } // Filtro de data tratado separadamente
    ];



    return (
        <div className={styles.container}>
            <Navbar filtroSelecionado={null} datas={data} />
            <div className={styles.container2} >
                <div className={styles.containerFiltros}>

                    {filtersConfig.map((filter, index) => (
                        <div className={styles.containerfiltro} key={index}>
                            {/* Filtro principal */}
                            <div className={styles.nomefiltro} onClick={() => handleExpandFilter(filter.label)}>
                                ▼ {filter.label}
                            </div>

                            {/* Opções do filtro quando expandido */}
                            {filters.expandedFilter === filter.label && (
                                <div className={styles.containerSeleção}>
                                    {/* Renderização condicional dos filtros */}
                                    {filter.label === 'País' ? (
                                        filter.options.map((option, idx) => (
                                            <div className={styles.filtro} key={idx}>
                                                <input
                                                    type="radio"
                                                    id={`country-${option}`}
                                                    name="country"
                                                    value={option}
                                                    checked={filters.selectedCountry === option}
                                                    onChange={() => handleCountryChange(option)}
                                                />
                                                <label htmlFor={`country-${option}`}>{option}</label>
                                            </div>
                                        ))
                                    ) : filter.label === 'Estado' ? (
                                        filter.options.map((option, idx) => (
                                            <div key={idx}>
                                                <input
                                                    type="radio"
                                                    id={`state-${option}`}
                                                    name="state"
                                                    value={option}
                                                    checked={filters.selectedState === option}
                                                    onChange={() => handleStateChange(option)}
                                                />
                                                <label htmlFor={`state-${option}`}>{option}</label>
                                            </div>
                                        ))
                                    ) : filter.label === 'Cidade' ? (
                                        filter.options.map((option, idx) => (
                                            <div key={idx}>
                                                <input
                                                    type="checkbox"
                                                    id={`city-${option}`}
                                                    name="city"
                                                    value={option}
                                                    checked={filters.selectedCities.includes(option)}
                                                    onChange={() => handleCityChange(option)}
                                                />
                                                <label htmlFor={`city-${option}`}>{option}</label>
                                            </div>
                                        ))
                                    ) : filter.label === 'Data' ? (
                                        <div>
                                            <DatePicker
                                                selected={filters.selectedDate}
                                                onChange={handleDateChange}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Selecione uma data"
                                                className="date-picker"
                                            />
                                        </div>
                                    ) : (
                                        filter.options.map((option, idx) => (
                                            <div key={idx}>
                                                <input
                                                    type="checkbox"
                                                    id={`${filter.label}-${option}`}
                                                    checked={filters.selectedGenres.includes(option)}
                                                    onChange={() => handleGenreChange(option)}
                                                />
                                                <label htmlFor={`${filter.label}-${option}`}>{option}</label>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.containerbutton}>
                    <button
                        onClick={handleFilterClickCriar}
                    >Adicionar filtros
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Filtro_Evento;
