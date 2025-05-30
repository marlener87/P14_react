import { useState } from 'react'
import './home.scss'
import Modal from '../../composants/modal/modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import states from '../../assets/states.json';
import Navigation from '../../composants/navigation/nav';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employeeSlice';

// liste des départements
const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

function Home() {
    // états pour afficher ou cacher la modale
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    // champs du formulaire
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [department, setDepartment] = useState('');

    // soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // empêche le rechargement de la page

        const employee = {
            firstName,
            lastName,
            birthDate: birthDate?.toISOString().split('T')[0],
            startDate: startDate?.toISOString().split('T')[0],
            street,
            city,
            state,
            department,
        };

        dispatch(addEmployee(employee)); // ajout dans Redux

        console.log('Employé(e) créé(e) : ', employee);

        setShowModal(true); // ouvre la modale

        // réinitialise le formulaire
        setFirstName('');
        setLastName('');
        setBirthDate(null);
        setStartDate(null);
        setStreet('');
        setCity('');
        setState('');
        setDepartment('');
    };


    return (
        <>
        <Navigation></Navigation>
        
        <section className='homeBody'>
            <h1 className='h1Body'>Create Employee</h1>

            <form className="employeeForm" onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="userFirstName">First Name</label>
                <input
                    id="userFirstName"
                    name="userFirstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoComplete="new-password"
                />

                <label htmlFor="userLastName">Last Name</label>
                <input
                    id="userLastName"
                    name="userLastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    autoComplete="new-password"
                />

                <div className="dateBlock">
                    <div>
                        <label htmlFor="birthDate">Date of Birth</label>
                        <DatePicker
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select date"
                            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))} // personne majeure
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            id="birthDate"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select date"
                            id="startDate"
                        />    
                    </div>           
                </div>


                <fieldset>
                    <legend>ADDRESS</legend>

                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        name="userStreet"
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        name="userCity"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <label htmlFor="state">State</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                    <option value="">-- Select a state --</option>
                        {states.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                >
                    <option value="">-- Select a department --</option>
                    {departments.map((d) => (
                    <option key={d} value={d}>{d}</option>
                    ))}
                </select>

                <button type="submit">Save</button>
            </form>

            <div className="App">
                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title="Good news"
                >
                    <p>Employee Created !</p>
                </Modal>
            </div>
        </section>
        </>
    )
}

export default Home;