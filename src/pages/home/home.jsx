//import { useState } from 'react'
import reactLogo from '../../assets/logo.png'
import './home.scss'
//import Modal from '../../composants/modal/modal';
import { Link } from 'react-router-dom';
import EmployeeForm from '../../composants/employeeForm/employeeForm';

function Home() {
    //const [showModal, setShowModal] = useState(false);

    return (
        <>
        <main>
            <img src={reactLogo} className="logo" alt="React logo" />
            <h1 className='titleLogo'>HRnet</h1>
        </main>

        <body>
            <Link to="/#">View Current Employees</Link>

            <h1 className='h1Body'>Create Employee</h1>

            <EmployeeForm />

            {/*<div className="App">
                <button onClick={() => setShowModal(true)}>Save</button>

                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title="Good news"
                >
                    <p>Employee Created !</p>
                </Modal>
            </div>*/}
        </body>
        </>
    )
}

export default Home;